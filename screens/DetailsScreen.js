import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { externalUrl } = route.params;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [externalUrl]);

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
        <Text style={styles.title}>Song Details</Text>
      </View>
      <WebView
        style={styles.webview}
        source={{ uri: externalUrl }}
        originWhitelist={["*"]}
        onLoad={handleLoad}
        mediaPlaybackRequiresUserAction={false}
        cacheEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    height: "12%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#121212",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  webview: {
    flex: 1,
  },
});
