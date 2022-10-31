# Mission
![97a48f339fd34c5eb6acfc60d0ded748-0001](https://user-images.githubusercontent.com/11306948/198924216-287f6dba-e7f3-4a5b-9679-5b126eada79b.jpg)

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

Future Updates:

- Notify users for next refill (Assuming they're consistently dosing)
