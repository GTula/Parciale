import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import BackendCaller from '../../auxiliar/BackendCaller';
import { Text } from 'react-native';
import { useContext } from 'react';
import { reloadContext } from '../../auxiliar/reload';
import { useEffect } from 'react';

export default function DifficultyDestino({ destino }) {  
  const[difficultyText, setDifficultyText] = useState();


  return (
    <>
        <Text style={styles.editText}>{destino.difficulty}</Text>

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
