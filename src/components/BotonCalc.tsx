import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ButtonProps} from '../interfaces';

const BotonCalc = ({
  texto,
  color = '#2d2d2d',
  ancho = false,
  accion,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text style={styles.botonTexto}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: '#2d2d2d',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    fontSize: 30,
    fontWeight: '400',
  },
});

export default BotonCalc;
