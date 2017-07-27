# Buymart Catalog App

## Description
This is a small example webapp using React, Material UI, and styled-components.

## How to run
1. Clone this repository.
1. Install dependencies by running `npm install`.
1. Start the API server by running `npm run start:api`.
1. Start the web server in development mode by running `npm start`.

## Libraries & Tooling
This application was bootstrapped using `create-react-app`, which provides an opinionated framework for building a React application. `create-react-app` includes tools and configuration that are common to most React applications.

The visual design follows Google's material specification. Material UI includes ready-to-use React components that meet the material spec.

styled-components is React library for writing CSS in JavaScript. The syntax allows you to create simple React components with attached CSS. styled-components generates classnames and CSS instead of inline styling.

`json-server` provides a simple REST API server with mock data in a JSON file.

`eslint` using the AirBNB config will lint JavaScript for code formatting issues and potential bugs. This ensures the codebase is consistent and readable for other developers.

`lodash` is a utility library with many useful functions.

## Design Choices

### Language
This project utilizes the ES2016 language standard, using the preset from `create-react-app`. In general, components are built using a functional approach - stateless React components are used when possible. These components are easy to read and maintain.

### File Structure
The project is split into several top-level folders within the _src/_ directory.

__components/__ - Contains common presentational components that can be used throughout the application. Each component has its own folder with related subcomponents within the same folder. Only the `index.js` file should be imported from outside of these folders.

__config/__ - Contains configuration used throughout the application.

__scenes/__ - Contains page-level folders. Each folder has an `index.js` which provides the main component for a page. Also a _components/_ folder may be within a scene, which contains components that are specific to that scene.

__services/__ - Contains application business logic. Currently, only API helpers are located here, however if Redux were added, then actions, reducers, and stores would also be located here.

__util/__ - Contains utility functions used throughout the application.

### Spacing Configuration
Spacing increments is stored in a configuration file. This ensures spacing is consistent across the application. Additionally, spacing can be changed application-wide by modifying the base spacing increment in the configuration.

## Areas for Improvement
* Documentation should be added where needed throughout the codebase. Documentation should follow the JSDoc standard.
* Unit tests could be added to ensure stability. At a minimum, tests could ensure all components render successfully.
* This project uses pure React state management. Although this is sufficient for an application of smaller scale, a state management framework like Redux should be added as the application grows in size.
* Many components contain small presentational components within them (often via styled-components). It may make sense to split some of these out into their own files for readability and maintainability.
* The API helpers have `localhost` hard-coded in the URL. This should be dependent on the server the application is running on. This could also be configurable for different staging or production systems.
* Although the application does display well on mobile, the application isn't truly responsive - relative spacing doesn't adjust based on the window size. By using relative units, such as `em` or `vw`, a more fluid layout could be created.
* Some elements of the visual design could be spruced up, such as the product information containers on the catalog page.
* Some assets such as the favicon are still using the version included in `create-react-app`. These should be customized for the application.
* In order to override some Material UI styles, `!important` is required in some CSS styles. This will no longer be required in the 1.0 release of Material UI (currently in beta).
* Additional validation could be done on the shipping form, which currently only checks for required fields and a valid US state.