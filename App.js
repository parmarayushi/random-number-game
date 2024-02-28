import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet } from "react-native";
import StartGameSCreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.appContainer}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}
      >
        <StartGameSCreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
