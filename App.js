import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import A from './son/A.wav';
import B from './son/B.wav';
import C from './son/C.wav';
import D from './son/D.wav';
import E from './son/E.wav';
import F from './son/F.wav';
import G from './son/G.wav';
import A2 from './son/A2.wav';
import C2 from './son/C2.wav';
import D2 from './son/D2.wav';
import F2 from './son/F2.wav';
import G2 from './son/G2.wav';
import { useState, useEffect } from 'react';

const listblanche = [A, B, C, D, E, F, G]
const listnoire = [A2, C2, D2, F2, G2]

export default function App() {
  const [sound, setSound] = useState()

  const playSound = async (index) => {
    console.log(index);
    const son = listblanche[index]
    const { sound } = await Audio.Sound.createAsync(son);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      {listblanche.map((item, index) => {
        return (
          <TouchableOpacity onPress={() => playSound(index)}><Text>{index}</Text></TouchableOpacity>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
