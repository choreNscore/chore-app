import { Pressable, Text } from "react-native";
import styles from '../styles';
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
                    margin: 5,
                }}>
                
                    <Avatar 
                        size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 100,
                          }}>
                        {userParams.userName[0]}
                    </Avatar>
                    <Text style={styles.text1}>{userName}</Text>
                
            </Pressable>
  );
   
}

export default User;