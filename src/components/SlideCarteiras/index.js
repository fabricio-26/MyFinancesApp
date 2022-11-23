import React from 'react';
import { View, Text, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Box1, Box2, Box3, Box4, } from './styles'

export default function SlideCarteiras(props) {
    return (

        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <Box1>

                <Icon
                    name='Power'
                    color="#fff"
                    size={20}
                />
            </Box1>
            <Box2></Box2>
            <Box3></Box3>
            <Box4></Box4>

        </ScrollView>
    );
}