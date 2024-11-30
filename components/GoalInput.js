import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function GoalInput({
  showModal,
  setShowModal,
  enteredGoalText,
  goalInputHandler,
  addGoalHandler,
}) {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/adaptive-icon.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal!"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={() => setShowModal((showModal) => !showModal)}
            />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" color="#5e0abb" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    // flex: 1,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 16,
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
