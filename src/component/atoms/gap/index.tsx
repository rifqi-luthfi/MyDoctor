import React from 'react';
import { StyleSheet, View} from 'react-native';

// Define prop types for better type safety and clarity
interface GapProps {
  height?: number;
  width?: number; // Make width optional
}

const Gap: React.FC<GapProps> = ({ height = 0, width = 0}) => (
  <View style={styles(height, width).container} />
);

// Style function with type annotations for dynamic styling
const styles = (height: number, width: number) =>
  StyleSheet.create({
    container: {
      height: height,  // dynamic height
      width: width,    // dynamic width (defaults to 50% of screen width if not provided)
    },
  });

export default Gap;
