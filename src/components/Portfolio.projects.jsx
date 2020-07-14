import weather from "../media/weatherio.PNG";
import tundra from "../media/tundra.jpg";
import captivate from "../media/captivate.PNG";
import portfolio from "../media/portfolio.PNG";
import exploore from "../media/exploore.PNG";
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
    name: "Exploore",
    image: exploore, //Imported image
    about:
      "A fully responsive website used for searching through text based on a complex searching algorithm built using JS functions. It was a good practice for writing different functions",
    stack: ["HTML", "SASS", "Bootstrap", "Javascript"],
    github: "https://github.com/RobertTk1/Exploore/tree/master",
    website: "https://roberttk1.github.io/Exploore/",
  },
  {
    name: "CAPTIVATE",
    image: captivate, //Imported image
    about:
      "This is a fully responsive business website that contains various sections, prepared and organized to be integrated with custom back-end platforms to serve the content dynamically",
    stack: ["HTML", "SASS", "JSX", "React", "_Router", "_Hooks"],
    github: "https://github.com/RobertTk1/Captivate/tree/master",
    website: "https://roberttk1.github.io/Captivate/",
  },
  {
    name: "weather.io",
    image: weather,
    about:
      "A fully responsive web app integrated with the Openweather API to pull in data such as temperature and weather conditions. It has a dynamic background based on the data it receives",
    stack: ["HTML", "CSS", "JSX", "JSON", "REACT", "_Hooks"],
    github: "https://github.com/RobertTk1/weather-app/tree/master",
    website: "https://roberttk1.github.io/weather-app/",
  },
  {
    name: "Tundra",
    image: tundra, //Imported image
    about:
      "This is a fully responsive one-page business website that can be used as a presentation website. It has a well-structured code that can be easily integrated with a back-end interface to get the content dynamically",
    stack: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/RobertTk1/Tundra/tree/master",
    website: "https://roberttk1.github.io/Tundra/",
  },
  {
    name: "Portfolio",
    image: portfolio, //Imported image
    about:
      "This is the curent site you are on. It is fully responsive and was built from the ground up. Building it was a fun process ",
    stack: ["HTML", "SASS", "JSX", "JavaScript", "REACT", "_Scroll"],
    github: "https://github.com/RobertTk1/My-portfolio/tree/master",
    website: "#",
  },
];

export default projects;
