import { StyleSheet, Pressable, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function PressableComponent() {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>
            To create a button with a custom style, you can turn to the Pressable component. Pressable lets us fully customize the appearance of a pressable element (like a button), in addition to allowing us to customize its behavior.
            </Text>
            <Pressable style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
                <Text style={styles.text}>Press me</Text>
            </Pressable>
        </View>
        <Separator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 20,
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      }
  });
  