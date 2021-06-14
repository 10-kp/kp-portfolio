export default {
  name: 'Welcome!',
  headerTagline: ['Hi, I am Kunal!', 'A full stack web developer'],
  contactEmail: 'kp_1@outlook.com',
  resume:
    'https://docs.google.com/document/d/1Ru-sJ7flEH7-rsOqHtAzzqLpuIsMyCES7iQPQAEbADo/edit?usp=sharing',
  abouttext:
    'I am a budding Web Developer with a Certificate in Full Stack Web Deveopment Bootcamp Certificate Program from the University of Oregon.',

  portfolio: [
    {
      id: 1,
      title: 'Employee Directory',
      service: 'A React based app to allow access to a company database',
      imageSrc: './ftHome.png',
      url: 'https://10-kp.github.io/employee_directory/',
    },
    {
      id: 2,
      title: 'Budget Tracker',
      service:
        'Progressive Web budget App to track account balance, withdrawals, and deposits with or without a data connection',
      imageSrc: './budgetAppPic.png',
      url: 'https://github.com/10-kp/budget_tracker',
    },

    {
      id: 3,
      title: 'Workout Tracker',
      service:
        'A NoSQL database to view, create, and track daily workouts with logging multiple resistance and cardio exercises',
      imageSrc: './ftHome.png',
      url: 'https://thawing-ravine-68564.herokuapp.com/?id=60b8081e9788b20015b3fcf0',
    },
    {
      id: 4,
      title: 'Tech-Blog',
      service:
        'An MVC built blog app to post ideas and edit them, comment on other user posts and delete their own posts',
      imageSrc: './tech-blog.png',
      url: 'https://nameless-ridge-55768.herokuapp.com/',
    },
    {
      id: 5,
      title: 'Stashbusters',
      service: 'MySQL, Node, Express, Handlebars',
      imageSrc: './group-project.jpg',
      url: 'https://nameless-mesa-29731.herokuapp.com/',
    },
    {
      id: 6,
      title: 'Note Taker',
      service: 'An app to help yarn hoarders organize their stash',
      imageSrc: './note-taker-pic.png',
      url: 'https://damp-journey-24593.herokuapp.com/',
    },
  ],
  social: [
    { name: 'Github', url: 'https://github.com/10-kp/' },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kunalkhetarpal',
    },
    { name: 'Twitter', url: 'https://twitter.com/KP_83' },
  ],
};
