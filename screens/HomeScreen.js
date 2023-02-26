import { useSpotifyAuth } from "../utils";
import SongList from "../components/songList";
import SpotifyAuthBotton from "../components/spotifyAuthButton";
import { StyleSheet, SafeAreaView } from "react-native";
import { Themes } from "./assets/Themes";

export default function HomeScreen() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  console.log("tracks", tracks);

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <SongList tracks={tracks} />;
  } else {
    contentDisplayed = (
      <SpotifyAuthBotton autheticationFunction={getSpotifyAuth} />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Your code goes here */}
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  authButton: {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 999999,
  },
  authText: {
    color: "white",
  },
});
