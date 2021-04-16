import React,{useContext,useState} from 'react';
import {View,Image,Text,ScrollView,Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import styles from '../styles/details'

function Details(props){
    const params = props.route.params
    const width = Dimensions.get('screen').width
    const [activeIndex,setActiveIndex] = useState(0)
    const [carouselItems,setCarouselItems] = useState([
        {},{},
    ])
    const renderItem = () => {
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
                <Text style={styles.title}>{params.title}</Text>
                <Text style={styles.type}>{params.type} - {params.finalidade}</Text>
                <Text style={styles.price}>R${params.price.toFixed(2)}</Text>
                <View style={styles.line}/>
                <Text style={styles.section}>Endereço</Text>
                <Text style={styles.text}>Rua a, 70º</Text>
                <Text style={styles.text}>Rio de Janeiro, Volta Redonda</Text>
                <View style={styles.line}/>
                <Text style={styles.section}>Descrição</Text>
                <Text style={styles.text}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</Text>
            </ScrollView>
        </View>
    )
}

export default Details