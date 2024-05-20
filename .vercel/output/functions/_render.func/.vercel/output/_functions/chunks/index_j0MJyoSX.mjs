import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CnyVfoUF.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Experience hands-on learning like never before! Our VEX IQ Learning Program engages students in exciting projects and challenges, igniting their curiosity and fostering creativity. <br>With collaborative environments and expert guidance, students embark on a journey of exploration and discovery.</p>";

				const frontmatter = {"title":"How It Works","page_title":"Explore STEM Learning at Stembotics","perfomance":[{"title":"Start Learning anytime from May to July","description":"Dive into exciting projects and challenges designed to ignite curiosity and foster creativity.","image":"/images/how-it-work/image-1.png"},{"title":"Start Preparing for Competitions and Compete","description":"Experience the thrill of competition as you test your skills against teams from around the region.","image":"/images/how-it-work/market-professionals.png"},{"title":"Do it again","description":"Hone in your robotics skills every year and grow with your peers, achiving new highs every time.","image":"/images/how-it-work/awards.png"}],"our_works":[{"title":"VEX IQ Learning","image":"/images/how-it-work/results.png","list":["Experience hands-on learning like never before!","Work alongside peers, sharing ideas and collaborating on solutions to real-world problems.","Benefit from expert instruction and mentorship, guiding you through every step of your learning journey."]},{"title":"VEX IQ Competitive","image":"/images/how-it-work/image-2.png","list":["Join us for a thrilling adventure in robotics competition! In our VEX IQ Competitive Program, students test their skills against teams from around the region, developing strategic thinking and teamwork abilities along the way.","Develop strategic thinking and problem-solving abilities through challenging robotics competitions.","Learn the importance of teamwork and communication as you collaborate with your peers to achieve success."]},{"title":"FLL Plan","image":"/images/how-it-work/image-3.png","list":["Unlock your potential with our FLL Plan Program!","Showcase your ideas with confidence through effective communication and presentation skills."]}]};
				const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/how-it-works/index.md";
				const url = undefined;
				function rawContent() {
					return "Experience hands-on learning like never before! Our VEX IQ Learning Program engages students in exciting projects and challenges, igniting their curiosity and fostering creativity. <br>With collaborative environments and expert guidance, students embark on a journey of exploration and discovery.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
