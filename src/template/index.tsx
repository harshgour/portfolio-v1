import { ThemeProviderProps } from "../types";
import Left from "./Left";
import Main from "./Main";
import Right from "./Right";

import "./index.scss";
import LeftFooter from "../molecules/LeftFooter";
import ReactVisibilitySensor from "react-visibility-sensor";
import React from "react";
import { getExperiences } from "../content/experience";
import { getProjects } from "../content/projects";
import { getSkills } from "../content/skills";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FcAndroidOs, FcGlobe, FcPhoneAndroid } from "react-icons/fc";
import { FadeIn } from "../Animations/fadeIn";
import Masonry from "react-masonry-css";
import { FaGhost } from "react-icons/fa";
import { FlipIn } from "../Animations/flipIn";

type LayoutProps = ThemeProviderProps & {};

type VisibileProps = {
	skills: Boolean;
	experience: Boolean;
	projects: Boolean;
};

const headingsList = [
	{
		id: "01",
		name: "skills",
	},
	{
		id: "02",
		name: "experience",
	},
	{
		id: "03",
		name: "projects",
	},
];

const Layout = (props: LayoutProps) => {
	const [visible, setVisible] = React.useState<VisibileProps>({
		skills: true,
		experience: false,
		projects: false,
	});
	const [windowHeight, setWindowHeight] = React.useState<any>(0);
	const [data, setData] = React.useState<any>({
		skills: [],
		experience: [],
		projects: [],
	});

	React.useEffect(() => {
		const skills: Array<Object | null> = getSkills();
		const experience: Array<Object | null> = getExperiences();
		const projects: Array<Object | null> = getProjects();
		setData((prevSkills: any) => {
			return {
				skills,
				experience,
				projects,
			};
		});
		console.log(data);
	}, []);

	React.useEffect(() => {
		setWindowHeight(window.innerHeight);
	});

	React.useEffect(() => {
		eval(
			`try {TagCanvas.Start('myCanvas', '', {textColour: '${props.theme.fontPrimary}',outlineColour: '#0000', imageMode: "both", imagePosition:"top", initial: [0.15,-0.05], fadeIn: 3000, wheelZoom: false, pinchZoom: true, shuffleTags: true, frontSelect: true, textHeight: 18, reverse: true, depth: 0.8,maxSpeed: 0.04, minSpeed: 0.02});} catch(e) {document.getElementById('myCanvasContainer').style.display = 'none';}`,
		);
	});
	return (
		<Main>
			<Left>
				<section className='mx-4 sticky top-0 overflow-y-auto flex flex-col items-start justify-center pt-24 md:pt-0 md:h-screen'>
					<h1 className='text-[36pt] mb-6 font-bold leading-[36pt]'>
						Hello, World!
					</h1>
					<h1 className='text-[36pt] mb-6 font-bold leading-[36pt]'>
						I'm Harsh.
					</h1>
					<div
						className='bio mr-10 mb-8 text-[12pt] font-medium'
						style={{ color: props.theme.fontSecondary }}>
						<p style={{ marginBottom: "5px" }}>
							A Fullstack developer specialised in front-end development using
							JS frameworks such as React, Next, Vue. I've been doing web
							development for past 2-3 years.
						</p>
						<p style={{ marginBottom: "5px" }}>
							Computer Science Engineering Graduate from{" "}
							<a
								href='https://www.srmist.edu.in/'
								target='_blank'
								className='underline'
								style={{ color: props.theme.fontPrimary }}>
								SRMIST
							</a>
							, India. Currently learning the ins and outs of Web as well as App
							Development.{" "}
						</p>
						I mostly do frontend development with React/Vue and related
						frameworks and specialised in developing elegant, pixel-perfect UIs.
						I also have keen interest in Blockchain and Web3 development
					</div>
					<div className='headings mb-4 text-[11pt] hidden sm:flex flex-col justify-start items-start'>
						{headingsList.map((heading) => {
							return (
								<a
									key={heading.name}
									className='flex flex-row items-center justify-start mb-4 no-underline'
									style={{
										color: (visible as any)[heading.name]
											? props.theme.fontPrimary
											: props.theme.fontSecondary,
									}}
									id={`link-${heading.name}`}
									href={`#${heading.name}`}>
									<span>{heading.id}&nbsp;</span>
									<span
										className='divider mx-4 border-b border-solid'
										style={{
											width: (visible as any)[heading.name] ? "3.5rem" : "2rem",
											color: (visible as any)[heading.name]
												? "#ffffff"
												: "rgb(165, 165, 167)",
										}}></span>
									<span className='uppercase'>{heading.name}</span>
								</a>
							);
						})}
					</div>
					<LeftFooter />
				</section>
			</Left>
			<Right>
				<h1
					id='skills'
					className='mt-16 mb-6 font-medium text-[26pt] leading-[26pt]'>
					Skills
				</h1>
				<ReactVisibilitySensor
					partialVisibility
					onChange={(isVisible: Boolean) => {
						setVisible((visible) => {
							return { ...visible, skills: isVisible };
						});
					}}
					offset={{
						top: windowHeight / 3,
						bottom: windowHeight / 3,
					}}>
					<section className='skills relative w-full'>
						<canvas width='720' height='720' id='myCanvas'>
							<p>
								Anything in here will be replaced on browsers that support the
								canvas element
							</p>
							<ul>
								{data.skills.map((skill: any) => (
									<a
										key={skill.name}
										href='#'
										id={skill.name}
										onClick={(e) => {
											e.preventDefault();
											eval(
												`TagCanvas.TagToFront("myCanvas", {id: "${skill.name}", active: 1});`,
											);
										}}>
										<li>
											<img
												width='60'
												height='60'
												src={`/images/svg/${skill.image}${
													props.theme.type === "light" ? "-light" : ""
												}.svg`}
											/>
											{skill.name}
										</li>
									</a>
								))}
							</ul>
						</canvas>
					</section>
				</ReactVisibilitySensor>
				<h1
					id='experience'
					className='mt-16 mb-6 font-medium text-[26pt] leading-[26pt]'>
					Experience
				</h1>
				<ReactVisibilitySensor
					partialVisibility
					onChange={(isVisible: Boolean) => {
						setVisible((visible) => {
							return { ...visible, experience: isVisible };
						});
					}}
					offset={{
						top: windowHeight / 3,
						bottom: windowHeight / 3,
					}}>
					<section>
						{data.experience.map((experience: any) => (
							<FadeIn
								from='bottom'
								positionOffset={100}
								triggerOffset={20}
								key={experience.name}>
								<article
									className='experience-article p-8 mb-2 relative rounded-lg shadow-xl'
									style={{ backgroundColor: props.theme.backgroundSecondary }}>
									<header className='uppercase mb-2 text-[10pt] font-semibold'>
										{experience.type}
									</header>
									<div className='mb-2 flex items-start justify-start'>
										<img
											src={
												`/images/experience/${experience.image}` ||
												experience.image
											}
											className='h-[28pt]'
										/>
										<h2 className='ml-2 leading-[25pt] font-bold text-[18pt]'>
											{experience.name}
										</h2>
									</div>
									<header
										className='date'
										style={{ color: props.theme.fontSecondary }}>
										{experience.duration}
									</header>
									<ul
										className='pl-4 m-0 text-[11pt] list-disc'
										style={{ color: props.theme.fontSecondary }}>
										{experience.description.map((sentence: any) => (
											<li key={sentence} className='mb-2 last:mb-0'>
												{sentence}
											</li>
										))}
									</ul>
									<a
										href={experience.link}
										target='_blank'
										className='absolute right-0 top-0 leading-5 mt-8 mr-8'
										style={{ color: props.theme.fontSecondary }}>
										<HiOutlineExternalLink size={18} />
									</a>
								</article>
							</FadeIn>
						))}
					</section>
				</ReactVisibilitySensor>
				<h1
					id='projects'
					className='mt-16 mb-6 font-medium text-[26pt] leading-[26pt]'>
					Projects
				</h1>
				<ReactVisibilitySensor
					partialVisibility
					onChange={(isVisible: Boolean) => {
						setVisible((visible) => {
							return { ...visible, projects: isVisible };
						});
					}}
					offset={{
						top: windowHeight / 3,
						bottom: windowHeight / 3,
					}}>
					<Masonry
						breakpointCols={{ default: 2, 916: 1, 749: 2, 529: 1 }}
						className='my-masonry-grid mb-5'
						columnClassName='my-masonry-grid_column'>
						{data.projects.map((project: any) => (
							<FlipIn triggerOffset={20} key={project.name}>
								<article
									className='projects overflow-hidden rounded-lg mb-2 relative p-4 before:p-[50%] before:block before:content-[""]'
									style={{ backgroundColor: props.theme.backgroundSecondary }}>
									<div className='container absolute top-0 bottom-0 left-0 right-0 p-4 flex flex-col justify-start inset-0'>
										<header
											className='platform uppercase text-[10pt]'
											style={{ color: props.theme.fontPrimary }}>
											{project.platform === "web" && <FcGlobe size={24} />}
											{project.platform === "android" && (
												<FcAndroidOs size={26} />
											)}
											{project.platform === "mobile" && (
												<FcPhoneAndroid size={24} />
											)}
											{project.platform === "game" && (
												<FaGhost color='#FF3100' size={22} />
											)}
										</header>
										<header
											className='stack text-[13pt]'
											style={{ color: props.theme.fontSecondary }}>
											{project.stack}
										</header>
										<p className='mt-4 text-[14pt] pr-14 sm:hidden md:block lg:hidden'>
											{project.description}
										</p>
										<div className='spacer flex-1'></div>
										<div className='links text-[10pt] flex flex-row items-center justify-start absolute rotate-90 right-0 bottom-0'>
											{project.source && (
												<a
													href={project.source}
													className='no-underline flex items-center justify-start transition-all ml-7 hover:-translate-x-[8px]'
													style={{ color: props.theme.fontSecondary }}>
													Source <HiOutlineExternalLink />
												</a>
											)}
											{project.demo && (
												<a
													href={project.demo}
													className='no-underline flex items-center justify-start transition-all ml-7 hover:-translate-x-[8px]'
													style={{ color: props.theme.fontSecondary }}>
													Visit <HiOutlineExternalLink />
												</a>
											)}
										</div>
										<div className='footer text-[18pt] leading-[18pt] pr-8'>
											{project.name}
										</div>
									</div>
								</article>
							</FlipIn>
						))}
					</Masonry>
				</ReactVisibilitySensor>
				<p id='footer' className='mt-6 mb-6 font-medium text-center'>
					Made with &hearts; by Harsh <br /> Design inspired by{" "}
					<a href='https://sarahdayan.dev/' target='_blank'>
						Sarah Dayan
					</a>
				</p>
			</Right>
		</Main>
	);
};

export default Layout;
