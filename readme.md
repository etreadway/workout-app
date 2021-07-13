<!-- LOGO GOES HERE -->
<p align="center">
  <a href="" rel="" target="_blank"><img width="150" src="https://images.macrumors.com/t/gtpMBEmqW_eQq6FynfZG_J5ng0U=/1600x0/filters:quality(90)/article-new/2017/09/streaksworkoutapp-800x469.jpg" alt="SquadMate Logo"></a></p>
</p>

<h1 align="center">WOL APP</h1>
<h2 align="center">The Work Out List App</h2>
</div>

 WOL APP was built to address the challenges the fitness community and individuals face, due to a lack out tools that can help structure a diverse work-out routine. The WOL App lets YOU choose from a range of work-outs that can be structured in a personal list, and further costumized into sets, with different variable per set (such as weight, time, and more).

<p align="center">
<a href="" rel="" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/capstoneupload.appspot.com/o/intro-screen.png?alt=media&token=e98fc3f7-fe3e-4a02-a7d1-e1ffab768a2b" alt="SquadMate Intro"></a>
  
 **[SquadMateDemo]()**
</p>

## Features
- Carousel
- Konami Code
- Document Upload 
- File-system Routing
- User Profile Picture
- Breadcrumb Navigation
- Built-in Markdown Page
- Built-in CSS(Less) Support
- User Log-in, Sign-up and Log-out
- Custom Designed and uploaded Logo
- Print Function and icon for Emergency Cards, including a QRCode
- Made use of a Master Component Layout with Integrated Components file system

## Installation
To install SquadMate use the package-management system:

Front-End:
**[npm install](https://www.npmjs.com/package/npm-install**)**

Back-End:
**[npm install](https://dev.to/lukeocodes/enny-stack-the-express-ngrok-and-nodemon-stack-23j)**

## Technical Framework Usage: MERN Stack

- MongoDB
- Express
- React
- Node.js

## Code Framework Style
- Material UI
- Custom Styled Components


## Data References
Custom Secured Data usage.

## Build Status
Deployed@**[SquadMate](https://www.squadmate.app/)**

## Usage
Sign-in and/or Sign-up. There is an admin and user option, each having their own documentation privileges to navigate to with buttons. Administration will have ability to upload documents and print team emergency cards. User will have ability to update emergency card information and complete forms needed by admin.


  <h4>Components for each setup:</h4>

        Administration          | Home Landing     | Team User
       ------------------------- ------------------ ------------
        Admin HomePage          | Sign-in Button   | User HomePage
        AdminProfile            | Sign-up Button   | UserProfile
        GetCardInfo             | Log-out Button   | InitialForm
        TeamList                | Picture Carousel |
        UserCard                | Documents        |
        EmergencyCard           | Lists            |
        PermissionsComponent    |                  |

## Stretch Goals
- [ ] Team Chatrooms.
- [ ] Calendar integrations.
- [ ] Coach and Manager Notification Board.
- [ ] Turn the Custom Application into more widely used app.
- [ ] Random Picture Display of the Events, Teams or Individual players.
- [ ] AuthO is a third(3'd) party HIPPA approved and compliant identity management system.
- [ ] Ability to give message alerts to parents if a telephone number or signed off form is incomplete.

## Challenges
- Time managing the two(2)-week sprint with all the features we would have liked to include in the project.
- Five(5) developers branching off to build features that were dependant on each other.
- Working with a team of developers on Zoom meetings across the USA and meeting for the first time.

## Triumphs
- The ability to update a Profile Photo.
- Communication between team when pushing up code from a branch without merge conflicts was incredibly efficient.
- Applied the knowledge form the sixteen(16)-week coarse at DigitalCrafts Bootcamp to incorporated that knowledge into using MangoDB Database we did not cover during class.

## Capstone Project Credits Go To The Following Builders
 
- Full-Stack Developer:[Brittani Ericksen](https://github.com/brittani-ericksen) Front-End, LOGO-Design and WireFrame Layout.
- Full-Stack Developer:[Justin Gardner](https://github.com/JustinSGardner) Back-End, Design-Styles and Design-Ideas.
- Full-Stack Developer:[Chris Owens](https://github.com/chrisowensdev) Back-End, Design-Implementations and Deployment.
- Full-Stack Developer:[Ryan Schniederjan](https://github.com/rynoschni) PM/Scrum Master, including coding and LayoutWireFrames.
- Full-Stack Developer:[Annemarie Thomas](https://github.com/Athomas9sa) Front-End, Master Layout Components and ReadMe-Files.

## GitHub Project Links:

**[Frontend Design](https://github.com/brittani-ericksen/capstone-frontend/tree/main)**
          &
**[Backend Build](https://github.com/JustinSGardner/CapStoneProject-Backend/tree/main)**

## Miscellaneous 
- Git and GitHub Commits, Merges and Branching.
- Firebase Google Storage.
- Used Trello as our guide for completing tasks from: To Do, Doing, Done.
- Trello provided the ability to have up to date communications on our project for all group members.
- Made use of collaborating on LiveShare VSCode when code-along was necessary for portions of the project.

## Code Example Extraction
Data Base:
```
const connectDB = require('./config/db.js');
connectDB();

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
    }
};

module.exports = connectDB;
```
Team Model:
```
const teamController = require('./routes/teamRoutes.js');

app.use('/team', teamController);

const Team = require('../models/teamModel');

// Get All Teams
router.get('/', async (req, res) => {
    const team = await Team.find({});
    res.json(team);
});

const mongoose = require('mongoose');

const teamSchema = mongoose.Schema(
    {
        teamName: {
            type: String,
            required: true
        },
    }
);

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
```
Cors:
```
const cors = require('cors');

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
};

app.use(cors(corsOptions));
```

## Support Services
These great services support SquadMate's core infrastructure:
[<img loading="lazy" alt="GitHub" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" height="15">](https://github.com/):octocat:
[<img loading="lazy" alt="Material-UI logo" alt="Material-UI logo" src="https://material-ui.com/static/logo.svg" width="30">](https://www.npmjs.com/package/@material-ui/core)
[<img loading="lazy" alt="MongoDB" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" height="20">](https://www.mongodb.com/)

## The End.
 
 <!-- WOL App: The Work Out List App -->

The WOL App is a great way to customize your work-outs. Most work out apps give you a pre-made routine, we're different. The WOL App lets YOU choose from a range of work-outs and put together your own routine from our list of workouts.

This app utilizes relational data by taking and array of workouts and allowing the individual user to move it into their routine list. We may add other ways to use this data that can helps users on this platform.