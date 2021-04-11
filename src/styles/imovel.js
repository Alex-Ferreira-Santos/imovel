import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        width: '95%',
        marginVertical: 10,
        borderRadius: 20,
        borderColor: '#15B025',
        borderWidth: 1,
        alignItems: 'center',
    },
    image:{
        width: width/3.5,
        height: width/3.5,
        margin: 10,
        backgroundColor: '#c4c4c4',
        borderRadius: 20
    },
    title:{
        fontSize: width/20,
        maxWidth: 280,
    },
    price:{
        fontSize: width/18,
        color: '#3B933F'
    },
    localType:{
        color: '#898989',
        fontSize: width/22,
    },
})

export default styles