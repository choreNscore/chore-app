import { View, Text} from 'react-native';
import SimpleHeader from '../../assets/components/SimpleHeader';
import styles from '../../assets/styles';


function ChildHomePage (props) {
    const { userID, userName, isParent, icon } = props;
  
    return (
        <View style={styles.container}>
        {/* Header */}
            <SimpleHeader userName={userName} />

        {/* Page Content */}
            <View style={styles.content}>
                <Text style={styles.text1} >userID: {userID}</Text>
                <Text style={styles.text1} >isParent: {isParent.toString()}</Text>
                <Text style={styles.text1} >icon: {icon}</Text>
            </View>
        
        </View>
    );
}


export default ChildHomePage;