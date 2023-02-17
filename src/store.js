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
				", Armed with 3+ years of an awesome experience in Frontend Development, always hungry for learning new technologies & skills and to take on challenges. Proficient in HTML5, CSS3, JavaScript, React Js, TypeScript, GraphQL, Material UI 5, Chakra UI, TailwindCss, Bootstrap 5, React Bootstrap",
		},
		technologies: {
			programming: [
				{ name: "HTML5 & (S)CSS", level: 100 },
				{ name: "Javascript (ES6)", level: 100 },
				{ name: "TypeScript", level: 100 }
			],
			frameworks: [
				{ name: "TailwindCss", level: 100 },
				{ name: "Material UI", level: 100 },
				{ name: "Chakra UI", level: 100 },
				{ name: "Bootstrap 5", level: 100 },
				{ name: "React Js", level: 100 },
				{ name: "Jquery", level: 100 }
			],
			tools: [
				{ name: "Git" },
				{ name: "Jira" },
				{ name: 'Apollo GraphQL' },
				{ name: 'Cypress' },
				{ name: 'React Hook Form' },
			]
		},
		projects: [{
			name: "Helmer",
			description: "Helmer legal is a law firm to protect the legal rights of clients throughout the State of New Jersey.",
			link: "https://helmer-portal-staging.herokuapp.com/",
			icon: "leaf",
			startDate: "2022",
			endDate: "2023",
			developer: "Kwanso",
			tags: [
				{ name: "#Material UI" },
				{ name: "#React.tsx" },
				{ name: "#Apollo GraphQL" },
				{ name: "#Context Api" },
				{ name: "#React Hook Form" }
			]
		}, {
			name: "Imgry",
			description: "Imgry is a free-to-use online graphic design tool. Use it to create social media posts, presentations, posters, videos, logos, and more. I am working on the implementation of the design to React Typescript Components. This app is developed using the Chakra UI Library.",
			link: "https://app.imgry.com/",
			icon: "leaf",
			startDate: "2022",
			endDate: "2023",
			developer: "Kwanso",
			tags: [
				{ name: "#Chakra UI" },
				{ name: "#Remix" },
				{ name: "#Context Api" },
				{ name: "#React Hook Form" }
			]
		}, {

			name: "BoxCheck",
			description: "BoxCheck manages the fastest, most accurate, and most cost-efficient delivery network in the US for wine, beer, and more. Worked on Tailwind CSS for UI Development with React Js.",
			link: "https://dev.ship.boxcheck.com/",
			icon: "leaf",
			startDate: "2021",
			endDate: "2022",
			developer: "Nextbridge Ltd",
			tags: [
				{ name: "#Tailwind Css" },
				{ name: "#React.js" },
			]
		},
		{
			name: "MD Ally",
			description: "MD Ally was designed to enable an innovative EMS-provider collaboration that optimizes community-based medical services, establishes strong patient-provider relationships, and ensures great clinical and financial outcomes for the patient.",
			link: "https://www.mdally.com/",
			icon: "leaf",
			startDate: "2019",
			endDate: "2020",
			developer: "Codility Solutions",
			tags: [
				{ name: "#Ruby" },
				{ name: "#Bootstrap 5" },
				{ name: "#Scss" },
			]
		}
		], events: [
			{
				name: "Kwanso",
				description: "As a Frontend Engineer at Kwanso, I specialize in converting designs into high-quality code using Material UI and React.ts. My focus is on building responsive, user-friendly, and efficient web applications that meet business and user requirements.As the sole Frontend Developer on this project, I was responsible for converting the design to actual code using Material UI, and integrating the API using React.js. I worked closely with the design and back-end teams to ensure that the web application met all business and user requirements.",
				role: "Frontend Engineer",
				type: "Work",
				startDate: "March 2022",
				endDate: "Present",
				roles: [
					{ description: "Cypress · Chakra UI · Apollo GraphQL · Jira · Material-UI · HTML5 · Cascading Style Sheets (CSS) · JavaScript · React.js · TypeScript" }
				]
			},
			{
				name: "Nextbridge Pvt Ltd",
				description: "I was working in Nextbridge as a UI Engineer. Converting designs to Actual code in React js projects. I am comfortable with developing components and making them reusable. And I am working on the latest version of TailwindCSS with PostCSS for optimizing the unused CSS for better performance of the application.",
				role: "UI Engineer",
				type: "Work",
				startDate: "Sep 2021",
				endDate: "March 2022",
				roles: [
					{ description: "HTML5 · Cascading Style Sheets (CSS) · JavaScript · React.js · Tailwind CSS" }
				]
			},
			{
				name: "Codility Solutions",
				description: "My role is to write and style the front-End that meet the requirements of our mocks and fulfill our user stories. I also monitor and process pull requests for production deployments.",
				role: "Front End Developer",
				type: "Work",
				startDate: "June 2019",
				endDate: "Sep 2021",
				roles: [
					{ description: "HTML5 · Cascading Style Sheets (CSS) · Bootstrap · React.js · Tailwind CSS" }
				]
			},
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

	getters: {
		age: state => {
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
