import { Text } from "react-native";
import { globalStyles } from "./styles";

// Custom Text component with white color by default
export const WhiteText = (props) => (
  <Text {...props} style={[globalStyles.text, props.style]} />
);