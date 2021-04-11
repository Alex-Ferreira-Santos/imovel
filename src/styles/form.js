import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    dados:{
        fontSize: 30,
        marginLeft: 20,
        marginVertical: 10
    },
    line:{
        height: 1,
        width: width - 20,
        alignSelf: 'center',
        backgroundColor: '#B4B4B4',
    }
})

export default styles