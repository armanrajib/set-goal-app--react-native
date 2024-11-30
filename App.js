import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

const initialGoals = [
  { id: "01", text: "Learn React" },
  { id: "02", text: "Learn React Native" },
  { id: "03", text: "Learn TypeScript" },
];

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState(initialGoals);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText === "") return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    setEnteredGoalText("");
    setShowModal((showModal) => !showModal);
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== goalId)
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#2e0abb"
          onPress={() => setShowModal((showModal) => !showModal)}
        />
        {showModal && (
          <GoalInput
            showModal={showModal}
            setShowModal={setShowModal}
            enteredGoalText={enteredGoalText}
            goalInputHandler={goalInputHandler}
            addGoalHandler={addGoalHandler}
          />
        )}
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <GoalItem
              itemData={itemData}
              deleteGoalHandler={deleteGoalHandler}
            />
          )}
          style={styles.goalsContainer}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    marginTop: 16,
  },
});
