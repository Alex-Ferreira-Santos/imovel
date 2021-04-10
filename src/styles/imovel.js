import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#8FAFFF',
        alignItems: 'center',
        width: '95%',
        marginVertical: 10,
        borderRadius: 20,
        paddingTop: 10,
    },
    badge:{
        backgroundColor: '#A3E1AA',
        color: 'white',
        position:'absolute',
        alignSelf: 'flex-start',
        zIndex: 1,
        left: 9,
        top: 10,
    },
    image:{
        width: '95%',
        height: 300,
        backgroundColor: '#c4c4c4',
        borderRadius: 20
    },
    type:{
        fontSize: 30,
    },
    finalidade:{
        fontSize: 25,
    },
    value:{
        color: '#A9FFAC'
    }
})

export default styles