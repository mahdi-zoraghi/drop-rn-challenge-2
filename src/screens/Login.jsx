import React, { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Text } from "native-base";
import * as Yup from "yup";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";

import Form from "../components/Form";
import FormField from "../components/FormField";
import SubmitButton from "../components/SubmitButton";

import useAppContext from "../hooks/useAppContext";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { auth, setAuth } = useAppContext();

  const navigation = useNavigation();

  const onSubmit = (values) => {
    if (auth.email !== values.email) return setEmailError("email not exist");
    setEmailError("");
    if (auth.password !== values.password)
      return setPasswordError("password not exist");
    setPasswordError("");

    setAuth({
      ...auth,
      token: uuid.v4(),
    });
    navigation.navigate("Home");
  };

  return (
    <ImageBackground
      source={require("../../assets/back-login.png")}
      resizeMode="cover"
      style={styles.container}
      blurRadius={0.5}
    >
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        style={styles.formContainer}
      >
        <Text style={styles.header} fontSize="2xl">
          Login
        </Text>
        <FormField label="email" name="email" error={emailError} />
        <FormField label="password" name="password" error={passwordError} />
        <SubmitButton />
      </Form>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  formContainer: {
    backgroundColor: "rgba(255,255,255,1)",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 10,
  },
  header: {
    textAlign: "center",
    marginBottom: 15,
  },
});

export default Login;
