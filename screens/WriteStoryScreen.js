import React from 'react';
import {Header} from 'react-native-elements';
import {  StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, ToastAndroid, TouchableOpacity } from 'react-native';
import db from "../config";
import firebase from 'firebase';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class WriteStoryScreen extends React.Component {
  constructor () {
    super();
    this.state = {
      title: '',
      author: '',
      story: ''
    }
  }

  submitStory = () => {
    db. collection(WrittenStory). doc(this.state.title). get(). then();
    db. collection(WrittenStory). doc(this.state.author). get(). then();
    db. collection(WrittenStory). doc(this.state.story). get(). then();
    const showToast = () => {
      ToastAndroid.show("Your story has been submitted", ToastAndroid.SHORT);
    };
  }  

  render () {
    return (
      <SafeAreaProvider>
      <KeyboardAvoidingView>
        <Header style = {styles.displayText}>Write a Story!</Header>

          <View>
            <TextInput style = {styles.inputBox} placeholder = {'Title'}/>
              <TouchableOpacity 
                style = {styles.scanButton}
                onPress = {()=>{
                  this.submitStory();
              }}>
                <Text style = {styles.buttonText}>Submit</Text>
              </TouchableOpacity>
          </View>

          <View>
            <TextInput style = {styles.inputBox} placeholder = {'Author'}/>
              <TouchableOpacity 
                style = {styles.scanButton}
                onPress = {()=>{
                  this.submitStory();
              }}>
                <Text style = {styles.buttonText}>Submit</Text>
              </TouchableOpacity>
          </View>

          <View>
            <TextInput style = {styles.inputBox} placeholder = {'Write the story here!'} props = {{multiline: true}}/>
              <TouchableOpacity 
                style = {styles.scanButton}
                onPress = {()=>{
                  this.submitStory();
              }}>
                <Text style = {styles.buttonText}>Submit</Text>
              </TouchableOpacity>
          </View>

      </KeyboardAvoidingView>
      </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    scanButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    }
  });