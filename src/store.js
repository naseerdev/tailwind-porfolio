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
				name: "Happy Puppy Universe Dashboard",
				description: "Built in React, TypeScript, MUI 5 with REST API. Used React Hook Form for scalable form handling and integrated a PDF report generator.",
				link: null,
				icon: "leaf",
				startDate: "Sep 2023",
				endDate: "Jul 2024",
				developer: "Naseer Ahmed",
				tags: [
					{ name: "#React" },
					{ name: "#TypeScript" },
					{ name: "#MUI 5" },
					{ name: "#REST API" },
					{ name: "#React Hook Form" },
					{ name: "#PDF Generation" }
				]
			},
			{
				name: "Happy Puppy Universe Website",
				description: "Built with Astro JS, Solid JS, TailwindCSS. Improved SEO, fixed CLS issues, and optimized DOM rendering for better performance.",
				link: "https://happypuppyuniverse.com",
				icon: "leaf",
				startDate: "Jun 2023",
				endDate: "Jul 2024",
				developer: "Naseer Ahmed",
				tags: [
					{ name: "#Astro JS" },
					{ name: "#Solid JS" },
					{ name: "#TailwindCSS" },
					{ name: "#SEO" },
					{ name: "#Performance Optimization" }
				]
			},
			{
				name: "Imgry",
				description: "Built Canva-style graphic design app using Chakra UI, React TypeScript. Enabled creation of posts, presentations, videos, logos, etc.",
				link: null, // Assuming no specific live link for this version, or it's the same as the old one.
				icon: "leaf",
				startDate: "Apr 2022",
				endDate: "Jun 2022",
				developer: "Naseer Ahmed", // Updated from "Kwanso" as per instructions
				tags: [
					{ name: "#Chakra UI" },
					{ name: "#React" },
					{ name: "#TypeScript" },
					{ name: "#Graphic Design" }
				]
			}
		], events: [
			{
				name: "Happy Puppy Universe",
				description: "Remote (USA)",
				role: "Frontend Developer",
				type: "Work",
				startDate: "July 2023",
				endDate: "Present",
				roles: [
					{ description: "Built scalable admin dashboard using React, TypeScript, MUI 5, Supabase" },
					{ description: "Developed client website using Astro JS, Solid JS, TailwindCSS" },
					{ description: "Ensured clean, valid HTML/CSS, browser/device/OS compatibility" }
				]
			},
			{
				name: "Kwanso",
				description: "Lahore, Pakistan",
				role: "Frontend Developer",
				type: "Work",
				startDate: "March 2022",
				endDate: "Nov 2023",
				roles: [
					{ description: "Led frontend for Helmer, Uptok, Mindcette, and Imgry" },
					{ description: "Used React, TypeScript, MUI 5, GraphQL" },
					{ description: "Wrote 2000+ lines of code in a 10,000+ line codebase and refactored code" }
				]
			},
			{
				name: "Nextbridge Ltd",
				description: "Lahore, Pakistan",
				role: "Frontend UI Engineer",
				type: "Work",
				startDate: "Sep 2021",
				endDate: "Mar 2022",
				roles: [
					{ description: "Converted designs to reusable components in ReactJS" },
					{ description: "Used TailwindCSS and PostCSS to optimize CSS and performance" }
				]
			},
			{
				name: "Codility Solutions",
				description: "Lahore, Pakistan",
				role: "Frontend UI Developer",
				type: "Work",
				startDate: "Jun 2019",
				endDate: "Sep 2021",
				roles: [
					{ description: "Built ReactJS + Rails frontends from UI/UX designs" },
					{ description: "Created reusable libraries (25% time reduction), scored 90%+ in reviews" },
					{ description: "Delivered accessible, secure, cross-browser-compatible apps" }
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
