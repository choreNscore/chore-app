import { View, Text } from 'react-native';
import SimpleHeader from '../../assets/components/SimpleHeader';
import styles from '../../assets/styles';


function CreateChorePage(props) {
    const { userName } = props;
  
    return (
        <View style={styles.container}>
            <SimpleHeader userName={userName} />
                
            <View style={styles.content}>
                <Text style={styles.text1} >Create a Chore</Text>
            </View>
            
        </View>
      );
}

export default CreateChorePage;