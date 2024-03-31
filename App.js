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
import { Image } from 'expo-image';
import { ScrollView } from 'react-native-gesture-handler';

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
      <Stack.Screen name="Oatmeal" component={OatmealScreen} />

      <Stack.Screen name="Strawberry" component={StrawberryScreen} />
      <Stack.Screen name="Buckeye" component={BuckeyeScreen} />
      <Stack.Screen name="Banoffee" component={BanoffeeScreen} />

      <Stack.Screen name="Sloppy" component={SloppyScreen} />
      <Stack.Screen name="Pasta" component={PastaScreen} />
      <Stack.Screen name="Grilled" component={GrilledScreen} />

      <Stack.Screen name="Zucchini" component={ZucchiniScreen} />
      <Stack.Screen name="Pumpkin" component={PumpkinScreen} />
      <Stack.Screen name="Shepherd" component={ShepherdScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Make your own food, stay at home
      </Text>
      <Image source={require('../recipemobile/assets/oatmeal.jpeg')} style={{ width:370,height:80 ,marginLeft:6,borderRadius:50,marginTop:15}}/>
      <Button
     
        title="Breakfast"
        onPress={() => navigation.navigate('Breakfast')}
        color="orange"
      />
          <Separator />
          <Image source={require('../recipemobile/assets/pasta.jpeg')} style={{ width:370,height:80 ,marginLeft:6,borderRadius:50,marginTop:15}}/>
      <Button
        title="Lunch"
        onPress={() => navigation.navigate('Lunch')}
        color="orange"
      />
       <Separator />
       <Image source={require('../recipemobile/assets/Zucchini.jpeg')} style={{ width:370,height:80 ,marginLeft:6,borderRadius:50,marginTop:15}}/>
      <Button
        title="Dinner"
        onPress={() => navigation.navigate('Dinner')}
        color="orange"
      />
          <Separator />
          <Image source={require('../recipemobile/assets/strawberry.jpeg')} style={{ width:370,height:80 ,marginLeft:6,borderRadius:50,marginTop:15}}/>
      <Button

        title="Dessert"
        onPress={() => navigation.navigate('Dessert')}
        color="orange"
      />

    </View>

    <Separator />
   
    <View>
      <Text style={styles.title}>
        {/* This layout strategy lets the title define the width of the button. */}
      </Text>
      {/* <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
        
      </View> */}
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
     <Separator />
    <Button
      title="Oatmeal"
      onPress={() => navigation.navigate('Oatmeal')}
    />
   
  </View>
);

