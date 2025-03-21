import '../global.css'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './(tabs)/index'
import SignupScreen from './(tabs)/SignupScreen'
import SigninScreen from './(tabs)/SigninScreen'
import UserScreen from './(tabs)/UserScreen'
import CreateProductScreen from './(tabs)/CreateProductScreen'
import { AuthContextProvider } from '../context/authContext'
import { View, StyleSheet } from 'react-native'
import Navbar from './components/Navbar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <AuthContextProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = 'home-sharp'
            } else if (route.name === 'User') {
              iconName = 'person-circle-outline'
            } else if (route.name === 'Cart') {
              iconName = 'cart-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarLabelStyle: {
            fontSize: 12, // Adjust font size
            fontWeight: 'bold', // Adjust font weight
          },
          tabBarActiveTintColor: '#424949', // Active tab text/icon color
          tabBarInactiveTintColor: 'gray', // Inactive tab text/icon color
        })}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='User' component={UserScreen} />
        {/* <Tab.Screen name='Cart' component={Cart} /> */}
      </Tab.Navigator>
    </AuthContextProvider>
  )
}
