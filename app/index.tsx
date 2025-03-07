import Container from "@/components/container/Container";
import StepOne from "@/onBoardingProcess/Step1";
import { Provider } from "react-native-paper";

export default function Index() {
  return (
    <Provider
      settings={{
        rippleEffectEnabled: true,
      }}
      theme={{
        dark: true,
        isV3: true,
        roundness: 10,
        animation: {
          scale: 1,
        },
      }}
    >
      <Container>
        <StepOne />
      </Container>
    </Provider>
  );
}
