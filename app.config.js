import 'dotenv/config';

export default {
    name: "movio",
    slug: "movio",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
        image: "./src/assets/images/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
    },
    updates: {
        "fallbackToCacheTimeout": 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
        "supportsTablet": false
    },
    android: {
        "adaptiveIcon": {
            "foregroundImage": "./src/assets/images/adaptive-icon.png",
            "backgroundColor": "#ffffff"
        }
    },
    web: {
        "favicon": "./src/assets/images/favicon.png"
    },
    extra: {
        tmdbKey: process.env.TMDB_KEY,
    },
}
