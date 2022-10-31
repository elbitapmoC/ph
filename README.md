# Mission
![97a48f339fd34c5eb6acfc60d0ded748-0001](https://user-images.githubusercontent.com/11306948/198924216-287f6dba-e7f3-4a5b-9679-5b126eada79b.jpg)

Create a React frontend powered by the given Node.js backend that allows users to view, create, and update patients and prescriptions. There are two groups of users that will interact with this tool, `Providers` and `Pharmacist's`

### Assignment

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

## Dev Notes / What we used

- Implement best practices with the UI.
- Code organization & overall readability.
- [NextJS](https://nextjs.org/)
  - Lots of features
  - Performance! Performance! Performance!
  - SEO
  - Accesibility
  - plus so much more
- [React](https://reactjs.org/)
  - Components. Create once, use everywhere.
  - Big time saver.
  - Very large community, which means great support.
  - There's nothing I can't figure out
- [Chakra UI](https://chakra-ui.com/docs/components) - component library that gives you the building blocks you need to build your React applications.
  - Simple
  - Modular
  - Accessible 
  - Utility-first CSS framework
  - Responsive
  - UI / Visuals 👍
- [React Query](https://react-query-v3.tanstack.com/) - Simplifies the way we fetch, cache and syncronize data from a server.
- Testing
  - Tested on multiple devices-- Windows Laptops & Macbooks, testing on local devices as well as mobile devices.
  - Had a few other developers test out on their device to see if the instructions were clear and if they had the same results as my local machine.
  - SCSS
    - Atomic / ITCSS File Structure
    - CSS Modules, setup for scaling the app.
    
### How to run app & test

1. [Go to repo](https://github.com/elbitapmoC/ph)
1. Open terminal or favorite text editor of choice.
1. Clone the repo: `git clone git@github.com:elbitapmoC/ph.git`
1. cd into your cloned repo.
1. (If you don't have [node](https://nodejs.org/en/download/), make sure to download it before going to the next step)
  - Restart your text editor once you've installed Node.
1. You'll notice two folders, `backend` & `frontend`, open these two folders in SEPARATE tabs.
   - From here you'll need two Run `npm install` inside both tabs.
     - Inside `backend` tab, we will 1st run, `npm start`
     - Inside `frontend` tab, we will 1st run, `npm run dev`
1. Finally, both our server and front-end is up and running.

See result at: `http://localhost:3000`, have fun and enjoy!


### Future Improvements / Thoughts

- React -> Svelte
- Unit Tests
  - Pagination
  - Help users keep track of taking their daily dosage.
    - Help them understand the effects of the medicine (positive and negative)
  - Tailwind > Chakra UI.
  - Filtering out what to search by:
    - ID
    - Progress
    - Dosage
    - etc.
  - Filtering & sorting patient info.
  - Add in micro-interactions
  - Add in animations from page -> page.
  - Themes to support different color schemes (light or dark)
- Make this into an app:
  - GraphQL
  - Apollo
  - MongoDB
  - AWS, Firebase, Azure (open to different options)
- Notify users for next refill (Assuming they're consistently dosing)
