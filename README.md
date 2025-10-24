Event Explorer
Event Explorer is a cross-platform mobile application built with React Native (React Native CLI).
It provides a clean interface for browsing, searching, and viewing event details.
This repository contains the native Android and iOS projects, TypeScript source files, and assets.
Repository snapshot and main files:
•	Native projects: android/ and ios/
•	App entry: App.tsx
•	Languages: TypeScript (primary), with native modules in Kotlin/Swift where present
•	Download APK: https://t.co/Eki2GULc1J
•	App Screenshots: https://t.co/ezU0fwtTkc
________________________________________
Table of Contents
1.	Quick Start
2.	Features
3.	Prerequisites
4.	Install Dependencies
5.	Running the App — Development
o	Android (device/emulator)
o	iOS (simulator/device)
6.	Running a Production Build
o	Android Release (APK/AAB) and Signing
o	iOS Release and Xcode Build
7.	Screenshots and APK Download
8.	Project Structure
9.	Troubleshooting
10.	Contributing
11.	Notes & Maintenance
12.	Contact / Author
________________________________________
Quick Start
Clone the repository and install dependencies:
git clone https://github.com/tjmarccc/event-explorer.git
cd event-explorer
This project is a React Native CLI app (not an Expo-managed project).
The repository contains android/ and ios/ folders, plus a TypeScript React Native source (App.tsx).
________________________________________
Features
Event Explorer is designed to be lightweight, responsive, and data-driven.
Here are the main functional components:
Core Functionalities
•	Event Feed
Displays a dynamic list of events with titles, dates, and locations.
The data is fetched asynchronously or loaded from local storage.
•	Event Details Page
Tapping on an event shows a detailed view, including extended descriptions, location, date/time, and imagery.
•	Search and Filtering
Users can search events by name or filter them by category or date, enabling quick discovery.
•	Persistent Local Storage (AsyncStorage)
The app stores data locally using @react-native-async-storage/async-storage, allowing event data and user preferences (e.g., last viewed event) to persist between sessions.
•	Offline Support
Cached event data remains available offline, improving user experience and reducing repeated network calls.
•	Smooth Navigation
Implemented via React Navigation, providing seamless transitions between the Event List and Event Details screens.
•	Cross-Platform UI
Designed for both Android and iOS, ensuring responsive layouts across screen sizes.
•	Optimized Performance
Efficient re-renders, lazy loading, and proper state management minimize lag and battery usage.
________________________________________
Prerequisites
Before running the app, ensure you have the following installed and configured:
•	Node.js (recommended LTS, e.g., v18+)
•	Yarn or npm
•	Java Development Kit (JDK) 11 or later
•	Android Studio with SDK and emulator (or a physical Android device with USB debugging enabled)
•	Xcode (macOS) for iOS builds and Simulator
•	CocoaPods (for iOS native dependencies)
•	(Optional) Ruby + Bundler if the Gemfile is used for CocoaPods setup
Helpful platform guides:
•	React Native environment setup
•	Android SDK and emulator setup (via Android Studio docs)
•	Xcode and iOS simulator setup (Apple Developer documentation)
________________________________________
Install Dependencies
From the repo root:
# Using npm
npm install

# or using Yarn
yarn install
If building for iOS (macOS only):
cd ios
# Recommended if Gemfile is present
bundle install
bundle exec pod install

# or
pod install
cd ..
________________________________________
Running the App — Development
Start the Metro bundler:
npm start
# or
yarn start
Android (device/emulator)
1.	Ensure an emulator is running or a physical Android device is connected via USB.
2.	Run:
npx react-native run-android
# or
npm run android
# or
yarn android
If Metro is running, pressing a in the terminal will also launch the Android app.
iOS (simulator/device)
Requires macOS with Xcode installed.
1.	Ensure CocoaPods dependencies are installed (cd ios && pod install).
2.	Run:
npx react-native run-ios
# or
npm run ios
# or
yarn ios
Alternatively, open in Xcode:
cd ios
open EventExplorer.xcworkspace
Then build and run on a chosen simulator or connected device.
________________________________________
Running a Production Build
Android Release (APK/AAB) and Signing
1.	Generate a release keystore:
keytool -genkey -v -keystore android/app/keystore/my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
2.	Add credentials to android/gradle.properties:
MYAPP_UPLOAD_STORE_FILE=keystore/my-release-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=your_store_password
MYAPP_UPLOAD_KEY_PASSWORD=your_key_password
3.	Verify android/app/build.gradle includes your release signing config.
4.	Build:
cd android
./gradlew clean
./gradlew assembleRelease
Output:
android/app/build/outputs/apk/release/app-release.apk
To build an AAB (Play Store format):
./gradlew bundleRelease
Output:
android/app/build/outputs/bundle/release/app-release.aab
Keep your keystore secure and never commit it to version control.
________________________________________
iOS Release and Xcode Build
1.	Update version and build number in Xcode.
2.	Ensure proper provisioning profiles and Apple Developer credentials.
3.	Open:
cd ios
open EventExplorer.xcworkspace
4.	From the Xcode “Product” menu → “Archive”.
5.	Export via Organizer for App Store or Ad Hoc distribution.
________________________________________
Screenshots and APK Download
•	Screenshots: https://t.co/ezU0fwtTkc
•	Android APK: https://t.co/Eki2GULc1J
________________________________________
Project Structure
event-explorer/
├── android/                # Android native project
├── ios/                    # iOS native project
├── src/                    # App source code (screens, components, helpers)
├── App.tsx                 # App entry (TypeScript)
├── index.js                # React Native entry point
├── package.json
├── tsconfig.json
├── metro.config.js
└── README.md
________________________________________
Troubleshooting
Metro server not starting
npx react-native start --reset-cache
Android build errors
•	Ensure Android SDK and build tools are installed.
•	Check ANDROID_HOME and ANDROID_SDK_ROOT environment variables.
•	Verify keystore paths and passwords in gradle.properties.
iOS build errors
cd ios
pod repo update
pod deintegrate
pod install
Native dependency issues
Rebuild native modules:
npx react-native run-android
# or
npx react-native run-ios
________________________________________
Contributing
1.	Fork the repository
2.	Create a feature branch
3.	git checkout -b feature/your-feature
4.	Commit and push changes
5.	Open a pull request with:
o	Description of changes
o	Testing instructions
o	Screenshots (if UI updates)
________________________________________
Notes & Maintenance
•	The app is written in TypeScript, ensure your IDE supports TypeScript and React Native types.
•	Keep dependencies updated and aligned with React Native’s latest stable version.
•	Handle native module upgrades for Android/iOS when bumping React Native versions.
•	AsyncStorage caching may require clearing after schema updates (AsyncStorage.clear() during testing).
________________________________________
Contact / Author
Author: Wisdom Chukwuemeka
Email: wisdom32chukwuemeka@gmail.com
Phone (WhatsApp): +2348130683699
GitHub: https://github.com/tjmarccc/event-explorer

