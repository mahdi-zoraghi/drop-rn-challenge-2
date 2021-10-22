import React from "react";
import { View } from "react-native";
import { Formik } from "formik";

const Form = ({
  children,
  style = {},
  initialValues,
  validationSchema,
  onSubmit,
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {() => <View style={style}>{children}</View>}
  </Formik>
);

export default Form;
