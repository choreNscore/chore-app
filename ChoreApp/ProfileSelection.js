import { Pressable, View, Text, } from "react-native";

function ProfileSelection ({navigation}) {
  
    return (
        <View style= {{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            {/* Placeholder for Parent Profile Selection */}
            
            <Pressable
                onPress={() => navigation.navigate('ParentHub')}
                style={{borderRadius:300, padding:6, backgroundColor:'green' }}>
               
                <Text style = {{color:'white', textAlign: 'center'}}>Parent</Text>
                
            </Pressable>
            
            {/* Placeholder for Child Profile Selection */}
            <Pressable
                onPress={() => navigation.navigate('ChildHub')}
                style={{borderRadius:300, padding:6, backgroundColor:'green' }}>
                
                <Text style = {{color:'white'}}>Child</Text>
                
            </Pressable>
    
        </View>
    )
}

export default ProfileSelection;