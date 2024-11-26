import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import BackendCaller from '../../auxiliar/BackendCaller';
import { reloadContext } from '../../auxiliar/reload';
import { useContext } from 'react';
import { useRouter } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';


export default function AddPlanetScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [reload, setReload] = useContext(reloadContext);
  const favourite = false;

  const router = useRouter();

  const handleSubmit = async () => {
    const newDestino = { name, description, difficulty, favourite };
    await BackendCaller.postNewDestino(newDestino);
    router.push('/home');
    setReload(!reload);
  };

  const handlerDifficulty = (value) =>{
    setDifficulty(value)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre del destino"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      {/* <Select
        placeholder="Dificultad"
        value={difficulty}
        onChange={setDifficulty}
        >
        <Option value="">Seleccione una dificultad</Option>
        {dificultades.map(dificultad => (
        <Option key={dificultad} value={dificultad}>
        {dificultad}
        </Option>
        ))}
      </Select> */}
      <RNPickerSelect
      onValueChange={(value) => handlerDifficulty(value)}
      items={[
        { label: 'easy', value: 'easy' },
        { label: 'medium', value: 'medium' },
        { label: 'hard', value: 'hard' },
      ]}
    />
      <Button title="Agregar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderBottomWidth: 1, marginBottom: 16 },
});