const LunchScreen = ({ navigation }) => (
  <View>
    <Text>This is the Lunch Screen</Text>
    <Separator />
      <Button
        title="Sloppy"
        onPress={() => navigation.navigate('Sloppy')}
      />
      <Separator />
      <Button
        title="Pasta"
        onPress={() => navigation.navigate('Pasta')}
      />
      <Separator />
      <Button
        title="Grilled"
        onPress={() => navigation.navigate('Grilled')}
      />
  </View>
);
const DinnerScreen = ({ navigation }) => (
  <View>
    <Text>This is the Dinner Screen</Text>
    <Separator />
      <Button
        title="Zucchini"
        onPress={() => navigation.navigate('Zucchini')}
      />
      <Separator />
      <Button
        title="Pumpkin"
        onPress={() => navigation.navigate('Pumpkin')}
      />
      <Separator />
      <Button
        title="Shepherd"
        onPress={() => navigation.navigate('Shepherd')}
      />
  </View>
);
const StrawberryScreen = () => (
  <View>
  <Image source={require('../recipemobile/assets/strawberry.jpeg')} style={{ width:250,height:250 ,marginLeft:80,borderRadius:50,marginTop:15}}/>
    <Text style={styles.ChaffleScreen}>We make this beloved dessert with not-too-sweet buttermilk cake and very lightly sweetened whipped cream. The cake tastes best just slightly chilled, so let it sit out to warm up a bit while you whip the cream for the topping.</Text>
    <View>
      <Text>Ingredients:</Text>
      <Text>2 sticks (1 cup) unsalted butter, at room temperature, plus more for greasing the pan</Text>
      <Text>2 1/2 cups all-purpose flour</Text>
      <Text>1/2 teaspoon baking powder</Text>
      <Text>1/2 teaspoon baking soda</Text>
      <Text>1/2 teaspoon fine salt</Text>
      <Text>1 1/4 cups buttermilk, well shaken</Text>
      <Text>2 teaspoons pure vanilla extract</Text>
      <Text>2 cups sugar</Text>
      <Text>3 large eggs, at room temperature, lightly beaten</Text>
      <Text>One 3-ounce box strawberry gelatin</Text>
     
    </View>
    <View>
      <Text>Directions:</Text>
      <Text>1.For the cake: Position an oven rack in the lower third of the oven and preheat to 350 degrees F. Butter the bottom and sides of a 9-by-13-inch pan.</Text>
      <Text>2.Whisk the flour, baking powder, baking soda and salt in a medium bowl; set aside. Whisk the buttermilk and vanilla in a spouted measuring cup; set aside.</Text>
      <Text>3.Beat the sugar and butter in a stand mixer (or a large bowl if using a hand mixer) at medium speed until very light in color and fluffy, about 5 minutes, scraping down the side of the bowl as needed. Slowly add the eggs and beat until fully incorporated. Reduce the speed to the lowest setting; with the mixer running, alternate beating in the flour mixture in three additions and the buttermilk mixture in two, starting and ending with the flour mixture. Scrape down the side of the bowl, and beat until the batter is well mixed. Spread into the prepared pan.</Text>
<Text>4.Bake the cake until golden brown and a toothpick inserted in the center comes out clean, about 30 minutes, rotating the pan halfway through. Let cool in the pan for 30 minutes. Using a fork, poke holes in the top and all the way through the cake.</Text>
    <Text>5.Bring 1 cup water to a boil, pour over the gelatin in a small bowl and stir until completely dissolved, about 2 minutes. Stir in 1/2 cup cold water. Pour the mixture evenly over the cooled cake. Refrigerate for 2 hours. Put a large bowl (for whipping the cream) in the refrigerator.</Text>
    <Text>6.For the sweetened berries: While the cake chills, hull and quarter the strawberries. Toss with the granulated sugar in a medium bowl, and set aside until soft and juicy, about 1 hour.</Text>
    <Text>7.For the topping: Remove the cake from the refrigerator. Whip the cream with the sugar and vanilla in the chilled bowl until fluffy. Spread it over the cake, slice the cake and serve with the strawberries.</Text>
    </View>
</View>
);
const DessertScreen = ({ navigation }) => (
  <View>
    <Text>This is the Dessert Screen</Text>
    <Separator />
      <Button
        title="Strawberry"
        onPress={() => navigation.navigate('Strawberry')}
      />
      <Separator />
      <Button
        title="Buckeye"
        onPress={() => navigation.navigate('Buckeye')}
      />
      <Separator />
      <Button
        title="Banoffee"
        onPress={() => navigation.navigate('Banoffee')}
      />
  </View>
);
const BuckeyeScreen = () => (
  <View>
  <Image source={require('../recipemobile/assets/buckeye.jpeg')} style={{ width:250,height:250 ,marginLeft:80,borderRadius:50,marginTop:15}}/>
    <Text style={styles.ChaffleScreen}>The classic flavors of buckeye candy — chocolate and peanut butter — are the winning combination in this bundt cake that’s ideal for serving a crowd. A creamy peanut butter cheesecake mixture is sandwiched inside rich chocolate cake, and a final topping of melted semisweet chocolate makes it irresistible. You can even bake and glaze it a day or two ahead and store it in the fridge.</Text>
    <View>
      <Text>Ingredients:</Text>
      <Text>Nonstick cooking spray, for the pan</Text>
      <Text>2 1/2 cups all-purpose flour</Text>
      <Text>1/2 teaspoon baking powder</Text>
      <Text>1/2 teaspoon baking soda</Text>
      <Text>1/2 teaspoon fine salt</Text>
      <Text>1 1/4 cups buttermilk, well shaken</Text>
      <Text>2 teaspoons pure vanilla extract</Text>
      <Text>2 cups sugar</Text>
      <Text>3 large eggs, at room temperature, lightly beaten</Text>
      <Text>One 3-ounce box strawberry gelatin</Text>
     
    </View>
    <View>
      <Text>Directions:</Text>
      <Text>1.For the cake: Position an oven rack in the lower third of the oven and preheat to 350 degrees F. Butter the bottom and sides of a 9-by-13-inch pan.</Text>
      <Text>2.Whisk the flour, baking powder, baking soda and salt in a medium bowl; set aside. Whisk the buttermilk and vanilla in a spouted measuring cup; set aside.</Text>
      <Text>3.Beat the sugar and butter in a stand mixer (or a large bowl if using a hand mixer) at medium speed until very light in color and fluffy, about 5 minutes, scraping down the side of the bowl as needed. Slowly add the eggs and beat until fully incorporated. Reduce the speed to the lowest setting; with the mixer running, alternate beating in the flour mixture in three additions and the buttermilk mixture in two, starting and ending with the flour mixture. Scrape down the side of the bowl, and beat until the batter is well mixed. Spread into the prepared pan.</Text>
<Text>4.Bake the cake until golden brown and a toothpick inserted in the center comes out clean, about 30 minutes, rotating the pan halfway through. Let cool in the pan for 30 minutes. Using a fork, poke holes in the top and all the way through the cake.</Text>
    <Text>5.Bring 1 cup water to a boil, pour over the gelatin in a small bowl and stir until completely dissolved, about 2 minutes. Stir in 1/2 cup cold water. Pour the mixture evenly over the cooled cake. Refrigerate for 2 hours. Put a large bowl (for whipping the cream) in the refrigerator.</Text>
    <Text>6.For the sweetened berries: While the cake chills, hull and quarter the strawberries. Toss with the granulated sugar in a medium bowl, and set aside until soft and juicy, about 1 hour.</Text>
    <Text>7.For the topping: Remove the cake from the refrigerator. Whip the cream with the sugar and vanilla in the chilled bowl until fluffy. Spread it over the cake, slice the cake and serve with the strawberries.</Text>
    </View>
</View>
);
const BanoffeeScreen = () => (
  <View>
  <Image source={require('../recipemobile/assets/banoffee.jpeg')} style={{ width:250,height:250 ,marginLeft:80,borderRadius:50,marginTop:15}}/>
    <Text style={styles.ChaffleScreen}>What do you get when you combine bananas + toffee? Banoffee Pie, piled high with whipped cream.</Text>
    <View>
      <Text>Ingredients:</Text>
      <Text>5 tablespoons (70 grams) unsalted butter</Text>
      <Text>1/2 cup (100 grams) brown sugar</Text>
      <Text>10 ounces (300 milliliters) canned sweetened condensed milk</Text>
      <Text>1/4 teaspoon kosher salt</Text>
      <Text>2 teaspoons vanilla extract</Text>
      <Text>1/4 cup (60 grams) toffee bits</Text>
      <Text>3 bananas, sliced</Text>
      <Text>2 cups (500 milliliters) cold whipping cream (35% cream)</Text>
      <Text>1/4 cup (32 grams) confectioners’ sugar</Text>
      <Text>Chocolate shavings, for garnish</Text>
     
    </View>
    <View>
      <Text>Directions:</Text>
      <Text>1.For the crust: Heat your oven to 350 degrees F and set out a 9-inch pie plate or 10-inch removable bottom tart pan. If using a tart pan, place on a baking sheet to avoid any butter leaks.</Text>
      <Text>2.Stir together the digestive biscuit or graham cracker crumbs, granulated sugar, salt and cinnamon in a bowl. Add in the butter and toss well to evenly combine. Transfer the crumb mixture to the pie plate or tart pan and, using the bottom of a measuring cup or glass, evenly press the crust along the bottom and up the sides. Bake the crust for 15 minutes, then set aside to cool to room temperature. Meanwhile, prepare the filling.</Text>
      <Text>3.For the filling: Melt the butter and brown sugar together in a medium saucepan over medium to medium-low heat. Once melted, add in the sweetened condensed milk and bring to a boil and cook, stirring constantly, until golden brown and the mixture starts to pull away from the sides of the pan, 3 to 4 minutes. Remove the pan from the heat and stir in the salt and 1 teaspoon of the vanilla. Set aside to cool slightly.</Text>
<Text>4.When cooled slightly, transfer the toffee mixture into the crust and spread into an even layer. Scatter with the toffee bits and top with the sliced banana. Cover with plastic and transfer to the fridge for at least 2 hours to chill and firm up.</Text>
    <Text>5.When chilled, whip the cream, confectioners’ sugar and remaining teaspoon of vanilla on medium speed until soft peaks form, 3 to 4 minutes. By whipping the cream on medium, the bubble structure will be smaller giving the whipped cream more stability which will allow it to hold up for longer. Dollop and swirl the whipped cream on top of the bananas and garnish with the chocolate shavings.</Text>
    <Text>6.This pie can be kept in the fridge for up to 5 days. To keep the whipped cream tasting fresh, I like to store it under an upturned mixing bowl as a make-shift lid.
</Text>
   
    </View>
</View>
);

