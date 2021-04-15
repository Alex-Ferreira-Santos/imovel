import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        width: '95%',
        marginVertical: 5,
        borderRadius: 20,
        borderColor: '#15B025',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor:'#ffffff',
    },
    image:{
        width: width/3.5,
        height: width/3.5,
        margin: 10,
        backgroundColor: '#c4c4c4',
        borderRadius: 20
    },
    data:{
        flex:1
    },
    title:{
        fontSize: width/20,
    },
    price:{
        fontSize: width/18,
        color: '#3B933F'
    },
    localType:{
        color: '#898989',
        fontSize: width/23,
    },
    touch:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,     
    }
})

export default styles