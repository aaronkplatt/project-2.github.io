# Cobra-Arcade
​
![License: MIT](https://img.shields.io/badge/license-MIT%20License-blue.svg) </br>
![badge: Made With-JavaScript](https://img.shields.io/badge/Made%20With-JavaScript-Yellow) ![badge: Made With-CSS3](https://img.shields.io/badge/Made%20With-CSS3-Yellow) ![badge: Made With-HTML5](https://img.shields.io/badge/Made%20With-HTML5-Yellow) </br>
![badge: Uses-express-handlebars](https://img.shields.io/badge/Uses-express-red) ![badge: Uses-express](https://img.shields.io/badge/Uses-express--handlebars-red) ![badge: Uses-express-sessions](https://img.shields.io/badge/Uses-expresssessions-red) ![badge: Uses-Sequelize](https://img.shields.io/badge/Uses-Sequelize-orange) ![badge: Uses-Canvas](https://img.shields.io/badge/Uses-Canvas-orange) ![badge: Uses-Node.JS](https://img.shields.io/badge/Uses-Node.JS-orange)
​
Welcome to Cobra Arcade! Our hope is that you’ll be able to take advantage of this website to take a break from your busy lives and rest your brain while having some fun! Our team is so excited for you to enjoy a nostalgic trip down game history to play classic titles such as Snake, Flappy Bird, and Pong. See if you can make the top score chart!
​
This Heroku DB application will allow the user to record their highscores of our three offered games with Sequelize, Node.JS, Express, Express Handlebars, and Express Sessions and canvas.
​
## Table of Contents
[Deployed Application](https://github.com/aaronkplatt/project-2.github.io#deployed-application)
​
[Installation](https://github.com/aaronkplatt/project-2.github.io#installation)
​
[Usage](https://github.com/aaronkplatt/project-2.github.io#usage)
​
[Screenshots](https://github.com/aaronkplatt/project-2.github.io#screenshots)
​
[Testing](https://github.com/aaronkplatt/project-2.github.io#testing)
​
[Future Updates](https://github.com/aaronkplatt/project-2.github.io#future-updates)
​
[Questions](https://github.com/aaronkplatt/project-2.github.io#questions)
​
[Credits](https://github.com/aaronkplatt/project-2.github.io#credits)
​
[License](https://github.com/aaronkplatt/project-2.github.io#license)
​
## Deployed Application
​
Here is an example of our app in action: 
​
![EAT-DA-BURGER!](./public/assets/img/burger.gif)
​
Access our [app delployed on Heroku here]()
​
## Installation
​
Download this package, open your command line interface and run npm install. This should install the following dependencies aswell: Express and MySQL. If for some reason, you need to install the dependencies individually run npm install "dependency_name".
​
Next run the following command to install the app: 
​
```bash
npm install 
```
​
```bash
npm install express
```
​
Note: This app is run on a Heroku server, it is not necessary to download.
​
## Usage 
​
If you have downloaded the repository and have cloned the package to your machine, and have installed all dependencies, begin by typing "npm start". 
​
```bash
npm start 
```
​
(The following directions apply to running the application on Heroku)
​
### Login Page
​
If you have never used our application before create a new username and password by clicking in the appropriate input field. Then click submit to proceeed to the games page.
​
If you have created a username and password simply type in your previous sign in and you will be redirected to the games page.
​
Note: Your created username and password need to be between 1-45 characters long. 
​
### Games Page
​
On the game page you will be presented with an gallery of pictures for each game you can play. Simply click on the picture to be redirected to your desired game.
​
Before playing a game if you'd like to view the highscores you can scroll to the bottom of the page to see who is currently holding the top 5 highest scores for each available game.
​
### Cobra Page
​
To play Cobra, simply follow the onscreen menu instructions.
​
Note: To play this game you must use a maximized browser window. Also, for each of the game pages, when you get a game over, your sessions score will automatically be saved to your user account.
​
### Pong Page
​
To play Ping-Pong, simply follow the onscreen menu instructions.
​
### Flappy Birds Page
​
To play Ping-Pong, simply follow the onscreen menu instructions.
​
### Screenshots
​
![Deployed_Application](https://user-images.githubusercontent.com/38272211/95943343-5ceb9600-0d9a-11eb-95a2-02db34395028.JPG)
​
## Testing
​
Testing Instructions: Currently, there are no written tests for this application, but if you wish to write your, change the scripts property in package json file.
​
```bash
npm install jest
```
​
```bash
npm test
```
​
## Future Updates
This application is a work in progress, future updates will include: 
1. Added CSS styling
2. Add Bootstrap Grid Layout
2. Provide functionality for:
    * Users to upload their own games 
    * Hightened security for user names and passwords
3. General Refactoring
​
## Questions
​
Share with us with any comments or questions to help us grow! 
​
GitHub Contributors: 
[Clyde Baron Rapinan](https://github.com/clydebaron2000), 
[Aaron Platt](https://github.com/aaronkplatt), 
[Timothy Sanders](https://github.com/tbsanders5), 
[Johnny L](https://github.com/johnnylieu), and [Matthew Rogers](https://www.github.com/Rogers-Development-Services) 
​
## Credits
​
Code boilerplate provided by Trilogy Education & Chris Stead
​
Thanks to [Steven Jirjis](https://www.linkedin.com/in/stevenjirjis/) and [Chris Stead](https://github.com/cmstead) for troubleshooting and debugging assistance.
​
## Licenses
Licensed under the MIT License lincense.