const ZucchiniScreen = () => (
  <View>
  <Image source={require('../recipemobile/assets/Zucchini.jpeg')} style={{ width:250,height:250 ,marginLeft:80,borderRadius:50,marginTop:15}}/>
    {/* <Text style={styles.ChaffleScreen}>The most amazing egg recipes in India are found in the Parsi community, but papeta par eda (eggs over potatoes) is hands-down my favorite. You can have it for breakfast, lunch, dinner or a snack. Sometimes it’s even prepared with potato chips instead of sliced potatoes! If you have any leftover cooked potatoes, you can reheat them in a small skillet and poach a fresh egg on top. Sprinkle with some more chopped cilantro and you have a delicious dish in minutes.</Text> */}
    <View>
      <Text>Ingredients:</Text>
      <Text>5 Coles Australian Free Range Eggs</Text>
      <Text>150g (1 cup) Coles White Self Raising Flour, sifted</Text>
      <Text>375g zucchini, grated</Text>
      <Text>1 large onion, finely chopped</Text>
      <Text>200g rindless bacon, chopped</Text>
      <Text>1 cup grated cheddar cheese</Text>
      <Text>60ml (1/4 cup) vegetable oil</Text>
    
 
    </View>
    <View>
      <Text>Directions:</Text>
      <Text>1.Preheat oven to 170C.</Text>
      <Text>2.Beat the eggs in a large bowl until combined. Add the flour and beat until smooth, then add zucchini, onion, bacon, cheese and oil and stir to combine.</Text>
      <Text>3.Grease and line a 30 x 20cm lamington pan. Pour into the prepared pan and bake in oven for 30 minutes or until cooked through.</Text>
     
     
     
    </View>
</View>
);
const PumpkinScreen = () => (
  <View>
  <Image source={require('../recipemobile/assets/pumpkin.jpg')} style={{ width:250,height:250 ,marginLeft:80,borderRadius:50,marginTop:15}}/>
    {/* <Text style={styles.ChaffleScreen}>The most amazing egg recipes in India are found in the Parsi community, but papeta par eda (eggs over potatoes) is hands-down my favorite. You can have it for breakfast, lunch, dinner or a snack. Sometimes it’s even prepared with potato chips instead of sliced potatoes! If you have any leftover cooked potatoes, you can reheat them in a small skillet and poach a fresh egg on top. Sprinkle with some more chopped cilantro and you have a delicious dish in minutes.</Text> */}
    <View>
      <Text>Ingredients:</Text>
      <Text>2 tbsp Coles Classic Olive Oil</Text>
      <Text>1 onion, finely chopped</Text>
      <Text>1 leek, white part only, finely sliced</Text>
      <Text>1 garlic clove, crushed</Text>
      <Text>1/2 tsp ground coriander</Text>
      <Text>1 tsp ground cumin</Text>
      <Text>1/2 tsp freshly grated nutmeg</Text>
      <Text>1kg peeled pumpkin, diced</Text>
      <Text>1 large potato, peeled, diced</Text>
      <Text>1L Massel chicken style liquid stock or vegetable liquid stock</Text>
      <Text>1/2 cup (125ml) thin cream</Text>

    </View>
    <View>
      <Text>Directions:</Text>
      <Text>1.Heat oil in a large saucepan over low heat, add onion and leek and cook for 2-3 minutes, until softened but not coloured.</Text>
      <Text>2.Add garlic and spices and cook, stirring, for 30 seconds. Add pumpkin, potato and stock and bring to the boil. Turn heat to low, cover and simmer for 30 minutes. Allow to cool slightly, then blend in batches.</Text>
      <Text>3.Return soup to pan, stir through cream and reheat gently. Season and add a little more nutmeg if desired.</Text>

    </View>
</View>
);
const ShepherdScreen = () => (
  <View>
  <Image source={require('../recipemobile/assets/shepherd.jpg')} style={{ width:250,height:250 ,marginLeft:80,borderRadius:50,marginTop:15}}/>
    {/* <Text style={styles.ChaffleScreen}>The most amazing egg recipes in India are found in the Parsi community, but papeta par eda (eggs over potatoes) is hands-down my favorite. You can have it for breakfast, lunch, dinner or a snack. Sometimes it’s even prepared with potato chips instead of sliced potatoes! If you have any leftover cooked potatoes, you can reheat them in a small skillet and poach a fresh egg on top. Sprinkle with some more chopped cilantro and you have a delicious dish in minutes.</Text> */}
    <View>
      <Text>Ingredients:</Text>
      <Text>1 tbsp olive oil</Text>
      <Text>1 brown onion, halved, finely chopped</Text>
      <Text>1 carrot, peeled, finely chopped</Text>
      <Text>2 celery sticks, trimmed, finely chopped</Text>
      <Text>1 tbsp Coles Tomato Paste</Text>
      <Text>500g lamb mince</Text>
      <Text>Salt & freshly ground black pepper</Text>
      <Text>2 tbsp plain flour</Text>
      <Text>500ml (2 cups) Massel beef style stock</Text>
      <Text>1 tbsp worcestershire sauce</Text>
      <Text>1 bay leaf</Text>
      <Text>4 (about 200g each) desiree potatoes, peeled, chopped</Text>
      <Text>40g butter</Text>
      <Text>125ml (1/2 cup) milk</Text>
      <Text>Melted butter, to brush</Text>
    </View>
    <View>
      <Text>Directions:</Text>
      <Text>1.Heat oil in a large saucepan over medium-high heat. Add onion, carrot and celery and cook, stirring, for 5 minutes or until soft. Add lamb mince and cook, stirring to break up any lumps, for 5 minutes or until lamb changes colour.</Text>
      <Text>2.Add the flour and cook, stirring, for 2 minutes or until combined. Add stock, bay leaf, Worcestershire sauce and tomato paste. Bring to the boil. Reduce heat to low and cook, stirring occasionally, for 30 minutes or until sauce thickens. Taste and season with salt and pepper.</Text>
      <Text>3.Meanwhile: cook potato in a saucepan of salted boiling water for 15 minutes or until tender. Drain well. Return to the pan with the butter. Use a potato masher or fork to mash until smooth. Add milk and use a wooden spoon to stir until combined. Taste and season with salt and pepper.</Text>
<Text>4.Preheat oven to 200C. Spoon lamb mixture into a 2L (8-cup) capacity ovenproof baking dish, or use four individual ovenproof serving dishes. Top with mashed potato and use a fork to spread over lamb mixture. Brush with butter. Bake in preheated oven for 20 minutes or until mashed potato is golden brown. Serve immediately</Text>
    </View>
</View>
);

