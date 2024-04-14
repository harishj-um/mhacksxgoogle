import * as React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Bubble from '../../components/Bubble';
import Footer from '../../components/Footer';
import HeaderBar from '../../components/HeaderBar';
import InputBar from '../../components/InputBar';
import Tagline from '../../components/Tagline';

export default function Home({ navigation }: { navigation: any }) {
    const backgroundStyle = {
        backgroundColor: Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={'dark-content'} />
            <HeaderBar />
            <Tagline />
            <Bubble text={'If you have an emergency, please alert 911 and local services immediately!'} />
            <InputBar />
        </SafeAreaView>
    );
}