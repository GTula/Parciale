import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from "expo-router";
import { useContext } from 'react';
import { reloadContext } from '../../auxiliar/reload';
import BackendCaller from '../../auxiliar/BackendCaller';
import EditDestino from './editDestino';
import DeleteDestino from './deleteDestino';

export default function DestinoDetail() {
  const { id } = useLocalSearchParams();
  const [destino, setDestino] = useState(null);
  const [reload, setReload] = useContext(reloadContext);

  useEffect(() => {
    const fetchDestinoDetails = async () => {
      try {
        const { statusCode, data } = await BackendCaller.getDestinoById(id);
        if (statusCode === 200) {
          setDestino(data);
        } else {
          console.error("Error al obtener el destino");
        }
      } catch (error) {
        console.error("Error en la petición:", error);
      }
    };

    if (id) {
      fetchDestinoDetails();
    }
  }, [id, reload]);

  if (!destino) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cargando detalles del destino...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{destino.name}</Text>
      <Text style={styles.description}>{destino.description}</Text>
      <Text style={styles.description}>{destino.difficulty}</Text>

      <EditDestino destino={destino} setReload={setReload} />
      <DeleteDestino destinoId={id} setReload={setReload} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', padding: 16 },
  text: { fontSize: 18, color: '#fff' },
  title: { fontSize: 24, color: '#fff', marginBottom: 10 },
  description: { fontSize: 18, color: '#fff', marginBottom: 10 },
  moons: { fontSize: 16, color: '#fff', marginBottom: 20 },
});
