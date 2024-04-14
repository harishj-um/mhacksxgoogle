import React from 'react';
import { Button, Linking, Platform, Text, TouchableOpacity, View } from 'react-native'; // Assuming Button is a custom component with a 'style' prop
import styles from '../../styles';

export default function Emergency({ navigation }: { navigation: any }) {
    const handleEmergencyCall = () => {
        // Platform-specific logic for emergency calls
        if (Platform.OS === 'ios') {
            Linking.openURL('tel:911'); // Dial 911 on iOS
        } else if (Platform.OS === 'android') {
            Linking.openURL('tel:112'); // Dial 112 (universal emergency number) on Android (consider region-specific emergency numbers)
        } else {
            console.warn('Unsupported platform for emergency calls');
        }
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={handleEmergencyCall}
                style={{ backgroundColor: 'coral', borderColor: 'darkred', borderWidth: 1, padding: 10, borderRadius: 5 }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                    Call Emergency
                </Text>
            </TouchableOpacity>
        </View>
    );
};
