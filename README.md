# README

This README document explains how to get this project up and running

### What is this repository for?

- Quick summary

  This is an expense manager app that can run on Android and iOS

- Version

  1

### How do I get set up?

- Summary of set up

  Clone the repo using the following command

- Configuration

  Ensure that you have the proper [React Native Setup](https://reactnative.dev/)

- Dependencies

  Download the dependencies using the following command `yarn` and then run `yarn install:pods`

- Run on Simulator

  Now you can simply run `yarn ios` to run the app on iOS Simulator and you can open Android Virtual Machine then run `yarn android` and `yarn start`

### Contribution guidelines

- When creating small components that does not have dependencies on other components place them under the `atoms` directory.
- When creating medium components that have dependencies on small(`atoms`) components place them under the `components` directory.
- When creating large components that have dependencies on small(`atoms`) and/or medium(`components`) components place them under the `containers` directory.
- When creating utility functions or components that have dependencies on some node modules place them under the `integrations` directory.

### Who do I talk to?

- Repo owner or admin

  inmogr@msn.com
