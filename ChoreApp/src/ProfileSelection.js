import { Pressable, View, Text, } from "react-native";
import User from "./UserComponent";

function ProfileSelection () {
    const user1 = {userID: 1, userName: "riri", isParent: true, icon: "icon1"};
    const user2 = {userID: 2, userName: "laykilla", isParent: false, icon: "icon2"};
    const user3 = {userID: 3, userName: "chacha", isParent: false, icon: "icon3"};
    return (
        <View style= {{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', margin:'10%'}}>
            {/* Placeholder for Parent Profile Selection */}
            <User {...user1}/>
                            
            {/* Placeholder for Child Profile Selection */}
            <User {...user2}/>
            <User {...user3} />
    
        </View>
    )
}

export default ProfileSelection;