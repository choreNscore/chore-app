import { Pressable, View, Text, } from "react-native";
import User from "../assets/components/UserComponent";
import styles from "../assets/styles";


function ProfileSelection () {
    
    // Mock users for UI testing
    const users = {
    user1: {userID: 1, userName: "riri", isParent: true, icon: "icon1"},
    user2:{userID: 2, userName: "laykilla", isParent: false, icon: "icon2"},
    user3: {userID: 3, userName: "chacha", isParent: false, icon: "icon3"},
}
    return (
        <View style={{flex:1, justifyContent:'center'}}>
            
            <Text style = {styles.text1}>Select a Profile</Text>
            
            
            <View style = {styles.contentHorizontal}>
            {/* Map for users in a single family template */}
            {
                Object.keys(users).map((key) => {
                    const {userID, userName, isParent, icon} = users[key];
                    return (
                        <User
                            key={key}
                            userID={userID}
                            userName={userName}
                            isParent={isParent}
                            icon={icon}
                        />
                    )
                })
            }
            </View>
        </View>
    )
}

export default ProfileSelection;