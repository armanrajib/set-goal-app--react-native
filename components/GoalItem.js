import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ itemData, deleteGoalHandler }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => deleteGoalHandler(itemData.item.id)}
        // for iOS
        style={({ pressed }) => pressed && styles.goalPressed}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    backgroundColor: "#5e0abb",
    borderRadius: 6,
  },
  goalPressed: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default GoalItem;
