import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './Onboarding';


interface Props { }

const Stack = createNativeStackNavigator();


const Navigation: React.FC<Props> = (props: Props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="onboarding" component={Onboarding} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default Navigation;