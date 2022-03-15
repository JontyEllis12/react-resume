import JontysFridayQuiz from "../Components/Projects/ProjectAssets/jontysfridayquiz.png";
import ItsOnlyHousie from "../Components/Projects/ProjectAssets/itsonlyhousie.png";

const portfolioProjects = [
    {
      id: 1,
      name: "Jonty's Friday Quiz",
      url: "https://www.jontysfridayquiz.com/",
      description:
        "This is a app/webapp, where users can take a new quiz every Friday.",
      languages: "Flutter/Dart",
      img: `url(${JontysFridayQuiz})`,
    },
    {
      id: 2,
      name: "ItsOnlyHousie",
      url: "https://www.itsonlyhousie.com/",
      description:
        "This is a webapp, where users can host games of Housie - a version of Tamboola.",
      languages: "Flutter/Dart",
      img: `url(${ItsOnlyHousie})`,
    },
  ];

  export default portfolioProjects;