const SloppyScreen = () => (
  <View>
  <Image source={require('../recipemobile/assets/sloppy.jpg')} style={{ width:250,height:250 ,marginLeft:80,borderRadius:50,marginTop:15}}/>
    {/* <Text style={styles.ChaffleScreen}>The most amazing egg recipes in India are found in the Parsi community, but papeta par eda (eggs over potatoes) is hands-down my favorite. You can have it for breakfast, lunch, dinner or a snack. Sometimes it’s even prepared with potato chips instead of sliced potatoes! If you have any leftover cooked potatoes, you can reheat them in a small skillet and poach a fresh egg on top. Sprinkle with some more chopped cilantro and you have a delicious dish in minutes.</Text> */}
    <View>
      <Text>Ingredients:</Text>
      <Text>1 pound lean ground beef</Text>
      <Text>¼ cup chopped onion</Text>
      <Text>¼ cup chopped green bell pepper</Text>
      <Text>¾ cup ketchup, or to taste</Text>
      <Text>1 tablespoon brown sugar, or to taste</Text>
      <Text>1 teaspoon yellow mustard, or to taste</Text>
      <Text>½ teaspoon garlic powder</Text>
      <Text>salt and ground black pepper to taste</Text>
      <Text>6 hamburger buns, split</Text>
 
    </View>
    <View>
      <Text>Directions:</Text>
      <Text>1.Heat a large skillet over medium heat. Cook and stir lean ground beef in the hot skillet until some of the fat starts to render, 3 to 4 minutes. Add onion and bell pepper; continue to cook until vegetables have softened and beef is cooked through, 3 to 5 more minutes.

</Text>
      <Text>2.Stir in ketchup, brown sugar, mustard, and garlic powder; season with salt and pepper. Reduce heat to low and simmer for 20 to 30 minutes.</Text>
      <Text>3.Divide meat mixture evenly among hamburger buns.</Text>
      <Text>4.Pour 2 tablespoons of water around the edge of the skillet. Cover the skillet, lower the heat to medium-low and cook until the egg whites are set and the yolks are still slightly wobbly, 8 to 10 minutes. (Open the lid and peek every few minutes to make sure the eggs are not getting overcooked.)  </Text>
     
     
    </View>
</View>
);
const PastaScreen = () => (
  <View>
  <Image source={require('../recipemobile/assets/pasta.jpeg')} style={{ width:250,height:250 ,marginLeft:80,borderRadius:50,marginTop:15}}/>
    {/* <Text style={styles.ChaffleScreen}>The most amazing egg recipes in India are found in the Parsi community, but papeta par eda (eggs over potatoes) is hands-down my favorite. You can have it for breakfast, lunch, dinner or a snack. Sometimes it’s even prepared with potato chips instead of sliced potatoes! If you have any leftover cooked potatoes, you can reheat them in a small skillet and poach a fresh egg on top. Sprinkle with some more chopped cilantro and you have a delicious dish in minutes.</Text> */}
    <View>
      <Text>Ingredients:</Text>
      <Text>1 pound tri-colored spiral pasta</Text>
      <Text>1 (16 ounce) bottle Italian-style salad dressing</Text>
      <Text>6 tablespoons salad seasoning mix</Text>
      <Text>2 cups cherry tomatoes, diced</Text>
      <Text>1 green bell pepper, chopped</Text>
      <Text>1 red bell pepper, diced</Text>
      <Text>½ yellow bell pepper, chopped</Text>
      <Text>1 (2.25 ounce) can black olives, chopped</Text>
    </View>
    <View>
      <Text>Directions:</Text>
      <Text>
        1.Gather all ingredients.
</Text>
      <Text>2.Bring a large pot of lightly salted water to a boil. Cook pasta in the boiling water, stirring occasionally, until tender yet firm to the bite, about 10 to 12 minutes; rinse under cold water and drain.</Text>
      <Text>3.Whisk Italian dressing and salad spice mix together until smooth. Combine pasta, tomatoes, bell peppers, and olives in a salad bowl.</Text>
      <Text>4.Pour dressing over salad and toss to coat.</Text>
      <Text>5.Refrigerate salad, 8 hours to overnight.</Text>
      <Text>6.Enjoy!
</Text>
    </View>
</View>
);
const GrilledScreen = () => (
  <View>
  <Image source={require('../recipemobile/assets/Grilled.jpg')} style={{ width:250,height:250 ,marginLeft:80,borderRadius:50,marginTop:15}}/>
    {/* <Text style={styles.ChaffleScreen}>The most amazing egg recipes in India are found in the Parsi community, but papeta par eda (eggs over potatoes) is hands-down my favorite. You can have it for breakfast, lunch, dinner or a snack. Sometimes it’s even prepared with potato chips instead of sliced potatoes! If you have any leftover cooked potatoes, you can reheat them in a small skillet and poach a fresh egg on top. Sprinkle with some more chopped cilantro and you have a delicious dish in minutes.</Text> */}
    <View>
      <Text>Ingredients:</Text>
      <Text>4 slices white bread</Text>
      <Text>3 tablespoons butter, divided</Text>
      <Text>2 slices Cheddar cheese</Text>
    </View>
    <View>
      <Text>Directions:</Text>
      <Text>
        1.Preheat a nonstick skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side down in the hot skillet; add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side up on top of cheese.
</Text>
      <Text>2.Cook until lightly browned on one side; flip over and continue cooking until cheese is melted. Repeat with remaining 2 slices of bread, butter, and slice of cheese.</Text>
    </View>
</View>
);

