import * as dotenv from "dotenv";
import type { ExpoConfig, ConfigContext } from "expo/config";

import { version } from "./package.json";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export default (_: ConfigContext): ExpoConfig => {
  return {
    name: 'suemor blog',
    description: "suemor's blog mobile app",
    slug: 'suemor-app',
    version,
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: process.env.BUNDLE_IDENTIFIER,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      bundler: 'metro',
      favicon: './assets/images/favicon.png',
    },
    extra: {
      API_URL: process.env.API_URL,
    },
  };

}
