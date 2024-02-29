import { StyleSheet, Text } from "react-native";
import COLORS from "../../screens/constants/colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: COLORS.accent500,
    fontFamily: "open-sans",
    fontSize: 24,
  },
});
