import MusicApp from "../images/projects/music-game.png";
import DisneylandApp from "../images/projects/disneylandapp.png";
import FitApp from "../images/projects/fitapp.jpg";
import LibraryApp from "../images/projects/libraryApp.png";

const projects = [
  {
    title: "Library App",
    description:
      "Enables users to upload and organize their books, comics, and stories from images and documents. Built using React and TypeScript on AWS Amplify with authentication through Amazon Cognito, it leverages GraphQL for data handling and S3 for storage.",
    imageUrl: LibraryApp,
    technologies: [
      "React",
      "TypeScript",
      "AWS Amplify",
      "Amazon Cognito",
      "Amazon S3",
      "GraphQL",
    ],
  },
  {
    title: "Music Theory Game",
    description:
      "Built with React and utilizing Tone.js for audio synthesis, this Music Theory Game facilitates an immersive learning experience through a virtual piano for chord recognition and practice, and a real-time grading system.",
    imageUrl: MusicApp,
    technologies: ["React", "Tone.js"],
    demoUrl: ["https://cmillecan.github.io/music-app/"],
    githubUrl: ["http://github.com/cmillecan/music-app"],
  },
  {
    title: "Disneyland Database",
    description:
      "Offers users information on Disney attractions and park resources. Its backend, focusing on data storage with MongoDB and server-side operations with Express.js, supports RESTful API endpoints for data retrieval. React is used for the front-end, facilitating access to specific park information.",
    imageUrl: DisneylandApp,
    technologies: ["MongoDB", "Express.js", "React"],
    githubUrl: ["http://github.com/cmillecan/disneyland-app"],
  },
  {
    title: "FitApp",
    description:
      "A web application developed for logging workouts and tracking fitness progress, " +
      "built with React, Express, MySQL, and is deployed using AWS and Docker. FitApp was created to replace traditional workout tracking tools like notebooks and " +
      "spreadsheets with a simplified, digital solution. It aims to provide users with an easy way to log workouts and customize their " +
      "fitness routines.",
    imageUrl: FitApp,
    technologies: ["MySQL", "Express.js", "React"],
    videoUrl: ["https://youtu.be/LxdsR191p_c"],
    githubUrl: ["http://github.com/cmillecan/fitapp"],
  },
];

export default projects;
