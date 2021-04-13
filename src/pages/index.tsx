import React from "react"
import Layout from "../components/layout"
import * as styles from './home.module.scss'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
    return (
		<Layout>
			<div className={styles.page}>
				<img src="/images/home/background.png" className={styles.background} />
				<article className={styles.hero} id="contact">
					<div className={styles.heroContent}>
						<div>
							<p>Hello there,</p>
							<h1>Let's talk <FontAwesomeIcon icon={faLongArrowAltRight} /><br/> Business</h1>
						
							
						</div>

						<div>
							<a href="#">
								<FontAwesomeIcon icon={faEnvelope} />Send me a email
							</a>
							
							<a href="#">
								<FontAwesomeIcon icon={faGithub} />Look at my Github
							</a>
						</div>
					</div>
				</article>

				<article className={styles.about} id="about">
					<div className={styles.aboutContent}>
						<div>
							<img src="/images/home/placeholder2.png" alt="about" />
						</div>
						
						<div>
							<h1>About me</h1>

							<p>My name is Omar Villalobos. I am an eight-teen year's olds junior front-end developer and student of Global Business Management based in Buenos Aires, Argentina. I am available to use a variety of front-end programming languages with the purpose of creating user-friendly pages with Design mobile-based features, and I am proficient with Javascript frameworks such as ReactJS, GatsbyJS, and NextJS, also I can work with visual frameworks such as Figma in order to build high-quality, mockups and design prototypes. As a secondary rule, I am capable to help the organization with my Business Management skills.</p>

							<p>TL:DR: Junior front end developer, business management student, visual frameworks</p>
						</div>
					</div>
				</article>
				
				<article className={styles.services} id="services">
					<div className={styles.servicesContent}>
						<h1>Services</h1>

						<div>
							<img src="/images/home/html.png" alt="html" />
						</div>
						
						  <div>
							<img src="/images/home/css.png" alt="css" />
						</div>
						
						<div>
							<img src="/images/home/js.png" alt="js" />
						</div>
						
						<div>
							<img src="/images/home/sass.png" alt="sass" />
						</div>
						
						<div>
							<img src="/images/home/react.png" alt="react" />
						</div>
						
						<div>
							<img src="/images/home/gatsby.png" alt="gatsby" />
						</div>

						<div>
							<img src="/images/home/next.png" alt="next" />
						</div>

						<div>
							<img src="/images/home/ts.png" alt="ts" />
						</div>

					</div>
				</article>

				<article className={styles.external}>
					<div className={styles.externalContent}>
						<h1>Check this page in...</h1>

						<a href="https://www.figma.com/proto/MT84iRflR8mRWyHW617Ukq/Omar-Villalobos?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1">
							<FontAwesomeIcon icon={faEnvelope} />Look at Figma
						</a>
						
						<a href="https://wwww.github.com">
							<FontAwesomeIcon icon={faGithub} />Look at Github
						</a>					
					</div>
				</article>

			</div>
		</Layout>
    )
}
