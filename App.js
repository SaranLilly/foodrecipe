import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Breakfast" component={BreakfastScreen} />
      <Stack.Screen name="Lunch" component={LunchScreen} />
      <Stack.Screen name="Dinner" component={DinnerScreen} />
      <Stack.Screen name="Dessert" component={DessertScreen} />
      <Stack.Screen name="Chaffle" component={ChaffleScreen} />
      <Stack.Screen name="Papeta" component={PapetaScreen} />
      <Stack.Screen name="Tortilla" component={TortillaScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Make your own food, stay at home
      </Text>
      <Button
        title="Breakfast"
        onPress={() => navigation.navigate('Breakfast')}
      />
          <Separator />
      <Button
        title="Lunch"
        onPress={() => navigation.navigate('Lunch')}
      />
       <Separator />
      <Button
        title="Dinner"
        onPress={() => navigation.navigate('Dinner')}
      />
          <Separator />
      <Button
        title="Dessert"
        onPress={() => navigation.navigate('Dessert')}
      />
    </View>

    <Separator />
   
    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
        
      </View>
    </View>
  </SafeAreaView>
);

// const BreakfastScreen = () => (
//   <View>
//     <Button
//         title="Chaffle"
//         onPress={() => navigation.navigate('Chaffle')}
//       />
//     <Text>This is the Breakfast Screen</Text>
//   </View>
// );
const BreakfastScreen = ({ navigation }) => (
  <View>
     <Text>This is the Breakfast Screen</Text>
    <Button
      title="Chaffle"
      onPress={() => navigation.navigate('Chaffle')}
    />
     <Separator />
    <Button
      title="Papeta"
      onPress={() => navigation.navigate('Papeta')}
    />
    <Separator />
    <Button
      title="Tortilla"
      onPress={() => navigation.navigate('Tortilla')}
    />
   
  </View>
);

const LunchScreen = () => (
  <View>
    <Text>This is the Lunch Screen</Text>
  </View>
);
const ChaffleScreen = () => (
  <View>
    <Text>The Best Cheddar and Herb Chaffle</Text>
  </View>
);
const DinnerScreen = () => (
  <View>
    <Text>This is the Dinner Screen</Text>
  </View>
);
const DessertScreen = () => (
  <View>
    <Text>This is the Dessert Screen</Text>
  </View>
);
const PapetaScreen = () => (
  <View>
    <Text>This is the Papeta Screen</Text>
  </View>
);
const TortillaScreen = () => (
  <View>
    <Text>This is the Papeta Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
