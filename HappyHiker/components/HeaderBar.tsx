import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import styles from '../styles';

const HeaderBar = () => {
  const [isDark, setIsDark] = useState(true); // Initial theme state

  const handleThemeToggle = () => {
    setIsDark(!isDark); // Toggle theme state directly
  };

  const imageSource = isDark ? require('../images/moon.png') : require('../images/sun.png');

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleThemeToggle}>
        <Image
          style={{ width: 50, height: 50 }}
          source={imageSource}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}> Happy Hiker </Text>
      <Image source={require('../images/settings.png')} />
    </View>
  );
};

export default HeaderBar;
