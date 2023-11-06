import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: 10,
      gap: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontWeight: '500',
    //   color: 'white',
      fontSize: 16,
    },
    subtitle: {
      color: 'gray',
    },
    image: {
      width: 50,
      aspectRatio: 1,
      marginRight: 10,
      borderRadius: 5,
    },
});

export default styles;