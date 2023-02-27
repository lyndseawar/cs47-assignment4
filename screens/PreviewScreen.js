import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PreviewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { previewUrl } = route.params;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [previewUrl]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        Song Preview
      </Text>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: previewUrl }}
        originWhitelist={["*"]}
        onLoad={handleLoad}
        mediaPlaybackRequiresUserAction={false}
        cacheEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

export default PreviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 0,
    margin: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 70,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: "#121212",
  },
  title: {
    flex: 1,
    height: "10%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
  },
});
