import { View, Text, Pressable } from 'react-native';


function ChildHomePage (props) {
  const { userID, userName, isParent, icon } = props;
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello Child {userName}!</Text>
      <Text>userID: {userID}</Text>
      <Text>isParent: {isParent}</Text>
      <Text>icon: {icon}</Text>
      <Pressable
        onPress={() => navigation.navigate('ProfileSelection')}>
        <Text>Change User</Text>
      </Pressable>
    </View>
  );
}

export default ChildHomePage;