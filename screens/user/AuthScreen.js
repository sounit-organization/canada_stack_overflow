import { StyleSheet, Text, View } from "react-native";

const AuthScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>AuthScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default AuthScreen;
