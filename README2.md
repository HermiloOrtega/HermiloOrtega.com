# Personal Website Source Code

## Introduction
React and Bootstrap 4 based personal portfolio website template. This has been built with React, ES6+ etc. 

## Setup Development Environment
In order to kickstart the development of the website, The very first thing to do is yo setup a react development environment. 

Following tools are needed to setup a react dev environment: 
- Node JS
	- NoseJS Works as a node package manager behind the scene. It is recommended to download and install the latest version of Node JS from it's official site (http://nodejs.org)[http://nodejs.org]

## Preparation

You'll need to install Node.js >=v12.0+ (Recommended Version) (NPM comes along with it) and serve (a NPM package)

Use command line tool i.e. powershell or terminal and navigate to the project root. This is powershell in windows and terminal on mac/linux.

Let's see how the setup works: 
Use terminal and navigate to the project root.

Then run : npm run install or  yarn install

N:B: If you fall any problem from the nodejs latest version while run npm install try yarn instead.

Then run : npm run start or  yarn start

Now in the browser go localhost:3000

## Pages and Components Info 

- Home (/pages/Home.js)
- About (/pages/About.js)
- Portfolios (/pages/Portfolios.js)
- Resumes (/pages/Resumes.js)
- Contact (/pages/Contact.js)

### Common Components:

- Header (/components/Header.js)
- Footer (/components/Layout.js)

Template Features:

- ES6+
- React JS 17+
- Bootstrap 5+

## Dependencies 

Here are the dependencies list which being used in the Chester React Template:

 
> "dependencies": {
>      "axios": "^0.24.0",
>      "axios-mock-adapter": "^1.20.0",
>      "bootstrap": "^5.1.3",
>      "disqus-react": "^1.1.2",
>      "fslightbox-react": "^1.6.2",
>      "markdown-to-jsx": "^7.1.3",
>      "node-sass": "^6.0.1",
>      "react": "^17.0.2",
>      "react-dom": "^17.0.2",
>      "react-feather": "^2.0.9",
>      "react-helmet": "^6.1.0",
>      "react-lineicons": "^3.0.0",
>      "react-masonry-component": "^6.3.0",
>      "react-on-screen": "^2.1.1",
>      "react-progressive-image": "^0.6.0",
>      "react-router-dom": "5.0.1",
>      "react-scripts": "4.0.3",
>      "react-slick": "^0.28.1",
>      "react-tsparticles": "^1.37.3",
>      "shave": "^2.5.10",
>      "slick-carousel": "^1.8.1"
> }


## Fonts
By default, the template loads Nunito font from Google Web Font Services, you can change the font with the one that suits you best.

You will find the font code in the "scss/basic/_typography.scss

> @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800&display=swap');


