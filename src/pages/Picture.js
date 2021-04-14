import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import {RNCamera} from 'react-native-camera'
import styles from '../styles/pictures'

function Picture(){
    return(
        <View style={styles.container}>
            <RNCamera/>
            <View>
                <TouchableOpacity>
                    <Text>Tirar foto</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Picture