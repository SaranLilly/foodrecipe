import React, {useState} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest. asdfasdfadsfasdfassdfadf fasdfasdfadsf asdfasdfasdfasdf asdfasdfasdfasdfasdf assdfasdfasdfasdf asdfasdfasdfasdf dfadfafasdfas fadfasdfasdfasd asdfasdfasdfadsf asdfasdfasdfasdfasf asdfasdfasdfasfadsf';

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
        </Text>
        <Text>{bodyText}</Text>
        </Text>

        <Separator />

        <Text style={styles.boldText}>
            I am bold
            <Text style={styles.innerText}> and red</Text>
        </Text>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  baseText: {
    fontFamily: 'Cochin'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  boldText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default TextInANest;

