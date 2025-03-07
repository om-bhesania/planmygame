import { useEffect, useState } from "react";
import { Platform } from "react-native";

const useCheckOs = () => {
  const [os, setOs] = useState<"android" | "ios" | "web" | "unknown">(
    "unknown"
  );

  useEffect(() => {
    const checkOs = () => {
      if (Platform.OS === "android") {
        return "android";
      }
      if (Platform.OS === "ios") {
        return "ios";
      }
      if (Platform.OS === "web") {
        return "ios";
      }
      return "unknown";
    };

    setOs(checkOs());
  }, [Platform.OS]);

  return { os };
};

export default useCheckOs;