const ChaffleScreen = () => (
  <View>
    <Image source={require('../recipemobile/assets/chaffle.jpeg')} style={{ width:250,height:250 ,marginLeft:80,borderRadius:50,marginTop:15}}/>
      <Text style={styles.ChaffleScreen}>A chaffle is a low-carb, cheese-and-egg-based waffle that's taken the keto world by storm, thanks to its fluffy texture and crispy edges. We opted to use Cheddar for the cheese and added scallions and parsley for a sweet and savory twist on the popular dish. For the fluffiest chaffle, use only finely shredded cheese––it will blend better with the egg than large shreds.</Text>
      <View>
        <Text>Ingredients:</Text>
        <Text>4 large eggs</Text>
        <Text>2 cups finely shredded mild Cheddar </Text>
        <Text>2 scallions, thinly sliced </Text>
        <Text>1 tablespoon finely chopped fresh parsley </Text>
        <Text>1 tablespoon finely chopped fresh parsley </Text>
        <Text>Nonstick cooking spray </Text>
        <Text>Unsalted butter, for serving</Text>
        <Text>Sugar-free maple syrup, for serving </Text>
      </View>
      <View>
        <Text>Directions:</Text>
        <Text>1.Preheat a waffle iron to medium-high. Whisk the eggs in a large bowl until well beaten and smooth. Whisk in the Cheddar, scallions, parsley, 1/4 teaspoon salt and a few grinds of pepper.</Text>
        <Text>2.Coat the waffle iron with nonstick cooking spray, then ladle a heaping 1/4 cup of batter into each section. Close the lid and cook until well browned and fluffy, 4 to 5 minutes. Use a small offset spatula or tongs to transfer the chaffles to a serving plate. Repeat with the remaining batter. </Text>
        <Text>3.Top each chaffle with a pat of butter and drizzle with maple syrup.  </Text>
      </View>
   
  </View>
);


