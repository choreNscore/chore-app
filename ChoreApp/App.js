// Purpose: Main file for ChoreApp, contains all pages and navigation
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Misc. Pages
import SignUp from './src/SignUp';
import Login from './src/Login';
import ProfileSelection from './src/ProfileSelection';

// Parent Pages
import HomePage from './src/Parent/HomePage';
import CreateChorePage from './src/Parent/CreateChorePage';
import ChoresListPage from './src/Parent/ChoresListPage';
import AddFamilyMemberPage from './src/Parent/AddFamilyMemberPage';
import ChoreViewPage from './src/Parent/ChoreViewPage';

// Child Pages
import ChildHomePage from './src/Child/ChildHomePage';
import ChildChoresListPage from './src/Child/ChildChoresListPage';
import ChildChoreViewPage from './src/Child/ChildChoreViewPage';

// Tab Bar for Parent account, has access to all Parent pages
const ParentsTab = createBottomTabNavigator();
function ParentTabs() {
  return (
    <ParentsTab.Navigator>
      <ParentsTab.Screen name="ParentHome" component={HomePage} />
      <ParentsTab.Screen name="CreateChore" component={CreateChorePage} />
      <ParentsTab.Screen name="ChoresList" component={ChoresListPage} />
      <ParentsTab.Screen name="AddFamilyMember" component={AddFamilyMemberPage} />
      <ParentsTab.Screen name="ChoreView" component={ChoreViewPage} />  
    </ParentsTab.Navigator>
  )
  }

// Tab Bar for Child account, has access to all Child pages
const ChildsTab = createBottomTabNavigator();
function ChildTabs() {
  return (
    <ChildsTab.Navigator>
      <ChildsTab.Screen name="ChildHome" component={ChildHomePage} />
      <ChildsTab.Screen name="ChildChoresList" component={ChildChoresListPage} />
      <ChildsTab.Screen name="ChildChoreView" component={ChildChoreViewPage} />
    </ChildsTab.Navigator>
  )
  }

// Stack Navigator for all pages, navigates to ProfileSelection page first
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProfileSelection" component={ProfileSelection} />
        <Stack.Screen name="ChildHub" component={ChildTabs} />
        <Stack.Screen name="ParentHub" component={ParentTabs} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

