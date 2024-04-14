import * as React from 'react';
import { ImageBackground, Text, View } from 'react-native';

export default function About({ navigation }: { navigation: any }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={require('../../images/about.png')} style={{ width: '100%', height: '100%' }}>
            </ImageBackground>
        </View>
    );
}