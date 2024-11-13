import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, TabLabel } from '../../../utils';
import { TabItem } from '../../atoms';


const BottomNavigator: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {


  // Type guard to ensure `label` is one of the valid types
  const isValidLabel = (label: string): label is TabLabel => {
    return ['Doctor', 'Messages', 'Hospitals'].includes(label);
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;

        // Ensure the label is valid
        if (typeof label === 'string' && isValidLabel(label)) {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return <TabItem
                    title={label}
                    active={isFocused}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    index ={index}/>;
        }

        // Handle case where the label is not valid (optional)
        return null;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderTopWidth: 0,
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 53,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  label: {
    fontSize: 14,
  },
});

export default BottomNavigator;
