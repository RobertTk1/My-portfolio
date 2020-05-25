import weather from "../media/weatherio.PNG";
import tundra from "../media/tundra.jpg";
import portfolio from "../media/portfolio.PNG";
/**Project screenshots must be put in the media folder,
 *  and imported Above */

/** use project information template bellow to add new projects:
  {
    name: "",
    image: ,//Imported image 
    about: "",
    stack: [" "],
    github: "",
    website: "",
  }

*/

let projects = [
  {
    name: "weather.io",
    image: weather,
    about:
      "This is a responsive weather site that makes use of the openwether api. It has a dynamic background based on the data it receives.",
    stack: ["HTML", "CSS", "JSX", "REACT", "_Hooks"],
    github: "https://github.com/RobertTk1/weather-app/tree/master",
    website: "https://roberttk1.github.io/weather-app/",
  },
  {
    name: "Tundra",
    image: tundra, //Imported image
    about:
      "Tundra is a  responsive one page website. It is an easy to navigate bussiness website with a fun hidden secret.",
    stack: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/RobertTk1/Tundra/tree/master",
    website: "https://roberttk1.github.io/Tundra/",
  },
  {
    name: "Portfolio",
    image: portfolio, //Imported image
    about:
      "This is the curent site you are on. It is responsive and was build from the ground up. Its build was a fun process ",
    stack: ["HTML", "SASS", "JSX", "JavaScript", "REACT", "_Scroll"],
    github: "https://github.com/RobertTk1/My-portfolio/tree/master",
    website: "#",
  },
];

export default projects;
