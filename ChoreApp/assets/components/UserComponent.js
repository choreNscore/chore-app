import { Pressable } from "react-native";
import { Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {Avatar} from "antd";

// This is the User Component that holds renders a userid, username, parent status and icon
    // only renders username and mock icon for now

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
                    alignItems: 'center',
                }}>
                
                    <Avatar>
                        {userParams.userName[0]}
                    </Avatar>
                    <Text style={{ color: 'green', textAlign: 'center' }}>{userName}</Text>
                
            </Pressable>
  );
   
}

export default User;