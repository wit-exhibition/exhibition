# Interactive VR exhibition about women in computer science

![A room with 3 portraits of computer scientists](https://ucarecdn.com/aae0831e-3338-4d65-834a-36b7c73584b4/)

## The project 

This is the development repository of the virtual reality exhibition about women and non-binary people in computer science. The [project](https://wit-exhibition.github.io/project/) was initiated by students of the [HTW Berlin](https://fiw.htw-berlin.de/). 

During a practical course the student built the [first version of the exhibition](https://adas-salon.github.io/). The code of the first version is here: https://github.com/adas-salon

### The name: wit-exhibition
The name "wit-exhibition" was the first working title. The students later decided for the name "Ada's Salon".

## Technologies

The exhibition was build with [A-Frame](https://aframe.io/) combined with [aframe-react](https://github.com/ngokevin/aframe-react) and [Redux](https://redux.js.org/). The assets e.g. pictures, audio files etc. are hosted on the [A-Frame CDN](https://cdn.aframe.io/).

##  Contributions

The project is now ready to accept contributions. Head over to the [issues](https://github.com/wit-exhibition/exhibition/issues) to see what you can contribute.

## How to get started

First clone the repository and `cd` into it.

### Before instalation

You need to have [Node.js installed](https://docs.npmjs.com/getting-started/installing-node). You will also need npm. When you install node.js, npm is automatically installed.

### Installation

If you have npm you can start installing all required packages.
```
npm install
```

To start the app you type the following command.
```
npm start
```

Then you can access the app in the browser with localhost:3000.

### Deployment
The exhibition is deployed to GitHub pages. With the the following command you can build a static JS bundle and deploy it to GitHub pages:

```bash
npm run deploy
```

It gets deployed to [https://wit-exhibition.github.io/exhibition/](https://wit-exhibition.github.io/exhibition/)