const PapetaScreen = () => (
  <View>
  <Image source={require('../recipemobile/assets/papeta.jpeg')} style={{ width:250,height:250 ,marginLeft:80,borderRadius:50,marginTop:15}}/>
    <Text style={styles.ChaffleScreen}>The most amazing egg recipes in India are found in the Parsi community, but papeta par eda (eggs over potatoes) is hands-down my favorite. You can have it for breakfast, lunch, dinner or a snack. Sometimes it’s even prepared with potato chips instead of sliced potatoes! If you have any leftover cooked potatoes, you can reheat them in a small skillet and poach a fresh egg on top. Sprinkle with some more chopped cilantro and you have a delicious dish in minutes.</Text>
    <View>
      <Text>Ingredients:</Text>
      <Text>4 tablespoons extra-virgin olive oil or vegetable oil</Text>
      <Text>3 red onions (about 1 pound), thinly sliced </Text>
      <Text>1 tablespoon peeled and grated fresh ginger </Text>
      <Text>1 to 5 Thai green chiles or 1 to 2 serrano peppers (depending on your spice level), finely chopped  </Text>
      <Text>3 cloves garlic, grated </Text>
      <Text>1 tablespoon unsalted butter </Text>
      <Text>3 Yukon gold potatoes (about 1 pound), peeled, cut into approximately 1/8-inch slices and soaked in a large bowl of water </Text>
      <Text>Kosher salt and freshly ground pepper </Text>
      <Text>1/2 cup chopped fresh cilantro leaves and tender stems </Text>
      <Text>6 large eggs</Text>
    </View>
    <View>
      <Text>Directions:</Text>
      <Text>1.Heat the oil in a large heavy skillet over medium-high heat. Add the onions and cook, stirring occasionally, until soft, 4 to 5 minutes. Add the ginger, chiles and garlic and cook, stirring occasionally, until the raw smell goes away, about 3 minutes.</Text>
      <Text>2.Add the butter, potatoes and 2 teaspoons salt and gently stir to combine. Lower the heat to medium and cook, occasionally gently turning over the potato and onion mixture from the bottom, until the potatoes are just cooked, but still firm, about 10 minutes. Some of the potatoes should have nice crispy edges and some of the onions should be caramelized. </Text>
      <Text>3.Add most of the cilantro (reserving some for garnish) and gently stir in. Adjust the salt to taste. Gently flatten out the mixture and make 6 evenly spaced nests in it using the back of a spoon. Crack an egg into each nest. </Text>
      <Text>4.Pour 2 tablespoons of water around the edge of the skillet. Cover the skillet, lower the heat to medium-low and cook until the egg whites are set and the yolks are still slightly wobbly, 8 to 10 minutes. (Open the lid and peek every few minutes to make sure the eggs are not getting overcooked.)  </Text>
      <Text>5.Sprinkle with some salt and pepper and garnish with the remaining cilantro.</Text>
     
    </View>
</View>
);
const TortillaScreen = () => (
  <View>
  <Image source={require('../recipemobile/assets/tortilla.jpeg')} style={{ width:250,height:250 ,marginLeft:80,borderRadius:50,marginTop:15}}/>
    <Text style={styles.ChaffleScreen}>Inspired by the Egg and Cheese Bread Omelet, we made a complete breakfast wrap--tortilla, eggs, spinach, cheese and ham included--entirely in one skillet, for a go-to dish you can make in a hurry. Enjoy right out of the pan or with a few dashes of your favorite hot sauce.</Text>
    <View>
      <Text>Ingredients:</Text>
      <Text>2 large eggs</Text>
      <Text>Kosher salt and freshly ground black pepper</Text>
      <Text>1 tablespoon unsalted butter</Text>
      <Text>One 8-inch whole-wheat tortilla</Text>
      <Text>1/3 cup lightly packed baby spinach</Text>
      <Text>2 slices American cheese</Text>
      <Text>2 thin slices deli Black Forest ham</Text>
      <Text>Kosher salt and freshly ground pepper </Text>
     
    </View>
    <View>
      <Text>Directions:</Text>
      <Text>1.Combine the eggs with a pinch of salt and several grinds of pepper in a small bowl and whisk to combine.</Text>
      <Text>2.Melt the butter in a medium nonstick skillet over medium heat. Pour in the egg mixture and swirl the skillet to coat the bottom. Working quickly, dip the tortilla in the eggs, then flip it over and place it back in the skillet (both sides should be coated in egg). Season with another pinch of salt. </Text>
      <Text>3.Continue to cook the eggs until they are completely set on the bottom, 1 to 2 minutes. Slide a large rubber or silicone spatula under the tortilla and flip the whole tortilla and egg over in one single motion. Scatter the spinach on the half of the tortilla that's closest to you, then top with the cheese and finally the ham. Continue to cook until the bottom is golden brown, about 1 minute more. Remove from the heat and slide onto a plate.  </Text>
      <Text>4.Starting with the side that has all the filling, start rolling the tortilla into a tight wrap or burrito. Keep the seam side facing downward so the wrap stays closed. Cut in half crosswise and serve. </Text>
     
    </View>
</View>
);
const OatmealScreen = () => (
  <View>
  <Image source={require('../recipemobile/assets/oatmeal.jpeg')} style={{ width:250,height:250 ,marginLeft:80,borderRadius:50,marginTop:15}}/>
    <Text style={styles.ChaffleScreen}>This hearty cake is packed with oats, flavored with cinnamon and topped with a warm glaze made with more oats, shredded coconut and nuts. We used pecans, but feel free to use whatever you have on hand. It's a great way to clean out the pantry and simple enough for kids to help with. Bake one on a Sunday and enjoy it all week long for breakfast or as a snack! It's delicious at room temperature or lightly warmed in the microwave.</Text>
    <View>
      <Text>Ingredients:</Text>
      <Text>Nonstick cooking spray, for the pan</Text>
      <Text>3 cups all-purpose flour (see Cook's Note)</Text>
      <Text>1 cup old-fashioned rolled oats</Text>
      <Text>1 cup granulated sugar</Text>
      <Text>1/2 cup packed light brown sugar</Text>
      <Text>2 teaspoons ground cinnamon</Text>
      <Text>2 teaspoons baking powder</Text>
      <Text>1 teaspoon kosher salt</Text>
      <Text>1/2 teaspoon baking soda</Text>
      <Text>1 cup vegetable oil</Text>
      <Text>1 cup buttermilk</Text>
      <Text>2 teaspoons pure vanilla extract</Text>
      <Text>4 large eggs</Text>
    </View>
    <View>
      <Text>Directions:</Text>
      <Text>1.For the cake: Preheat the oven to 350 degrees F. Coat a 9-by-13-inch baking pan with nonstick cooking spray. Line the bottom of the pan with parchment and coat again with the spray.</Text>
      <Text>2.Whisk together the flour, oats, granulated sugar, brown sugar, cinnamon, baking powder, salt and baking soda in a large bowl and set aside. Whisk together the oil, buttermilk, vanilla and eggs in a medium bowl. Fold the buttermilk mixture into the flour mixture until just combined.  </Text>
      <Text>3.Pour the batter into the prepared pan and bake until a toothpick inserted in the center comes out clean, about 35 minutes. </Text>
      <Text>4.For the glaze: Meanwhile, add the brown sugar, oats, coconut, butter, milk, cinnamon and salt to a small saucepan over high heat. Bring to a boil and cook until the butter and sugar are dissolved, about 1 minute. Turn off the heat and stir in the pecans. </Text>
      <Text>5.Pour the hot glaze over the warm cake and spread evenly. Let the cake cool in the pan on a rack until cooled completely, at least 40 minutes. The glaze will still look glossy but should be not be sticky. You can cut slices from the pan or invert onto a serving platter or cutting board. Store at room temperature for up to 1 week.  </Text> 
    </View>
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
    fontSize:20,
    fontWeight:'bold'
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
  ChaffleScreen:{
    fontSize:15,
    marginTop:10
  }
});

export default App;
