# pokedexAPI

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Technology Used 🖥️

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     |  
| node.js | [https://nodejs.org/en](https://nodejs.org/en)     |     
| Express.js | [https://expressjs.com/](https://expressjs.com/)     |     
| dotenv | [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)     |     
| nodemon | [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)     |   
| Mongoose | [https://mongoosejs.com/](https://mongoosejs.com/)     |   
| MongoDB | [https://www.mongodb.com/](https://www.mongodb.com/) |
| Git | [https://git-scm.com/](https://git-scm.com/)     |   

---

## Description 📝

Track your Pokemon, create relationships between them, and create thoughts for them all in one application. Through the utilization of MongoDB, Mongoose, and Express.js, this application is able to create, read, update, and delete information between Pokemon and all of the information is stored in a MongoDB backend thanks to the usage of Mongoose.

![example.gif](./assets/images/example.gif)

-----------------------

## Table of Contents 📋
* [Learning Points](#learning-points-✍️)
* [Installation Instructions](#installation-instructions-📥)
* [Usage Information](#usage-information-✅)
* [Contribution Guidelines](#contribution-guidelines-🤝)
* [Author Info](#author-info-👺)
* [Questions?](#questions-❓)
* [License](#license-🚩)

----------------------

## Learning Points ✍️

The benefit of using Mongoose/MongoDB in this application compared to other backend databases like MySQL is that due to the sheer size of Pokemon entries in the National Pokedex (over 1000), if a user was enthusiastic enough to put in all of the existing, and to be created, Pokemon into the database, manipulating data would be much faster compared to MySQL. 

Of course, there's also downsides of using MongoDB as a backend, such as, the lack of strict data validations like there are in MySQL and the relational pairings that data entries can have with one another.

---

## Installation Instructions 📥

To install this app, follow the instructions below:

1. Make sure you have Node.js installed on your computer.
2. Download/clone the contents of this repo on to your local machine.
3. Open your integrated terminal in the root directory of this app.
4. Run `npm i` or `npm install` in your terminal to download all of the dependencies.

------------------------

## Usage Information ✅

To use this application, follow the steps below:

1. Make sure you have installed all of the dependencies.
2. Run `npm start` in the terminal that's opened to the root directory of this app.
3. Make get, post, put, and delete requests to `http://localhost:3001/api/pokemon` or `http://localhost:3001/api/thought` to get started filling your database with information. For more specific route details, please follow the tutorial video below.

If you'd like to see a tutorial video and demo of all of the routes that are available in this application, [please click here to watch the demo video.](https://youtu.be/_2I2-HvQf8w)

------------------------

## Contribution Guidelines 🤝

If you'd like to contribute to this project, simply open a PR and I'll have a look at it!. Furthermore, if you'd like to become a dedicated contributor, message me on any of my socials linked [in the author info section](#author-info-👺) or email me at [daevidvo@gmail.com](mailto:daevidvo@gmail.com)

------------------------

## Author Info 👺

### ***daevidvo***
* [Github](https://www.github.com/daevidvo)
* [LinkedIn](https://www.linkedin.com/in/daevidvo)
* [Instagram](https://www.instagram.com/daevidvo)

--------------------------

## Questions ❓

Email me at: [daevidvo@gmail.com](mailto:daevidvo@gmail.com) or [visit my GitHub](https://www.github.com/daevidvo)

------------------------

## License 🚩

https://opensource.org/licenses/MIT


The MIT License (MIT)
=====================

Copyright © daevidvo

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
