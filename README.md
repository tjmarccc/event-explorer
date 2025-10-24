Event Explorer
Event Explorer is a cross-platform mobile application built with React Native (React Native CLI). It provides a clean interface for browsing and viewing event details. This repository contains the native Android and iOS projects, TypeScript source files, and assets.
Repository snapshot and main files:
•	Native projects: android/ and ios/.
•	App entry: App.tsx.
•	Languages: TypeScript primary, native modules in Kotlin/Swift where present. (GitHub)
•   Download Apk: https://t.co/Eki2GULc1J
•   App Screenshots link: https://t.co/ezU0fwtTkc 
________________________________________
Table of contents
1.	Quick start
2.	Prerequisites
3.	Install dependencies
4.	Running the app — development
o	Android (device/emulator)
o	iOS (simulator/device)
5.	Running a production build
o	Android release (APK/AAB) and signing
o	iOS release and Xcode build
6.	Screenshots and APK download
7.	Project structure
8.	Troubleshooting
9.	Contributing
10.	License
________________________________________
Quick start
Clone the repository and install dependencies:
git clone https://github.com/tjmarccc/event-explorer.git
cd event-explorer
This project is a React Native CLI app (not an Expo-managed project). The repository contains android/ and ios/ folders and a TypeScript React Native source (App.tsx). (GitHub)
________________________________________
Prerequisites
Before running the app, ensure you have the following installed and configured:
•	Node.js (recommended LTS, e.g. v18+).
•	Yarn or npm.
•	Java Development Kit (JDK) 11 or later.
•	Android Studio with Android SDK and an emulator (or a physical Android device with USB debugging enabled).
•	Xcode (macOS) for iOS builds and Simulator.
•	CocoaPods (for iOS native dependencies).
•	(Optional) Ruby + Bundler if Gemfile is used for CocoaPods environment. (GitHub)
Helpful platform guides
•	React Native environment setup: https://reactnative.dev/docs/environment-setup
•	Android Studio / SDK and emulator setup (via Android Studio docs)
•	Xcode and iOS simulator setup (Apple Developer documentation)
________________________________________
Install dependencies
From the repo root:
# Using npm
npm install

# or using Yarn
yarn install
If you are on macOS and building for iOS, install CocoaPods dependencies:
cd ios
# if the project uses Bundler (Gemfile), first:
bundle install
bundle exec pod install

