import React, { createContext, useState } from 'react';

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => { } });

export const lightTheme = {
    backgroundColor: '#F2E8CF', // Light beige (background for most elements)
    textColor: '#333', // Dark brown (text for most elements)
    contrastTextColor: '#000', // Black (text color for light backgrounds)
    primaryColor: '#A4C2A4', // Forest green (primary color for buttons, accents)
    secondaryColor: '#E0E0FF', // Light blue (secondary color for accents)
    shadowColor: '#BDBDBD', // Light gray (shadow color)
    borderColor: '#BDBDBD', // Light gray (border color)
    textInputBackgroundColor: '#F0FFF0', // Light green (background for text input fields)
};

export const darkTheme = {
    backgroundColor: '#333', // Dark brown (background for most elements)
    textColor: '#F2E8CF', // Light beige (text for most elements)
    contrastTextColor: '#fff', // White (text color for dark backgrounds)
    primaryColor: '#90EE90', // Lighter green (primary color for buttons, accents)
    secondaryColor: '#333399', // Dark blue (secondary color for accents)
    shadowColor: '#000', // Black (shadow color)
    borderColor: '#666', // Dark gray (border color)
    textInputBackgroundColor: '#424242', // Dark gray (background for text input fields)
};

export default ThemeContext;
