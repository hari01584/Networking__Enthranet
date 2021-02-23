/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  TouchableNativeFeedback,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from './components/NewAppScreen';

const App: () => React$Node = () => {

  const onPress = () => {
      alert('clicked')
    }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={[styles.sectionTitle, {color: Colors.skinny}]}>What is this for?</Text>
              <Text style={[styles.sectionDescription, {color: 'green'}]}>
                This application allows you to connect/make localhost/ethernet connections through <Text style={styles.highlight}>IPv6</Text>!! If by chance ipv4
                access to your local computers is blocked and ipv6 is still working, this application will allow you to exploit the loophole and the fact that IPv6
                being new technology is yet to be banned!
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={[styles.sectionTitle, {color: '#f94144'}]}>How to use it???</Text>
              <Text style={[styles.sectionDescription, {color: '#ff5d8f'}]}>
              <Text>
                First choose if You'd like to <Text style={[styles.highlight, {color: 'orange',}]}>HOST SERVER</Text> or <Text style={[styles.highlight, {color: 'orange',}]}>CONNECT</Text> to server using this application!!
                then all you need to do is to follow the instructions and give the application necessary permissions to send/receive data from your firewall! Easy Right?

              </Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={[styles.sectionTitle, {color:'#512da8'}]}>CHOOSE YOUR ACTION!</Text>

             <View style = {styles.buttonStyleContainer}>

             <View style={styles.button}>
             <Button
             title={'HOST SERVER'}
             type='outlined'
             style={[styles.button, {fontSize: 20, color: 'green'}]}
             styleDisabled={{color: 'red'}}
             onPress={onPress}>
              Press Me!
             </Button>
             </View>

             <View style={styles.button}>
             <Button
              title={'JOIN SERVER'}
              style={{fontSize: 40, color: 'green'}}
              styleDisabled={{color: 'red'}}
              type='outlined'
              onPress={onPress}
              >
              Press Me!
             </Button>
             </View>


             </View>

            </View>
            {/*
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
            */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
   },
   text: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'red'
   },

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  buttonStyleContainer: {
       flex: 1,
       flexDirection: 'row',
       marginTop: 15,
  },
  button:{
    backgroundColor: 'green',
    marginLeft: 5,
    width: '50%',
    height: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  honeydew: {
    color: Colors.honeydew,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
