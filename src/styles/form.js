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
    },
    label:{
        fontSize: 25,
        marginVertical: 5,
    },
    input:{
        borderColor:'#15B025',
        borderWidth: 1,
        backgroundColor: '#F0F0F0',
        width: width/1.1,
        borderRadius: 20,
        padding: 0,
        height: 46,
        paddingLeft: 10,
        fontSize: 18,  
    },
    estado:{
        borderColor:'#15B025',
        borderWidth: 1,
        backgroundColor: '#F0F0F0',
        width: width/2.5,
        borderRadius: 20,
        padding: 0,
        height: 46,
        paddingLeft: 10,
    },
    local:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    form:{
        alignItems: 'center',
        marginTop: 10,
    }
})

export default styles