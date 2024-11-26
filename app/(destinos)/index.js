import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import BackendCaller from '../../auxiliar/BackendCaller';
import { useRouter } from 'expo-router';
import { ReloadPageProvider } from '../../auxiliar/reload';
import { useContext } from 'react';
import { reloadContext } from '../../auxiliar/reload';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Button } from 'react-native';
import FavouriteDestino from './favouriteDestino';
import DifficultyDestino from './difficultyDestino';

export default function DestinoListIndex() {
  const [destinos, setDestinos] = useState([]);
  const router = useRouter();
  const [reload] = useContext(reloadContext);
  const { width: screenWidth } = Dimensions.get('window');
  const [destino, setDestino] = useState();
  const[nowId, setNowId] = useState();
  const [reload1, setReload] = useContext(reloadContext);


  useEffect(() => {
    const fetchDestinos = async () => {
      const { statusCode, data } = await BackendCaller.getAllDestinos();
      if (statusCode === 200) {
        setDestinos(data);
      } else {
        console.error("Error al obtener los destinos");
      }
    };

    fetchDestinos();
  }, [reload]);

  

 

  

  const renderDestino = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`(destinos)/${item.id}`)}  
    >
      <Text style={styles.title}>{item.name}</Text>
      <FavouriteDestino destino={item} setReload={setReload}/>
      <DifficultyDestino destino={item}></DifficultyDestino>
    </TouchableOpacity>
  );

   return (                            
        <View style={[styles.container]}>
        <Text style={styles.header}>Destinos</Text>
        <FlatList
            data={destinos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderDestino}
        />
        </View>
    

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      padding: 10,
      alignSelf: 'center',
      width: '100%', 
    },
    header: {
      fontSize: 24,
      color: '#fff',
      textAlign: 'center',
      marginVertical: 10,
    },
    card: {
      backgroundColor: '#1e1e1e',
      marginVertical: 10,
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      color: '#fff',
    },
    favouriteButton: { padding: 10, backgroundColor: '#007BFF', borderRadius: 8 },
  favouriteText: { color: '#fff', textAlign: 'center' },
  });
  
