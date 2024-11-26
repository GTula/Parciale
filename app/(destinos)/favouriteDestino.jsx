import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import BackendCaller from '../../auxiliar/BackendCaller';
import { Text } from 'react-native';
import { useContext } from 'react';
import { reloadContext } from '../../auxiliar/reload';
import { useEffect } from 'react';

export default function FavouriteDestino({ destino, setReload}) {  
  const[favouriteText, setFavouriteText] = useState();
  const [newDestino, setNewDestino] = useState(destino);

  // useEffect(() => {
  //    if(destino.favourite == false){
  //      setFavouriteText("false")
  //    }
  //    else{
  //      setFavouriteText("true")
  //    }
  //    setFavouriteText(destino.favourite)
  //    console.log(favouriteText)
  //  }),[];

  const handlerFavourite = async () =>{
    setNewDestino({
      favourite: (!(destino.favourite)),
    });
    console.log(newDestino)
    await BackendCaller.patchDestinoById(destino.id, newDestino)
    setReload(prev => !prev);    
  }

  return (
    <>
      <TouchableOpacity onPress={() => handlerFavourite()} style={styles.editButton}>
        <Text style={styles.editText}>FAV</Text>
      </TouchableOpacity>

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
