import {View, Text, Pressable} from 'react-native';
import {Avatar} from "antd";
import styles from '../styles';

// This is a simple header that displays the user's name and profile picture

function SimpleHeader(props) {
    const { userName } = props;
    
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{userName}</Text>
            <Pressable onPress={() => navigation.navigate('ProfileSelection')}>
            <Avatar size="large">
                {userName[0]}
            </Avatar> 
            </Pressable>
        </View>
    );
}

export default SimpleHeader;