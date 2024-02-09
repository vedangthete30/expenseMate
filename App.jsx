
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import OnBoarding from './src/screens/onboarding/OnBoarding';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <MainNavigation />
      {/* <SplashScreen /> */}
    </View>

  );
}

export default App;
