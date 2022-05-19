import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const MyComponent = ({active}) => (
  <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={ active }
    color='white'
    
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    backgroundColor:'#38a67e',
    margin: 16,
    right: 0,
    bottom: 0,
    width:50,
    height:50,
    justifyContent:'center',
    alignItems:'center'
    
  },
})

export default MyComponent;