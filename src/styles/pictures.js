import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black'
    },
    preview:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture:{
        flex:0,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    buttonText:{
        fontSize: 20,
    },
    remove:{
        backgroundColor: '#B73535',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    confirm:{
        backgroundColor: '#08D88D',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    fullImage:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    fullScreen:{
        width: '100%',
        height: '100%',
    },
    buttons:{
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        
    }
})

export default styles