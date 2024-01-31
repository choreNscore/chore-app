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
// route params are accessible by all pages
  //needs to be replaced by data queried from database
const ParentsTab = createBottomTabNavigator();
function ParentTabs({route}) {
  // these props should be passed in after sign up/ login
  const { userID, userName, isParent, icon } = route.params;
  return (
    <ParentsTab.Navigator>
      <ParentsTab.Screen name ="HomeScreen" options={{headerShown:false}}>
        {(props) => <HomePage {...props} userID={userID} userName={userName} isParent={isParent} icon={icon} />}
      </ParentsTab.Screen>
      <ParentsTab.Screen name="CreateChore" options={{headerShown:false}}>
        {(props) => <CreateChorePage {...props} userID={userID} userName={userName} isParent={isParent} icon={icon} />}
      </ParentsTab.Screen>
      <ParentsTab.Screen name="ChoresList" options={{headerShown:false}}>
        {(props) => <ChoresListPage {...props} userID={userID} userName={userName} isParent={isParent} icon={icon} />}
      </ParentsTab.Screen>
      <ParentsTab.Screen name="AddFamilyMember" options={{headerShown:false}}>
        {(props) => <AddFamilyMemberPage {...props} userID={userID} userName={userName} isParent={isParent} icon={icon} />}
      </ParentsTab.Screen>
      <ParentsTab.Screen name="ChoreView" options={{headerShown:false}}>
        {(props) => <ChoreViewPage {...props} userID={userID} userName={userName} isParent={isParent} icon={icon} />}
      </ParentsTab.Screen>  
    </ParentsTab.Navigator>
  )
  }

// Tab Bar for Child account, has access to all Child pages
// route params are accessible by all pages
  //needs to be replaced by data queried from database
const ChildsTab = createBottomTabNavigator();
function ChildTabs({route}) {
  // these props should be passed in after sign up/ login
  const { userID, userName, isParent, icon } = route.params;
  return (
    <ChildsTab.Navigator>
      <ChildsTab.Screen name="ChildHome" options={{headerShown:false}}>
        {(props) => <ChildHomePage {...props} userID={userID} userName={userName} isParent={isParent} icon={icon} />}
      </ChildsTab.Screen>
      <ChildsTab.Screen name="ChildChoresList" options={{headerShown:false}}>
        {(props) => <ChildChoresListPage {...props} userID={userID} userName={userName} isParent={isParent} icon={icon} />}
      </ChildsTab.Screen>
      <ChildsTab.Screen name="ChildChoreView" options={{headerShown:false}}>
        {(props) => <ChildChoreViewPage {...props} userID={userID} userName={userName} isParent={isParent} icon={icon} />}
      </ChildsTab.Screen>
    </ChildsTab.Navigator>
  )
  }

// Stack Navigator for login, signup, profile selection and parent and child hubs
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProfileSelection" component={ProfileSelection} options={{headerShown:false}} />
        <Stack.Screen name="ChildHub" component={ChildTabs} options={{headerShown:false}} />
        <Stack.Screen name="ParentHub" component={ParentTabs} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

