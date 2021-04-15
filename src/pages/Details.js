import React,{useContext,useState} from 'react';
import {View,Image,Text,ScrollView,Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import styles from '../styles/details'

function Details(){
    const width = Dimensions.get('screen').width
    const [activeIndex,setActiveIndex] = useState(0)
    const [carouselItems,setCarouselItems] = useState([
        {
            
        },
        {
            
        },
        {
            
        },
        {
            
        },
        {
            
        },
    ])
    const renderItem = ({item, index}) => {
        return (
            <View style={styles.item}>
              <Image source={{uri:'https://www.galeriadaarquitetura.com.br/Img/projeto/702x415/5651/casa-113917.jpg'}} style={styles.image}/>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Carousel
                layout={"default"}
                data={carouselItems}
                sliderWidth={width}
                itemWidth={width}
                renderItem={renderItem}
                onSnapToItem = { index => setActiveIndex(index) } 
            />
            <ScrollView style={styles.data}>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.type}>Casa - Venda</Text>
                <Text style={styles.price}>R$300000</Text>
                <Text>Endereço</Text>
                <Text>Rua a, 70º</Text>
                <Text>Rio de Janeiro, Volta Redonda</Text>
                <Text>Descrição</Text>
                <Text>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</Text>
            </ScrollView>
        </View>
    )
}

export default Details