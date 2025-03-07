import CustomButton from "@/components/button/CustomButton";
import AnimatedLandingImage from "@/constants/AnimatedLandingImage";
import { CombinedTheme } from "@/constants/Colors";
import { ThemedStyles } from "@/constants/ThemedStyles";
import StepTwo from "@/onBoardingProcess/Step2";
import { Link } from "expo-router";
import { TrophyIcon } from "lucide-react-native";
import { useState } from "react";
import { Text, View } from "react-native";

export default function StepOne() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const hideModal = () => setVisible(false);
  return (
    <>
      <View style={[{ flex: 1, justifyContent: "space-between", gap: 50 }]}>
        {/* <Logo height={90} width={90} /> */}
        <Text
          style={[
            ThemedStyles.themedTextPrimary,
            {
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
            },
          ]}
        >
          <TrophyIcon color={CombinedTheme.colors.primary} />
          <Text style={{ marginTop: 0 }}> PlaneMyGame</Text>
        </Text>
        <View
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AnimatedLandingImage />
          <View
            style={{
              height: "100%",
              flex: 1,
              alignItems: "center",
              gap: 10,
              width: "100%",
            }}
          >
            <Text
              style={[ThemedStyles.themedTextPrimary, { textAlign: "center" }]}
            >
              Easy Booking
            </Text>
            <Text style={ThemedStyles.themedTextHelper}>
              Easy BookingBook sport turf time slots with just a few steps No
              more waitings
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginTop: 50,
            }}
          >
            <CustomButton
              mode="contained"
              onTouchStart={() => {
                setVisible(true);
              }}
              style={{
                flexShrink: 0,
                marginTop: 20,
                width: "100%",
              }}
              textColor={CombinedTheme.colors.backgroundColor}
              customStyle={{ width: "100%" }}
            >
              Lets Get Started
            </CustomButton>

            <Text style={{ color: CombinedTheme.colors.textColor }}>
              Already have an account?
              <Link href={"/"} style={{ color: CombinedTheme.colors.primary }}>
                {" "}
                Log in
              </Link>
            </Text>
          </View>
        </View>
      </View>
      <StepTwo
        visible={visible}
        formData={formData}
        setFormData={setFormData}
        hideModal={hideModal}
        active={active}
        setActive={setActive}
      />
    </>
  );
}
