import { DefaultTheme } from '@react-navigation/native';

export const colors = {
  primary: '#5448ff',
  backgroundModal: '#8888ff',
};

export const ThemeDefault = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
  },
};
