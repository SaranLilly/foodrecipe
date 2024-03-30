import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button} from 'react-native';

const DATA = [
  {
    id: '01',
    title: 'First Item',
  },
  {
    id: '02',
    title: 'Second Item',
  },
  {
    id: '03',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
    />
  </View>
);

const FlastlistComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'lightgray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default FlastlistComponent;