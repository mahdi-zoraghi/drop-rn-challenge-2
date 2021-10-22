import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Input, View } from "native-base";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";

const WIDTH = Dimensions.get("window").width / 1.5;

const FormField = ({ label, name, error = "", ...otherProps }) => {
  const { handleChange, handleBlur, values } = useFormikContext();

  return (
    <View style={styles.container}>
      <Input
        placeholder={label}
        onBlur={handleBlur(name)}
        onChangeText={handleChange(name)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage name={name} error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
  },
});

export default FormField;
