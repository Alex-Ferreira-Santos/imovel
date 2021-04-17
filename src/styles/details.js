import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    data:{
        flex:1,
        marginLeft: 10,
    },
    item:{
        flex:1,
        backgroundColor: 'gray'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    title:{
        fontSize: 28,
    },
    type:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    price:{
        color: '#00AC07',
        fontSize: 25
    },
    line:{
        width:'95%',
        height:1,
        backgroundColor: '#B4B4B4',
        alignSelf: 'center',
        marginVertical: 10,
    },
    section:{
        fontSize: 30,
    },
    text:{
        fontSize: 20,
        maxWidth: '98%',
    }
})

export default styles