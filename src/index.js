import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import React from 'react';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => {
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
    <Routes />
  </>;
};

export default App;
