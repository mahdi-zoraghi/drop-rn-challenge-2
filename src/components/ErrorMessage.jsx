import React from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

const ErrorMessage = ({ name, error }) => {
  const { touched, errors } = useFormikContext();

  return (
    <View marginBottom={1.5}>
      <Text fontSize="xs" style={styles.error}>
        {(touched[name] && errors[name]) || error}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
