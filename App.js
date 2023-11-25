import Page from './navigate';
import { useFonts } from 'expo-font';

export default function App() {  

  const [fontsLoaded] = useFonts({
    'font': require('./assets/font.ttf'),
  });

  if ( fontsLoaded ) {
    return (
      <Page/>
    );
  }
}
