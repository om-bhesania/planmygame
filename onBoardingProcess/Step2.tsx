import React, { useEffect, useRef, useState, useCallback } from "react";
import { Formik } from "formik";
import { CircleXIcon, CrossIcon, X } from "lucide-react-native";
import {
  Animated,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button, Modal, Portal } from "react-native-paper";
import * as Yup from "yup";
import CustomButton from "@/components/button/CustomButton";
import { CombinedTheme } from "@/constants/Colors";
import useCheckOs from "@/hooks/useCheckOs";
import { StackActions, useNavigation } from "@react-navigation/native";

// Validation schemas
const initialValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
});

// Types
interface FormValues {
  name: string;
  email: string;
  mobile: string;
}

const StepTwo = ({
  visible,
  formData,
  setFormData,
  hideModal,
  active,
  setActive,
}: {
  visible: boolean;
  formData: FormValues;
  setFormData: (formData: FormValues) => void;
  hideModal: () => void;
  active: boolean;
  setActive: (active: boolean) => void;
}) => {
  const navigation = useNavigation();
  const [initialValues, setInitialValues] = useState<FormValues>(formData);
  const [slideAnim] = useState(new Animated.Value(0));
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const otpInputRefs = useRef<Array<TextInput | null>>([]);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const { height: windowHeight } = Dimensions.get("window");
  const { os } = useCheckOs();
  const intialValues = {
    name: "",
    email: "",
    mobile: "",
    otp: "",
  };
  useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 65,
        friction: 10,
      }).start();
    } else {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 65,
        friction: 10,
      }).start();
    }
    setInitialValues(intialValues);
  }, [visible]);

  // TODO: Implement form submission
  const handleFormSubmit = useCallback(
    (values: FormValues) => {
      console.log("Form Values:", values);
      setFormData(values);
      setShowOTP(true);
    },
    [setFormData]
  );

  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
      }
    );

    const keyboardWillHide = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardWillShow.remove();
      keyboardWillHide.remove();
    };
  }, []);
  // TODO: Implement OTP verification
  const handleOTPSubmit = useCallback(() => {
    const enteredOTP = otp.join("");
    console.log("Submitted OTP:", enteredOTP);
    // Here you would typically verify the OTP with your backend
    navigation.dispatch(
      StackActions.replace("home", { initialStepsCompleted: false })
    );
  }, [otp, navigation]);

  const handleOTPChange = useCallback(
    (index: number, value: string) => {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      // Auto-focus next input
      if (value !== "" && index < 5) {
        otpInputRefs.current[index + 1]?.focus();
      }
    },
    [otp]
  );

  const handleOTPKeyPress = useCallback(
    (index: number, key: string) => {
      if (key === "Backspace" && index > 0 && otp[index] === "") {
        otpInputRefs.current[index - 1]?.focus();
      }
    },
    [otp]
  );

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={[
          styles.modalContainer,
          {
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0.5, os === "ios" ? 1.045 : 1],
                  outputRange: [400, 0],
                }),
              },
            ],
          },
          Platform.OS === "ios" && {
            height: keyboardHeight
              ? windowHeight - (keyboardHeight - (showOTP ? -35 : 100))
              : null,
          },
        ]}
        theme={{
          colors: {
            backdrop: CombinedTheme.colors.cardBg + "80",
          },
        }}
        style={styles.modalWrapper}
      >
        <ScrollView>
          <KeyboardAvoidingView behavior={"position"} style={styles.drawer}>
            <View style={styles.header}>
              <Text style={styles.title}>
                {showOTP ? "Enter OTP" : "You're almost there!"}
              </Text>
              <Button
                onPress={hideModal}
                style={styles.closeButton}
                contentStyle={{ padding: 0 }}
              >
                <CircleXIcon color={CombinedTheme.colors.textColor} />
              </Button>
            </View>

            {!showOTP ? (
              <Formik
                initialValues={initialValues}
                validationSchema={initialValidationSchema}
                onSubmit={handleFormSubmit}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                  isValid,
                  dirty,
                }) => (
                  <View style={styles.form}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.label}>Enter Name</Text>
                      <TextInput
                        style={[
                          styles.input,
                          touched.name && errors.name && styles.inputError,
                        ]}
                        placeholder="Enter your name"
                        placeholderTextColor="#666"
                        onChangeText={handleChange("name")}
                        onBlur={handleBlur("name")}
                        value={values.name}
                      />
                      {touched.name && errors.name && (
                        <Text style={styles.errorText}>{errors.name}</Text>
                      )}
                    </View>

                    <View style={styles.inputContainer}>
                      <Text style={styles.label}>Enter Email</Text>
                      <TextInput
                        style={[
                          styles.input,
                          touched.email && errors.email && styles.inputError,
                        ]}
                        placeholder="Enter your email"
                        placeholderTextColor="#666"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                      />
                      {touched.email && errors.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                      )}
                    </View>

                    <View style={styles.inputContainer}>
                      <Text style={styles.label}>Enter Mobile Number</Text>
                      <TextInput
                        style={[
                          styles.input,
                          touched.mobile && errors.mobile && styles.inputError,
                        ]}
                        placeholder="Enter mobile number"
                        placeholderTextColor="#666"
                        keyboardType="phone-pad"
                        onChangeText={handleChange("mobile")}
                        onBlur={handleBlur("mobile")}
                        value={values.mobile}
                        maxLength={10}
                      />
                      {touched.mobile && errors.mobile && (
                        <Text style={styles.errorText}>{errors.mobile}</Text>
                      )}
                    </View>

                    <CustomButton
                      onPress={() => handleSubmit()}
                      style={[
                        styles.submitButton,
                        (!isValid || !dirty) && styles.submitButtonDisabled,
                      ]}
                      disabled={!isValid || !dirty}
                    >
                      GET OTP
                    </CustomButton>
                  </View>
                )}
              </Formik>
            ) : (
              <View style={styles.form}>
                <Text style={styles.otpDescription}>
                  Please enter the 6-digit code sent to your mobile number
                </Text>
                <View style={styles.otpContainer}>
                  {otp.map((digit, index) => (
                    <TextInput
                      key={index}
                      ref={(ref) => (otpInputRefs.current[index] = ref)}
                      style={styles.otpInput}
                      maxLength={1}
                      keyboardType="number-pad"
                      value={digit}
                      onChangeText={(value) => handleOTPChange(index, value)}
                      onKeyPress={({ nativeEvent: { key } }) =>
                        handleOTPKeyPress(index, key)
                      }
                    />
                  ))}
                </View>
                <CustomButton
                  onPress={handleOTPSubmit}
                  style={[
                    styles.submitButton,
                    !otp.every((digit) => digit !== "") &&
                      styles.submitButtonDisabled,
                  ]}
                  disabled={!otp.every((digit) => digit !== "")}
                >
                  Submit OTP
                </CustomButton>
              </View>
            )}
          </KeyboardAvoidingView>
        </ScrollView>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    margin: 0,
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    margin: 0,
  },
  drawer: {
    backgroundColor: CombinedTheme.colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    color: CombinedTheme.colors.primary,
    fontSize: 24,
    fontWeight: "600",
  },
  closeButton: {
    margin: 0,
    padding: 0,
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    color: CombinedTheme.colors.textColor,
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    padding: 12,
    color: CombinedTheme.colors.textColor,
    fontSize: 16,
    borderWidth: 1,
    borderColor: CombinedTheme.colors.primary + "40",
    borderRadius: 5,
  },
  inputError: {
    borderColor: "#ff4444",
  },
  errorText: {
    color: "#ff4444",
    fontSize: 12,
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: CombinedTheme.colors.primary,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonDisabled: {
    backgroundColor: "#4C4C4C",
    opacity: 0.7,
  },
  submitButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  otpInput: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: CombinedTheme.colors.primary + "40",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
    color: CombinedTheme.colors.textColor,
  },
  otpDescription: {
    color: CombinedTheme.colors.textColor,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default React.memo(StepTwo);
