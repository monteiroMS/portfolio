import react from "../images/react.png";
import javascript from "../images/js.png";
import next from "../images/next.webp";
import nest from "../images/nest.png";
import mocha from "../images/mocha.png";
import chai from "../images/chai.png";
import sinon from "../images/sinon.png";
import typescript from "../images/typescript.png";
import materialUI from "../images/materialUI.png";
import rtl from "../images/rtl.png";
import jest from "../images/jest.png";
import redux from "../images/redux.png";
import express from "../images/express.png";
import node from "../images/node.png";
import java from "../images/java.png";
import sequelize from "../images/sequelize.png";
import mongoose from "../images/mongoose.png";
import python from "../images/python.png";

const techs = {
  frameworks: {
    front: [
      {
        name: "Next.js",
        image: next,
      },
      {
        name: "Redux",
        image: redux,
      },
      {
        name: "Material UI",
        image: materialUI,
      },
      {
        name: "React",
        image: react,
      },
    ],
    back: [
      {
        name: "Nest.js",
        image: nest,
      },
      {
        name: "Express",
        image: express,
      },
      {
        name: "Node.js",
        image: node,
      },
      {
        name: "Sequelize",
        image: sequelize,
      },
      {
        name: "Mongoose",
        image: mongoose,
      },
    ],
  },
  tests: {
    front: [
      {
        name: "Jest",
        image: jest,
      },
      {
        name: "RTL",
        image: rtl,
      },
    ],
    back: [
      {
        name: "Mocha",
        image: mocha,
      },
      {
        name: "Chai",
        image: chai,
      },
      {
        name: "Sinon",
        image: sinon,
      },
    ],
  },
  programmingLanguages: [
    {
      name: "TypeScript",
      image: typescript,
    },
    {
      name: "JavaScript",
      image: javascript,
    },
    {
      name: "Python",
      image: python,
    },
    {
      name: "Java",
      image: java,
    },
  ],
};

export default techs;
