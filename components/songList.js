import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { millisToMinutesAndSeconds } from "../utils";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SongList = ({ tracks }) => {
  const navigation = useNavigation();

  const handlePlayPress = (previewUrl) => {
    navigation.navigate("PreviewScreen", { previewUrl });
  };

  const handleSongSelect = (externalUrl) => {
    navigation.navigate("DetailsScreen", { externalUrl });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/spotify-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>My Top Tracks</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => handleSongSelect(item.externalUrl)}>
            <View style={styles.songContainer}>
              {/*replace the number container with a play button*/}
              <Pressable
                style={styles.playButton}
                onPress={() => {
                  handlePlayPress(item.previewUrl);
                }}
              >
                <AntDesign name="play" size={18} color="#1DB954" />
              </Pressable>
              <View style={styles.numberContainer}>
                <Text style={styles.number}>{index + 1}</Text>
              </View>
              <Image
                style={styles.albumCover}
                source={{ uri: item.imageUrl }}
              />
              <View style={styles.songInfoContainer}>
                <Text numberOfLines={1} style={styles.songListText}>
                  {item.songTitle}
                </Text>
                <Text numberOfLines={1} style={styles.songArtists}>
                  {item.songArtists.map((artist) => artist.name).join(", ")}
                </Text>
                <Text numberOfLines={1} style={styles.albumName}>
                  {item.albumName}
                </Text>
              </View>
              <Text style={styles.songDuration}>
                {millisToMinutesAndSeconds(item.duration)}
              </Text>
              {/* <Text style={styles.songListText}>{item.songTitle}</Text> */}
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  songContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    maxWidth: "100%",
  },
  numberContainer: {
    marginRight: 10,
    width: 21,
    alignItems: "center",
  },
  number: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  albumCover: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  songInfoContainer: {
    flex: 1,
    maxWidth: "50%",
  },
  songArtists: {
    color: "gray",
    fontSize: 12,
  },
  albumName: {
    color: "white",
  },
  songDuration: {
    color: "white",
    marginLeft: "auto",
  },
  songTitle: {
    color: "white",
    fontSize: 16,
  },
  songListText: {
    color: "white",
  },
  playButton: {
    marginRight: 10,
  },
});

export default SongList;
