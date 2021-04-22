import React from "react"
import Layout from "../components/layout"
import * as styles from './home.module.scss'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons"

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
							<a href="mailto:omar@ignitionwolf.com">
								<FontAwesomeIcon icon={faEnvelope} />Send me a email
							</a>
							
							<a href="https://github.com/omarvillam">
								<FontAwesomeIcon icon={faGithub} />Check my Github
							</a>
						</div>
					</div>
				</article>

				<article className={styles.about} id="about">
					<div className={styles.aboutContent}>
						<div>
							<img src="/images/home/about.svg" alt="about" />
						</div>
						
						<div>
							<h1>About me</h1>

							<p>My name is Omar Villalobos, I am a front-end developer with over 2 years of experience and I am available to use a variety of front-end technologies with the purpose of creating user-friendly pages with mobile features. I am proficient in JavaScript frameworks with TypeScript such as ReactJS, Redux, GatsbyJS, and NextJS, also I can work with prototyping tools for UI/UX in order to build high-quality mockups. Also, I am studying Global Business Management, I am capable to help the organization with my Business Management skills in lines of code</p>

							<p>TL:DR: Front end developer, React, Redux, Gatsby, Next. Prototyping tools and business management skills</p>
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
							<FontAwesomeIcon icon={faFigma} />Look at Figma
						</a>
						
						<a href="https://github.com/omarvillam/omarvillam">
							<FontAwesomeIcon icon={faGithub} />Look at Github
						</a>					
					</div>
				</article>

			</div>
		</Layout>
    )
}
