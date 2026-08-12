# Lead Capture App — Part 1

React Native CLI / TypeScript implementation of Part 1 of the Lead Capture App.

## Included
- Lead list
- Start session
- Recording consent
- Local audio recording
- Photo capture
- LEAD personal details
- Business details
- Notes
- End session
- Local persistence
- Lead profile
- Duplicate check
- Summary
- Settings/privacy UI

## Important
This package is intentionally Part 1 only. No server synchronization, OCR, or AI is included.

## GitHub Actions
The repository includes `.github/workflows/build-apk.yml` to build the Android release APK on GitHub Actions. The workflow installs Node, Java, Android SDK tooling, and Gradle on the runner; nothing needs to be installed on your Mac for the CI APK build.

## Local setup
```bash
npm install
npx react-native start
```
For Android local development you normally need the Android SDK. If you only want GitHub Actions builds, push this project and use the workflow.

## Build CI
Push to `main` or run the workflow manually from GitHub Actions. The generated APK is uploaded as `lead-capture-part1-release`.

## Design
The UI follows the supplied references: warm cream background, brown/gold accent, rounded cards, dark focus-mode screens, bottom navigation, and compact lead-capture forms.
