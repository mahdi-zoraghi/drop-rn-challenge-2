import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Keyboard,
} from "react-native";
import { Text, Checkbox, View } from "native-base";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

import Form from "../components/Form";
import FormField from "../components/FormField";
import SubmitButton from "../components/SubmitButton";

import useAppContext from "../hooks/useAppContext";
import { register } from "../api";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

const TOP = Dimensions.get("window").height / 1.4;
const LEFT = Dimensions.get("window").width / 2.2;

const Register = () => {
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setAuth } = useAppContext();
  const navigation = useNavigation();

  const onSubmit = async (values) => {
    setLoading(true);
    Keyboard.dismiss();
    const response = await register(values);
    setAuth((prevState) => ({ ...prevState, ...response.data }));
    setLoading(false);
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../../assets/register-back.jpg")}
      resizeMode="cover"
      style={styles.container}
      blurRadius={0.5}
    >
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        style={styles.formContainer}
      >
        <Text style={styles.header} fontSize="2xl">
          Register
        </Text>
        <FormField label="email" name="email" />
        <FormField label="password" name="password" />
        <View marginBottom={15}>
          <Checkbox value={terms} onChange={setTerms}>
            accept terms
          </Checkbox>
        </View>
        <SubmitButton disabled={!terms} />
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
  loading: {
    position: "absolute",
    left: LEFT,
    top: TOP,
  },
});

export default Register;
