import { View, Text } from 'react-native';
import SimpleHeader from '../../assets/components/SimpleHeader';
import styles from '../../assets/styles';


function AddFamilyMemberPage(props) {
    const { userName } = props;

    return (
        <View style={styles.container}>
           <SimpleHeader userName={userName} />
           
           <View style={styles.content}>
               <Text style={styles.text1} >Add Family Member</Text>
           </View>
       
        </View>
    );
}

export default AddFamilyMemberPage;