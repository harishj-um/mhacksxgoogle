import * as React from 'react';
import { Text, View } from 'react-native';

export default function Location({navigation}: {navigation: any}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Location!</Text>
        </View>
    );
}