# React Native Product List App

A simple React Native application that displays a list of products fetched from an API. Users can view product details by clicking on individual items.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [API Source](#api-source)

## Features

- Fetches product data from an external API
- Displays products in a user-friendly card format
- Allows navigation to detailed product information

## Technologies Used

- **React Native**: A framework for building native apps using React
- **Axios**: For making HTTP requests
- **React Navigation**: For handling navigation between screens
- **React Native Elements**: UI toolkit for React Native

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v12 or later)
- React Native CLI or Expo CLI
- Android Studio or Xcode (for Android and iOS development, respectively)

### Installation

Clone the repository:

````bash
git clone <repo-name>
cd p<repo-name>


## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
````

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :

You've successfully run and modified your React Native App. :partying_face:

## Folder Structure

ecom-project │
├── src │ ├── components │ │ ├── Loading.js │ │ └── ProductCard.js │ │ │ ├── screens │ │ ├── ProductListScreen.js │ │ └── ProductDetailsScreen.js │ │ │ ├── App.js │ ├── package.json │ └── README.md

## API Source

The application fetches product data from the following API:

https://dummyjson.com/products
