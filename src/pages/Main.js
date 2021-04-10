import React from 'react';
import {View} from 'react-native'
import styles from '../styles/main'
import Imovel from '../components/Imovel'

function Main(){
    return(
        <View style={styles.container}>
            <Imovel/>
        </View>
    )
}

export default Main
