# Octosoft Professionals

This is a static generated [React](https://reactjs.org/) project created using [Gatsby](https://www.gatsbyjs.com/) and [Contenful](https://www.contentful.com/)

A working version of the project can be seen at:

[https://octosoftprofessionals.com/](https://octosoftprofessionals.com/)

![Captura de pantalla de 2021-05-12 12-35-52](https://user-images.githubusercontent.com/54718297/118004769-21a94980-b320-11eb-9f47-3d11cb495421.png)

# How to run this project locally

- Clone this repo
- Run `npm install`
- Add a `.env.development` file on the root of the project with the next variables:

```
REACT_APP_SPACE=<your_contenful_app_space>
REACT_APP_ACCESS_TOKEN=<your_react_contenful_access_token>
```

- Run `npm run dev` to start the web server. This will open the landing page

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />

### `npm run build`

Builds the app for production to the `public/` folder.<br />
