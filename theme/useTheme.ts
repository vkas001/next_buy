import { useColorScheme } from 'react-native';
import { light, dark } from './colors';

export function useTheme() {
  const scheme = useColorScheme();

  return scheme === 'dark' ? dark : light;
}