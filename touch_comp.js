import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';

const TouchComponent = () => {
  const onPress = () => Alert.alert('Simple Button pressed')

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text>TouchableOpacity Example</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 10,
  },
  subContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default TouchComponent;