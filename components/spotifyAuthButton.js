import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { Themes } from "../assets/Themes";
const SpotifyAuthBotton = ({ autheticationFunction }) => {
  return (
    <Pressable style={styles.authButton} onPress={autheticationFunction}>
      <Image
        source={require("../assets/spotify-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.authText}>CONNECT WITH SPOTIFY</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  authButton: {
    flexDirection: "row",
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 999999,
  },
  authText: {
    color: "white",
    fontWeight: "bold",
  },
  logo: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
});

export default SpotifyAuthBotton;
