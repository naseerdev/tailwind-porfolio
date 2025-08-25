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
				{ name: "HTML5", level: 100 },
				{ name: "CSS3", level: 100 },
				{ name: "JavaScript", level: 100 },
				{ name: "TypeScript", level: 100 },
				{ name: "React JS", level: 100 },
				{ name: "GraphQL", level: 100 },
				{ name: "REST API", level: 100 }
			],
			frameworks: [
				{ name: "Material UI 5", level: 100 },
				{ name: "Chakra UI", level: 100 },
				{ name: "TailwindCSS", level: 100 },
				{ name: "Bootstrap 5", level: 100 },
				{ name: "React Bootstrap", level: 100 },
				{ name: "Styled Components", level: 100 }
			],
			tools: [
				{ name: "Git" },
				{ name: "Jira" },
				{ name: "Apollo GraphQL" },
				{ name: "Cypress" },
				{ name: "React Hook Form" },
				{ name: "React Hooks" },
				{ name: "Context API" },
				{ name: "React-Router" }
			]
		},
		projects: [
			{
				name: "VendePro Portal",
				description: "Engineered a full-stack Vendor Management System using TypeScript, React, and Node.js. Managed vendor onboarding, verification, and profile management. Implemented secure multi-user authentication and role-based access control. Delivered an enterprise-grade UI/UX with responsive design, lazy loading, code splitting, and animations using Framer Motion.",
				link: null,
				icon: "leaf",
				developer: "Naseer Ahmed",
				tags: [
					{ name: "#TypeScript" },
					{ name: "#React" },
					{ name: "#Node.js" },
					{ name: "#Framer Motion" }
				]
			},
			{
				name: "Filtermart",
				description: "Developed a modern industrial e-commerce platform using TypeScript and React. Engineered a robust authentication system. Delivered a professional, responsive UI with a clean design.",
				link: null,
				icon: "leaf",
				developer: "Naseer Ahmed",
				tags: [
					{ name: "#TypeScript" },
					{ name: "#React" },
					{ name: "#E-commerce" }
				]
			},
			{
				name: "Puppy Inventory",
				description: "Built an admin dashboard using React, TypeScript, and Material UI for managing pet data. Utilized React Query for data fetching. Used React Hook Form for efficient and scalable form handling. Enabled dynamic report generation and export.",
				link: null,
				icon: "leaf",
				developer: "Naseer Ahmed",
				tags: [
					{ name: "#React" },
					{ name: "#TypeScript" },
					{ name: "#Material UI" },
					{ name: "#React Query" },
					{ name: "#React Hook Form" }
				]
			},
			{
				name: "Irsai",
				description: "Developed a comprehensive shippers/movers dashboard using TypeScript and Material UI, integrating with Shopify. Presented key modules including order and product management, POS integration, and real-time shipment tracking. Delivered a unified, intuitive interface with a modern design.",
				link: null,
				icon: "leaf",
				developer: "Naseer Ahmed",
				tags: [
					{ name: "#TypeScript" },
					{ name: "#Material UI" },
					{ name: "#Shopify" }
				]
			}
		], events: [
			{
				name: "VendePro",
				description: "Lahore, Pakistan",
				role: "Senior Software Engineer",
				type: "Work",
				startDate: "November 2023",
				endDate: "Present",
				roles: [
					{ description: "Led the architecture and development of stable React applications for a vendor management platform." },
					{ description: "Integrated Mapbox API for geolocation mapping, enhancing vendor search capabilities." },
					{ description: "Engineered and deployed authentication using Auth0 and JWT, ensuring data security and compliance." }
				]
			},
			{
				name: "A Tech Company",
				description: "Lahore, Pakistan (Hybrid)",
				role: "Frontend Developer",
				type: "Work",
				startDate: "March 2023",
				endDate: "September 2023",
				roles: [
					{ description: "Collaborated on delivering projects that enhanced user experience and met stakeholder needs." },
					{ description: "Improved code quality and maintainability through best practices." }
				]
			},
			{
				name: "Nextbridge Ltd",
				description: "Lahore, Punjab, Pakistan",
				role: "Frontend Engineer",
				type: "Work",
				startDate: "September 2021",
				endDate: "March 2022",
				roles: [
					{ description: "Experienced in using Tailwind CSS to improve application performance." },
					{ description: "Delivered high-quality products using modern tech stacks." }
				]
			},
			{
				name: "Candility Solutions",
				description: "Lahore, Punjab, Pakistan",
				role: "Frontend UI Developer",
				type: "Work",
				startDate: "June 2019",
				endDate: "September 2021",
				roles: [
					{ description: "Developed high-quality code for React, HTML, and CSS." },
					{ description: "Developed components that resulted in a 25% reduction in project timelines." },
					{ description: "Collaborated with cross-functional teams for the delivery of high-quality applications." },
					{ description: "Ensured accessibility and security standards were met." }
				]
			},
			{
				name: "University of South Asia, Lahore",
				description: "Bachelor’s in Computer Science", // Using description for degree name
				role: "Student", // Role as Student
				type: "Education", // New type
				startDate: "Unknown",
				endDate: "June 2020",
				roles: [] // No specific roles/bullet points for education
			},
			{
				name: "Nextbridge Institute",
				description: "MERN Stack Development",
				role: "Certified", // Role for certification
				type: "Certification",
				startDate: "",
				endDate: "2022",
				roles: []
			},
			{
				name: "Udemy",
				description: "The Complete JavaScript Course",
				role: "Certified", // Role for certification
				type: "Certification",
				startDate: "",
				endDate: "2021",
				roles: []
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
