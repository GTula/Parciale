import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import BackendCaller from '../../auxiliar/BackendCaller';
import { Text } from 'react-native';

export default function EditDestino({ destino, setReload }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [info, setInfo] = useState({
    name: destino.name,
    description: destino.description,
    difficulty: destino.difficulty,
  });

  const handleInputChange = (field, value) => {
    setInfo({ ...info, [field]: value });
  };

  const handleUpdate = async () => {
    try {
      const updatedDestino = {
        ...destino,
        name: info.name,
        description: info.description,
        difficulty: info.difficulty
      };

      const response = await BackendCaller.putDestinoById(destino.id, updatedDestino);
      if (response.statusCode === 200) {
        setModalVisible(false);
        setReload(prev => !prev);
      } else {
        console.error("Error al actualizar el destino");
      }
    } catch (error) {
      console.error("Error al enviar la actualización:", error);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.editButton}>
        <Text style={styles.editText}>Editar</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={info.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Descripción"
            value={info.description}
            onChangeText={(text) => handleInputChange('description', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Dificultad"
            value={info.difficulty}
            onChangeText={(text) => handleInputChange('difficulty', text)}
          />
          <View style={styles.modalButtons}>
            <Button title="Actualizar" onPress={handleUpdate} />
            <Button title="Cancelar" color="red" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  editButton: { padding: 10, backgroundColor: '#007BFF', borderRadius: 8 },
  editText: { color: '#fff', textAlign: 'center' },
  modalContainer: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.8)', justifyContent: 'center', padding: 16 },
  input: { backgroundColor: '#fff', marginBottom: 16, padding: 10, borderRadius: 8 },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between' },
  
});
