import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Button } from "native-base";
import { useFormikContext } from "formik";

const WIDTH = Dimensions.get("window").width / 1.5;

const SubmitButton = ({ disabled }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <View style={styles.container}>
      <Button
        onPress={handleSubmit}
        disabled={disabled}
        backgroundColor={disabled ? "gray.500" : "blue.800"}
      >
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
  },
});

export default SubmitButton;
