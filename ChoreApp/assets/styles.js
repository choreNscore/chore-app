import { StyleSheet } from 'react-native';
//As of now only template styles are here
//Styles for each page type will be added later
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width:'100%', 
        height:'8%',
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
    contentHorizontal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-evenly',
      },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1: {
      fontSize: 60,
      color:'green',
      textAlign: 'center',
    },
    headerText: {
      fontSize: 22,
      color:'white',
      margin: 10,
      textAlign: 'center',
    },
  });

  export default styles;