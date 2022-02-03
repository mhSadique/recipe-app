import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeCategoriesScreen from '../screens/RecipeCategoriesScreen';
import RecipeCategorySingleScreen from '../screens/RecipeCategorySingleScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import Colors from '../constants/Colors';
import FavouriteButton from '../components/FavouriteButton';
import FavouriteRecipesScreen from '../screens/FavouriteRecipesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import RecipeFiltersScreen from '../screens/RecipeFiltersScreen';
import DrawerIcon from '../components/DrawerIcon';
import SaveIcon from '../components/SaveIcon';


const Stack = createNativeStackNavigator();
const FavStack = createNativeStackNavigator();
const RecipeTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const RecipeStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: Colors.primaryColor
            }
        }}
    >
        <Stack.Screen
            name='RecipeCategoriesScreen'
            component={RecipeCategoriesScreen}
            options={({ navigation }) => ({
                headerLeft: () => <DrawerIcon navigation={navigation} screenName='Categories' />,
                title: 'Recipe Categories'
            })}
        />

        <Stack.Screen
            name='RecipeCategorySingleScreen'
            component={RecipeCategorySingleScreen}
            options={({ route }) => ({
                title: route.params.title,
                headerStyle: {
                    backgroundColor: route.params.color
                }
            })}
        />

        <Stack.Screen
            name='RecipeDetailScreen'
            component={RecipeDetailScreen}
            options={({ route }) => ({
                headerTitle: route.params.title,
                headerRight: () => (
                    <FavouriteButton
                        recipeId={route.params.recipeId}
                        isFavourite={route.params.isFavourite}
                    />
                )
            })}
        />
    </Stack.Navigator>
);

const FavouriteStack = () => (
    <FavStack.Navigator
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: Colors.primaryColor
            }
        }}
    >
        <FavStack.Screen
            name='FavouriteRecipesScreen'
            component={FavouriteRecipesScreen}
            options={{
                headerShown: true,
            }}
        />
        <FavStack.Screen
            name='RecipeDetailScreen'
            component={RecipeDetailScreen}
        />
    </FavStack.Navigator>
);

const MainNavigationStack = () => (
    <RecipeTab.Navigator>
        <RecipeTab.Screen
            name="Recipes"
            component={RecipeStack}
            options={{
                tabBarActiveTintColor: Colors.accentColor,
                headerShown: false,
                tabBarIcon: (tabInfo) => (
                    <Ionicons
                        name={'ios-restaurant'}
                        size={tabInfo.size}
                        color={tabInfo.color}
                    />
                ),
                tabBarLabelPosition: 'beside-icon'
            }}
        />
        <RecipeTab.Screen
            name="Favourites!"
            component={FavouriteStack}
            options={{
                tabBarActiveTintColor: Colors.accentColor,
                tabBarIcon: (tabInfo) => (
                    <Ionicons
                        name={'ios-star'}
                        size={tabInfo.size}
                        color={tabInfo.color}
                    />
                ),
                tabBarLabel: 'Favourites!',
                tabBarShowLabel: true,
                tabBarLabelPosition: 'beside-icon',
                headerShown: false
            }}
        />
    </RecipeTab.Navigator>
);

const RecipesNavigator = () => {

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name='Categories'
                    component={MainNavigationStack}
                    options={{
                        headerShown: false,
                    }}
                />
                <Drawer.Screen
                    name='Filters'
                    component={RecipeFiltersScreen}
                    options={({ navigation }) => ({
                        headerLeft: () => <DrawerIcon navigation={navigation} screenName='Filter' />,

                        headerShown: true,
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: Colors.primaryColor
                        }
                    })}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default RecipesNavigator;