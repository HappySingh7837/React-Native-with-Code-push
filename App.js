/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import CodePush from 'react-native-code-push';


const CODE_PUSH_OPTIONS ={
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};

class App extends React.Component{

  componentDidMount() {
    CodePush.sync({installMode:CodePush.InstallMode.IMMEDIATE},this.isStaus,null)
  }
  isStaus=(status) =>{
    console.log(status);
  }
  render(){
    return(
      <Text>
        Hello Happy
      </Text>
    );
  }
}

export default CodePush (CODE_PUSH_OPTIONS)(App);
