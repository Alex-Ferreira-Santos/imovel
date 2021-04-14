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
    },
    estadoDisabled:{
        borderColor:'gray',
        backgroundColor: '#C6C6C6',
        color: 'gray',
    },
    description:{
        height: 100,
        paddingRight: 10,
        textAlignVertical: 'top'
    },
    picker:{ 
        backgroundColor: '#F0F0F0',
        width: width/2,
        color: '#6C94A0',  
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    form:{
        alignItems: 'center',
        marginTop: 10,
    },
    radioLabel:{
        fontSize: 18
    },
    imovel:{
        right: 20,
    },
    takePicture:{
        backgroundColor:'#39B137',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        paddingVertical: 10,
        marginVertical: 10
    },
    buttonText:{
        fontSize: 20,
        color:'white'
    },
    getPicture:{
        borderWidth:1,
        borderColor: '#15B025',
        borderStyle: 'dashed',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        paddingVertical: 10,
        marginBottom: 10
    },
    plus:{
        color:'#15B025'
    },
    cadastrar:{
        backgroundColor:'#08D88D'
    },
    images:{
        backgroundColor:'#F0F0F0',
        borderColor:'gray',
        borderWidth:1,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection:'row',
        padding:10,
        borderRadius: 20,
        marginBottom:10
    },
    image:{
        width: width/4,
        height: width/4,
        backgroundColor:'gray',
        borderRadius: 20,
        marginRight:10,
    }
})

export default styles