import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

type RootStackParamList = {
  Home: undefined
  Details: undefined
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

type Props = {
  navigation: HomeScreenNavigationProp
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Home screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  )
}

const DetailsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Details screen</Text>
    </View>
  )
}

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})

export default App
