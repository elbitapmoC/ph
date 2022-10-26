# Assignment / Mission

![ImageHiddenTemporarily](https://user-images.githubusercontent.com/11306948/197881669-7b9df1f7-4bc5-4c62-a6d5-3f7712797cd5.NO)

Create a React frontend powered by the given Node.js backend that allows users to view, create, and update patients and prescriptions. There are two groups of users that will interact with this tool, `Providers` and `Pharmacist's`

### Requirements

- This front end should make use of the [Chakra UI library](https://chakra-ui.com/) for design and components
- Both users, Providers and Pharmacists, should be able to complete their respective actions:

**Provider**

As a provider, I should be able to create new patients and write prescriptions for these patients. I would also like to see my other patients and the status of their previously written prescriptions

**Pharmacist**

As a pharmacist, I should be able to see all prescriptions and move them through the different states (pending, in progress, and filled).

### Backend Guide

In order to run the backend, you must follow these steps:

1. [Ensure npm and node.js are installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Once installed, run `npm install` within the backend directory to install the required dependencies
3. Afterwards, run `npm run start` and the backend server should be reachable at [localhost:3000](http://localhost:3000)
