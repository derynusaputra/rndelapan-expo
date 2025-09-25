export default {
  expo: {
    name: "RN Expo Template",
    slug: "rnexpo-templat",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#6200ea",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.deryvery.rnexpotemplat",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#6200ea",
      },
      package: "com.deryvery.rnexpotemplat",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: ["expo-dev-client"],
    extra: {
      eas: {
        projectId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      },
    },
  },
};
