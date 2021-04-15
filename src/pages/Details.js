import React,{useContext,useState} from 'react';
import {View,Image,Text,ScrollView,Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import styles from '../styles/details'

function Details(){
    const width = Dimensions.get('screen').width
    const [activeIndex,setActiveIndex] = useState(0)
    const [carouselItems,setCarouselItems] = useState([
        {
            title:"Item 1",
            text: "Text 1",
        },
        {
            title:"Item 2",
            text: "Text 2",
        },
        {
            title:"Item 3",
            text: "Text 3",
        },
        {
            title:"Item 4",
            text: "Text 4",
        },
        {
            title:"Item 5",
            text: "Text 5",
        },
    ])
    const renderItem = ({item, index}) => {
        return (
            <View style={styles.item}>
              <Image/>
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
                <Text></Text>
            </ScrollView>
        </View>
    )
}

export default Details