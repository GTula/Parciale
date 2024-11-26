import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import BackendCaller from '../../auxiliar/BackendCaller';

export default function DeleteDestino({ destinoId, setReload }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await BackendCaller.deleteDestinoById(destinoId);
      setReload(prev => !prev);
      router.back();
    } catch (error) {
      console.error("Error al eliminar el destino:", error);
    }
  };

  return (
    <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
      <Text style={styles.deleteText}>Eliminar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  deleteButton: { padding: 10, backgroundColor: '#FF4136', borderRadius: 8 },
  deleteText: { color: '#fff', textAlign: 'center' },
});
