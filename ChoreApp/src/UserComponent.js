import { Pressable } from "react-native";
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';



function User (props){
    const navigation = useNavigation();
    const {userID, userName, isParent, icon} = props;
    const userParams = {
        userID,
        userName,
        isParent,
        icon
    };

    const navigateTo = userParams.isParent ? 'ParentHub' : 'ChildHub';

    return (
        <Pressable
            onPress={() => navigation.navigate(navigateTo, userParams)}
            style={{
                borderRadius: 15,
                padding: 6,
                backgroundColor: 'green',
            }}
            >
        <View>
            <Text style={{ color: 'white', textAlign: 'center' }}>{userName}</Text>
            {/* Render icon here */}
        </View>
        </Pressable>
  );
   
}

export default User;