import React,{useState} from 'react';
import {View,Image,Text,ScrollView,Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import styles from '../styles/details'

function Details(props){
    const params = props.route.params
    const width = Dimensions.get('screen').width
    const [activeIndex,setActiveIndex] = useState(0)
    console.log(params)
    const renderItem = (image) => {
        console.log(image)
        return (
            <View style={styles.item}>
              <Image source={{uri:image.item.uri}} style={styles.image}/>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Carousel
                layout={"default"}
                data={params.image}
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
                <Text style={styles.text}>{params.adress}</Text>
                <Text style={styles.text}>{params.state}, {params.city}</Text>
                <View style={styles.line}/>
                <Text style={styles.section}>Descrição</Text>
                <Text style={styles.text}>{params.description}</Text>
            </ScrollView>
        </View>
    )
}

export default Details