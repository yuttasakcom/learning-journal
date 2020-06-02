import React, { useState } from "react";
import Color from "../constants/Colors";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function JournalLogger({}) {
  const [titleText, setTitleText] = useState("");
  const [descText, setDescText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.filler} behavior="padding">
        <TouchableWithoutFeedback
          style={styles.filler}
          onPress={Keyboard.dismiss}
        >
          <View style={styles.filler}>
            <View style={styles.imagePicker}>
              <Text style={styles.imagePickerText}>Select an Image!</Text>
            </View>
            <TextInput
              value={titleText}
              style={styles.textInput}
              placeholder="Enter a title!"
              placeholderTextColor={Color.purple}
              onChange={(e) => setTitleText(e.target.value)}
            />
            <TextInput
              value={descText}
              placeholder="A few more details, maybe?"
              placeholderTextColor={Color.purple}
              multiline
              style={[
                styles.textInput,
                {
                  height: 100,
                  textAlignVertical: "top",
                  overflow: "scroll",
                },
              ]}
              onChange={(e) => setDescText(e.target.value)}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  filler: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  imagePicker: {
    width: "90%",
    height: "30%",
    borderColor: Color.purple,
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  imagePickerText: {
    fontSize: 18,
    color: Color.purple,
  },

  textInput: {
    marginTop: 30,
    height: 60,
    width: "90%",
    backgroundColor: Color.lightPurple,
    textAlign: "center",
    color: Color.purple,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    fontSize: 18,
    borderRadius: 20,
  },
});
