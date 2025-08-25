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
				", Senior Software Engineer at Osol specializing in React and TypeScript, with 5+ years of experience in Frontend Development. Always hungry for learning new technologies & skills and to take on challenges. Proficient in HTML5, CSS3, JavaScript, React Js, TypeScript, GraphQL, Material UI 5, Chakra UI, TailwindCss, Bootstrap 5, React Bootstrap, and Next.js",
		},
		technologies: {
			programming: [
				{ name: "HTML5", level: 100 },
				{ name: "CSS3", level: 100 },
				{ name: "JavaScript", level: 100 },
				{ name: "TypeScript", level: 100 },
				{ name: "React JS", level: 100 },
				{ name: "Next.js", level: 100 },
				{ name: "GraphQL", level: 100 },
				{ name: "REST API", level: 100 }
			],
			frameworks: [
				{ name: "Material UI 5", level: 100 },
				{ name: "Chakra UI", level: 100 },
				{ name: "TailwindCSS", level: 100 },
				{ name: "Bootstrap 5", level: 100 },
				{ name: "React Bootstrap", level: 100 },
				{ name: "Styled Components", level: 100 },
				{ name: "shadcn/ui", level: 100 },
				{ name: "Radix UI", level: 100 }
			],
			tools: [
				{ name: "Git" },
				{ name: "Jira" },
				{ name: "Apollo GraphQL" },
				{ name: "Cypress" },
				{ name: "React Hook Form" },
				{ name: "React Hooks" },
				{ name: "Context API" },
				{ name: "React-Router" },
				{ name: "Mapbox API" },
				{ name: "PostCSS" },
				{ name: "Zustand" },
				{ name: "React Query" },
				{ name: "Zod" },
				{ name: "Vite" }
			]
		},
		projects: [
			{
				name: "VendrPro Portal - Vendor Management System",
				description: "Engineered a full-stack Vendor Management System using React 18, TypeScript, Vite, Material UI, Zustand, and React Query, streamlining vendor onboarding, verification, and profile management. Implemented secure multi-user authentication and role-based access control, including JWT-based sessions, lock-screen idle detection, and robust password management workflows. Developed advanced onboarding workflows with multi-step wizards, dynamic validation (Zod + React Hook Form), file/document uploads, OCR integration, and broker portal collaboration features. Delivered enterprise-grade UI/UX with responsive Material UI design, reusable components, Framer Motion animations, and performance optimizations (lazy loading, code splitting, caching).",
				link: "https://vendor.vendrpro.com/",
				icon: "leaf",
				developer: "Naseer Ahmed",
				tags: [
					{ name: "#React 18" },
					{ name: "#TypeScript" },
					{ name: "#Vite" },
					{ name: "#Material UI" },
					{ name: "#Zustand" },
					{ name: "#React Query" },
					{ name: "#Zod" },
					{ name: "#Framer Motion" }
				]
			},
			{
				name: "Filtermart",
				description: "Developed a modern industrial e-commerce platform using Next.js 15, React 19, TypeScript, Tailwind CSS, and Zustand, enabling advanced product search across 1.1M+ filter references. Engineered a robust authentication system with secure login, registration, password reset, and email verification workflows, ensuring user data protection and access control. Delivered a professional, responsive UI/UX with reusable components (Radix UI), schema-based form validation (Zod), multi-language support, and optimized mobile-first design.",
				link: "https://app.qa.filtermart.com/",
				icon: "leaf",
				developer: "Naseer Ahmed",
				tags: [
					{ name: "#Next.js 15" },
					{ name: "#React 19" },
					{ name: "#TypeScript" },
					{ name: "#Tailwind CSS" },
					{ name: "#Zustand" },
					{ name: "#Radix UI" },
					{ name: "#Zod" },
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
				name: "Irsal Dashboard",
				description: "The Shipment Management Dashboard built with React, TypeScript, and Material UI 5, is a frontend-focused platform for managing shipments, orders, products, and payments. It includes Shopify integration and supports carriers like TCS, SpeedEx, and FedEx. The dashboard offers modules for order and product management, POS for in-store sales, and real-time shipment tracking. It provides a unified, intuitive interface with a modern design, ensuring efficient business operations and a seamless user experience.",
				link: "https://irsal.pk/",
				icon: "leaf",
				developer: "Naseer Ahmed",
				tags: [
					{ name: "#React.js" },
					{ name: "#TypeScript" },
					{ name: "#REST APIs" },
					{ name: "#Front-end Development" },
					{ name: "#Material-UI" },
					{ name: "#Shopify" },
					{ name: "#Shipment Tracking" }
				]
			}
		], 		events: [
			{
				name: "Osol",
				description: "Lahore, Punjab, Pakistan",
				role: "Senior Software Engineer",
				type: "Work",
				startDate: "September 2024",
				endDate: "Present",
				roles: [
					{ description: "Led the architecture and development of scalable React applications for a B2B vendor management platform, VendrPro." },
					{ description: "Mentored a team of frontend developers, conducting code reviews and providing technical guidance on best practices." },
					{ description: "Integrated Mapbox API for dynamic geo-location mapping, enhancing vendor service management capabilities." }
				]
			},
			{
				name: "Kwanso",
				description: "Lahore, Punjab, Pakistan",
				role: "Frontend Developer",
				type: "Work",
				startDate: "March 2022",
				endDate: "September 2024",
				roles: [
					{ description: "Developed and integrated user-friendly web applications using ReactJs, TypeScript, and Material UI 5." },
					{ description: "Ensured high code quality and maintainability through best practices and robust testing." },
					{ description: "Collaborated with cross-functional teams to deliver projects that enhance user experience and meet stakeholder needs." }
				]
			},
			{
				name: "Nextbridge Ltd.",
				description: "Lahore, Punjab, Pakistan",
				role: "Frontend Developer",
				type: "Work",
				startDate: "September 2021",
				endDate: "March 2022",
				roles: [
					{ description: "Developed reusable components for ReactJS projects, enhancing code efficiency and maintainability." },
					{ description: "Utilized TailwindCSS and PostCSS to optimize CSS, significantly improving application performance." },
					{ description: "Delivered high-quality web applications, contributing to a seamless user experience and increased client satisfaction." }
				]
			},
			{
				name: "Codility Solutions",
				description: "Lahore, Punjab, Pakistan",
				role: "Frontend Developer",
				type: "Work",
				startDate: "June 2019",
				endDate: "September 2021",
				roles: [
					{ description: "Translated UI/UX designs into high-quality code for ReactJS and Rails projects using HTML and CSS." },
					{ description: "Developed reusable components and libraries, reducing development time by 25% for future projects." },
					{ description: "Maintained exceptional code quality with a review score of 90% or higher." },
					{ description: "Collaborated with cross-functional teams to deliver high-quality web applications on time." }
				]
			},
			{
				name: "University of South Asia",
				description: "Bachelor's degree, Computer Science",
				role: "Student",
				type: "Education",
				startDate: "June 2016",
				endDate: "June 2020",
				roles: []
			},
			{
				name: "MERN Stack Development",
				description: "Nextbridge Institute - Full Stack Development Certification",
				role: "Certified",
				type: "Certification",
				startDate: "",
				endDate: "December 2021",
				roles: []
			},
			{
				name: "Bootstrap From Scratch - Fast and Responsive Web Development",
				description: "HTML and CSS for Beginners - Build a Website & Launch ONLINE",
				role: "Certified",
				type: "Certification",
				startDate: "",
				endDate: "",
				roles: []
			},
			{
				name: "The Complete JavaScript Course 2022: From Zero to Expert!",
				description: "Udemy - JavaScript Mastery Course",
				role: "Certified",
				type: "Certification",
				startDate: "",
				endDate: "2022",
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