# otherwise:
pod install
cd ..
(There is a Gemfile in the repo, so using bundle install then bundle exec pod install is recommended.) (GitHub)
________________________________________
Running the app — development
Start Metro (the React Native packager):
# root of repo
npm start
# or
yarn start
Android (device/emulator)
1.	Make sure an emulator is running or an Android device is connected via USB with Developer Mode and USB debugging enabled.
2.	In a new terminal (root of repository):
# install and run on Android
npx react-native run-android
# or
npm run android
# or
yarn android
If you just want to open Metro and then trigger the Android run, you can press a in the Metro terminal.
iOS (simulator/device)
Note: iOS builds must be done on macOS with Xcode installed.
1.	Install CocoaPods as shown in the previous section and ensure pods were installed in ios/.
2.	From the project root:
# run on iOS simulator
npx react-native run-ios
# or
npm run ios
# or
yarn ios
Alternatively, open the workspace in Xcode:
cd ios
open EventExplorer.xcworkspace
Then select a target device (simulator or a connected device) in Xcode and press the Run button.
________________________________________
Running a production build
This section explains how to produce signed/release builds for Android and iOS.
Android release (APK/AAB) and signing
1.	Generate a release keystore (if you don't already have one):
keytool -genkey -v -keystore android/app/keystore/my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
2.	Store keystore credentials in android/gradle.properties (recommended) or set them in your CI secrets. Example properties:
MYAPP_UPLOAD_STORE_FILE=keystore/my-release-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=your_store_password
MYAPP_UPLOAD_KEY_PASSWORD=your_key_password
3.	Confirm android/app/build.gradle has a signingConfigs block for release that uses those variables. Example:
signingConfigs {
    release {
        storeFile file(MYAPP_UPLOAD_STORE_FILE)
        storePassword MYAPP_UPLOAD_STORE_PASSWORD
        keyAlias MYAPP_UPLOAD_KEY_ALIAS
        keyPassword MYAPP_UPLOAD_KEY_PASSWORD
    }
}
buildTypes {
    release {
        signingConfig signingConfigs.release
        minifyEnabled false
    }
}
4.	Build the release APK (inside android/):
cd android
./gradlew clean
./gradlew assembleRelease
The output APK is usually located at:
android/app/build/outputs/apk/release/app-release.apk
If you prefer an AAB for Play Store distribution:
./gradlew bundleRelease
AAB output:
android/app/build/outputs/bundle/release/app-release.aab
Notes
•	Keep the keystore and its password safe — Google Play requires the same signing key for updates.
•	If you need help with aligning/verifying the APK signature, use apksigner (Android SDK tools) or jarsigner.
iOS release and Xcode build
1.	Increment version and build numbers in Xcode (General tab of your target).
2.	Ensure proper provisioning profiles and a valid Apple Developer account are configured in Xcode.
3.	Open the workspace:
cd ios
open EventExplorer.xcworkspace
4.	Select a Generic iOS Device (or a connected device) and choose Product → Archive.
5.	Use the Organizer window to export an archive for App Store distribution or export a development build for Ad Hoc / Enterprise testing.
Notes
•	If you use CI (e.g. GitHub Actions or Fastlane), configure Apple credentials and provisioning profiles appropriately.
•	The repo includes native modules in Kotlin/Swift — confirm compatibility of any pods and native code if you update dependencies. (GitHub)
________________________________________
Screenshots and APK download
Screenshots are available at the link you provided:
•	Screenshots: https://t.co/ezU0fwtTkc
Android APK download:
•	APK: https://t.co/Eki2GULc1J
________________________________________
Project structure (high level)
A representative structure based on what’s in the repository:
event-explorer/
├── android/                # Android native project
├── ios/                    # iOS native project
├── src/                    # Application source code (screens, components)
├── App.tsx                 # App entry (TypeScript)
├── index.js                # React Native entry
├── package.json
├── tsconfig.json
├── metro.config.js
└── README.md
Adjust paths above if your source is in src/ subfolders — inspect the repo for exact structure. (GitHub)
________________________________________
Troubleshooting
Metro server not starting / bundling errors
•	Kill existing Metro instances, clear cache, and restart:
npx react-native start --reset-cache
Android build errors
•	Make sure Android SDK, platform tools, and build tools are installed.
•	Ensure ANDROID_HOME / ANDROID_SDK_ROOT is set and Android Studio's SDK path is correct.
•	If you get Gradle/keystore signing errors, check android/gradle.properties and android/app/build.gradle.
iOS build errors
•	Ensure CocoaPods are installed and pods have been installed using pod install inside ios/.
•	If Swift/CocoaPods issues appear, try pod repo update and reinstall pods:
cd ios
pod deintegrate
pod install
Missing native dependencies after yarn install
•	Rebuild native projects after adding or changing native modules:
npx react-native run-android
# or
cd ios && pod install && cd ..
npx react-native run-ios
________________________________________
Contributing
Contributions are welcome. Suggested workflow:
1.	Fork the repository.
2.	Create a feature branch: git checkout -b feature/your-feature.
3.	Commit changes: git commit -m "Add something".
4.	Push branch and open a pull request.
When submitting PRs, include:
•	Short description of changes
•	Any setup steps to test locally
•	Screenshots or recordings for UI changes
________________________________________
Notes & maintenance
•	The project is TypeScript-based; ensure your IDE configuration supports TypeScript and React Native types.
•	Keep native dependency versions and Android/iOS SDKs compatible; upgrades to react-native can require native migration steps.
•	The repository contains both Android and iOS native subprojects — treat them as first-class when upgrading native dependencies.
________________________________________
Contact / Author
Wisdom Chukwuemeka email: wisdom32chukwuemeka@gmail.com phone(whatsapp): +2348130683699

