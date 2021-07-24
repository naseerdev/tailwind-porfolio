import Vue from "vue";
import Vuex from "vuex";
/*import { stat } from "fs";*/
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {
        name: "Naseer",
        surname: "Ahmed",
        birthDay: new Date(1997, 7, 25),
        startDescription: "Hello I’m Naseer",
        description:
            ", a front end developer based in Lahore, Pakistan. Developer  with industry experience building Responsive websites and web applications. I specialize in Html5 | CSS3 | SCSS | BootStrap | React Bootstrap | TailwindCss | Javascript | Jquery | Wordpress",
    },
    technologies: {
        programming:  [
            { name: "HTML5 & (S)CSS", level: 100 },
            { name: "Javascript (ES6)", level: 100 }
        ],
        frameworks: [
            { name: "Bootstrap 5", level: 100 },
            { name: "Tailwind.css", level: 100 },
            { name: "Materil UI", level: 100 },
            { name: "Semantic UI", level: 100 },
            { name: "React.js", level: 100 },
            { name: "Jquery", level: 100 }
        ],
        tools:[
            { name: "Git" },
            { name: "Cordova" },
            { name: "Google AMP" },
            { name: "Wordpress" },
            { name: "Square Space" }
        ]
    },
    projects: [{
        
        name: "Jamiah",
        description: "Virtual Meeting platform for students and teachers.",
        link: "https://jamiah.net/",
        icon: "leaf",
        startDate: "2021",
        endDate: "2022",
        developer: "Codility Solutions",
        tags: [
            { name: "#Tailwind.Css" },
            { name: "#Haml" },
            { name: "#Scss" },
            { name: "#Javascript" }
        ]
    },{
        
        name: "Production",
        description: "A Website only for Film Producers to find Perfect Production job.",
        link: "https://productions.com/",
        icon: "leaf",
        startDate: "2021",
        endDate: "2022",
        developer: "Codility Solutions",
        tags: [
            { name: "Haml" },
            { name: "#Scss" },
            { name: "#Javascript" },
            { name: "#Videojs" }
        ]
    },{

        name: "Mdally",
        description: "MD Ally was designed to enable an innovative EMS-provider collaboration that optimizes community-based medical services, establishes strong patient-provider relationships, and ensures great clinical and financial outcomes for the patient.",
        link: "https://www.mdally.com/",
        icon: "leaf",
        startDate: "Jan 7, 2019",
        endDate: "Present",
        developer: "Codility Solutions",
        tags: [
            { name: "#Haml" },
            { name: "#Scss" },
            { name: "#Javascript" },
            { name: "#Jquery" }
        ]
    },
    {
        name: "Dawn",
        description: "Hotel Reservation App.This is my most Favorite project as I learnt most of complex things related to browser / devices compatibility .",
        link: "https://hiimdawn.com/",
        icon: "leaf",
        startDate: "june 20, 2019",
        endDate: "2020",
        developer: "Codility Solutions",
        tags: [
            { name: "#opensource" },
            { name: "#android" },
            { name: "#adb" }
        ]
    }
    ], events: [
        { 
            name: "Cinnova Technologies, LLC ",
            description: "I work in this company as a frontend developer, I mostly use Html, Css3 , Javascript, TailwindCss & Wordpress",
            role: "FrontEnd Developer ",
            type: "Work",
            startDate: "May 2022",
            endDate: "Present",
            roles:[
                {description:" Design and develope Responsive Websites." }
            ]
        },
        { 
            name: "Codility Solutions",
            description: "My role is to write and style the front-End that meet the requirements of our mocks and fulfill our user stories. I also monitor and process pull requests for production deployments.",
            role: "Front End Developer",
            type: "Work",
            startDate: "June 2020",
            endDate: "May 2020",
            roles:[
                {description:" HTML, CSS, SCSS, Bootstrap, React Bootstrap,TailwindCSs, JavaScript, ReactJs, Jquery" }
            ]
        },
        { 
            name: "Technology Sight Pvt LTD",
            description: "Started my first part time job at Technology Sight. Designed Responsive html page. Worked on Wordpress design and customization. Worked on Google AMP (Accelerated Mobile Pages) for fast web pages on mobile. Google Amp for custom site as well as wordpress website.",
            role: "Front End Developer",
            type: "Work",
            startDate: "Jun 2019",
            endDate: "Jun 2020",
            roles:[
                {description:"Html5, Css3, JavaScript, Jquery, Ajax, Json, Google Amp, Adobe Photoshop" }
            ]
        }
    ], socials: [
        {
            name: "LinkedIn",
            link: "https://pk.linkedin.com/in/naseer-dev?trk=public-profile-badge-profile-badge-view-profile-cta",
            icon: "linkedin" 
        }, {
            name: "Github",
            link: "https://github.com/naseerdev",
            icon: "github" 
        }, {
            name: "Twitter",
            link: "https://twitter.com/naseer55031",
            icon: "twitter" 
        }, {
            name: "instagram",
            link: "https://instagram.com/naseer.world",
            icon: "instagram" 
        } 
    ]
},

    getters: { age: state => {
            let ageDiff = Date.now() - state.profile.birthDay;
            let ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        profile: state => state.profile,
        projects: state => state.projects,
        technologies: state => state.technologies,
        events: state => state.events,
        socials: state => state.socials
    },
    mutations: {},
    actions: {}
});
