import { StyleSheet } from 'react-native';
//As of now only template styles are here
//Styles for each page type will be added later
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width:'100%', 
        height:'5%',
        flexDirection:'row', 
        justifyContent:'flex-end', 
        justifyContent:'space-between',
        marginTop: 0,
        padding: 10,
        backgroundColor:'green',
        alignItems: 'center',
      },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });

  export default styles;