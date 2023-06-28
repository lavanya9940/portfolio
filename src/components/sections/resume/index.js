import Masonry from "react-masonry-css";
import "./resume.css"

function Resume(props) {
    const breakpointColumnsObj = {
        default: 2,
        767: 1,
    };
    return (
        <>
            <section className="container" id="resume">
                <div className="section-title">
                    <div className="font-maitree">My <span className="text-blue font-maitree">Resume</span></div>
                    <p>
                        <a className='text-blue' href={process.env.PUBLIC_URL + "/docs/premkumar-full-stack-dev.pdf"} target="_blank" rel="noreferrer">Click here </a>to access the PDF version of my resume.
                    </p>
                </div>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="resume-body"
                    columnClassName="resume-body-item">
                    <div id="sumary">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item">
                            <h4>Premkumar Nunna</h4>
                            <p>
                                Highly skilled Full Stack Developer with 2 years of expertise in Django, React, Docker,
                                AWS, CI/CD, and custom solutions, designing and implementing end-to-end web
                                applications. Skilled in deploying scalable web apps and setting up pipelines using
                                Jenkins and GitLab. Passionate about delivering high-quality results. Seeking a
                                challenging position to utilize my technical expertise and creativity in delivering robust
                                and scalable solutions.
                            </p>
                            <ul>
                                <li>Visakhapatnam-530017, India</li>
                                <li>(+91) 9553261501</li>
                                <li><a href="mailto:premkumarnunna@gmail.com">premkumarnunna@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="education">
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Master of Computer Science &amp; Data Analytics</h4>
                            <h5>2019 - 2021</h5>
                            <p>
                                <em>Central University of Rajasthan, Ajmer</em>
                            </p>
                            <ul>
                                I successfully completed my Master's degree in Big Data Analytics, achieving a commendable CGPA of 7.22.
                                Throughout my academic journey, I excelled in all the program's courses and consistently demonstrated my dedication
                                and passion for the subject matter. In addition to my coursework, I actively participated in numerous workshops
                                focusing on artificial intelligence (AI) and machine learning, broadening my knowledge and practical skills in
                                these cutting-edge fields. To further enhance my expertise, I undertook the development of several mini projects
                                and task-based assignments, all geared towards the advancement of AI and machine learning. Furthermore,
                                I dedicated significant time to thoroughly studying and analyzing relevant research papers published in the
                                AI domain, enabling me to stay updated with the latest advancements and contribute to the field of computer science.
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Bachelor of Science in Computer Science</h4>
                            <h5>2016 - 2019</h5>
                            <p>
                                <em>Silver Jubilee Govt Degree College, Kurnool</em>
                            </p>
                            <ul>
                                <li>
                                    I have successfully graduated with a Bachelor's degree, achieving a commendable CGPA of 7.5.
                                    Throughout my academic journey, I not only excelled in my curricular activities but also actively participated in various
                                    extracurricular endeavors. One notable accomplishment was the successful development of a website for the inventory management
                                    of the Physical Education department. This website received high praise from the department's head, demonstrating my ability
                                    to apply my skills in a practical setting.
                                </li>
                                <li>
                                    In addition to my academic achievements, I actively participated in numerous college programs that significantly enriched
                                    my knowledge and understanding of various subjects. These programs provided me with valuable exposure to diverse topics
                                    and allowed me to enhance my overall skill set.
                                </li>
                                <li>
                                    Furthermore, I enthusiastically served as a volunteer in the National Cadet Corps (NCC), contributing my time and
                                    efforts to several locations. This experience not only helped me develop a strong sense of discipline and leadership but
                                    also fostered a deep sense of community engagement and service.
                                </li>
                                <li>
                                    Additionally, I had the honor of representing Rayalaseema University at the South Zone Inter-University competition,
                                    which further highlighted my dedication and commitment to my academic pursuits.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="experience">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Senior Software Developement Engineer</h4>
                            <h5>2022 - Present</h5>
                            <p>
                                <em>Cloudearl Sol Pvt Ltd, Visakhapatnam, India </em>
                            </p>
                            <ul>
                                <li>
                                    Successfully led the deployment and release of multiple web applications on
                                    AWS, utilizing Docker, Jenkins, and robust testing methodologies.

                                </li>
                                <li>
                                    Implemented scalable infrastructure on AWS, leveraging services such as EC2,
                                    S3, RDS, and CloudFront, ensuring high availability and performance.
                                </li>
                                <li>
                                    Automated build, test, and deployment processes using Jenkins, resulting in faster
                                    and more efficient releases and enabling continuous integration and delivery.
                                </li>

                                <li>
                                    Implemented comprehensive security measures, addressing common
                                    vulnerabilities and ensuring the protection of web applications from threats such
                                    as XSS, CSRF, and SQL injection.
                                </li>
                                <li>
                                    Actively monitored and optimized application performance, scalability, and
                                    availability, identifying and resolving issues to minimize downtime and enhance
                                    user experience.
                                </li>
                                <li>
                                    Mentored and coached junior developers, fostering a culture of collaboration and
                                    continuous improvement, while adhering to industry best practices and standards
                                </li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Software Developer</h4>
                            <h5>2021 - 2022</h5>
                            <p>
                                <em>Cloudearl Sol Pvt Ltd, Visakhapatnam, India </em>
                            </p>
                            <ul>
                                <li>
                                    Collaborated with a team of developers to build robust web applications using
                                    Django and React.js, ensuring high-quality code and adherence to best practices.
                                </li>
                                <li>
                                    Developed and maintained the back-end using Django, implementing models,
                                    views, and APIs to enable seamless data flow and functionality. Used PostgreSQL
                                    as the database to store and manage application data.
                                </li>
                                <li>
                                    Created responsive user interfaces using React.js, HTML, CSS, and JavaScript,
                                    enhancing the user experience and ensuring cross-browser compatibility.
                                </li>
                                <li>
                                    Utilized the features of Git for version controlling, enabling effective collaboration
                                    and ensuring a streamlined development workflow within the team. Worked
                                    closely with teammates, actively participating in code reviews, conducting pair
                                    programming, and providing support to maintain code quality and improve overall
                                    application performance.
                                </li>
                                <li>
                                    Engaged in Agile development methodologies, participating in sprint planning,
                                    daily stand-ups, and retrospectives to ensure effective project management and
                                    timely delivery.
                                </li>
                                <li>
                                    Collaborated with UI/UX designers to translate design mockups into functional
                                    user interfaces, ensuring a seamless and visually appealing user experience.
                                </li>
                                <li>
                                    Conducted testing and debugging to identify and resolve software defects,
                                    ensuring the stability and reliability of the web applications.
                                </li>
                                <li>
                                    Continuously learned and explored new technologies and frameworks to enhance
                                    skills and contribute to the improvement of the development process.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="interest">
                        <h3 className="resume-title">Interests </h3>
                        <div className="resume-item">
                            <h4>Professional Interests</h4>
                            <ul>
                                <li>
                                    DevOps, Cloud Security.
                                </li>
                                <li>
                                    Artificial  Intelligence  and  MachineLearning.
                                </li>
                                <li>
                                    Web and Software Development.
                                </li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Personal Interests</h4>
                            <ul>
                                <li>
                                    Skating.
                                </li>
                                <li>
                                    Playing Outdoor Games (Badminton, Basket Ball).
                                </li>
                                <li>
                                    Web surfing, Reading Books.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div></div>
                    <div id="soft-skills">
                        <h3 className="resume-title">Soft Skills </h3>
                        <div className="resume-item">
                            <ul>
                                <li>
                                    Excellent in verbal and written communication.
                                </li>
                                <li>
                                    Effective and Proficient in ProblemSolving for real world Problems.
                                </li>
                                <li>
                                    Adaptability to Change and Quick to learn new tools, frameworks, and methodologies to stay up to date.
                                </li>
                                <li>
                                    Strong Time Management in completeing the tasks.
                                </li>
                                <li>
                                    Keen observation to ensure the quality of work and error free code.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div></div>
                    <div id="languages">
                        <h3 className="resume-title">Languages Known </h3>
                        <div className="resume-item">
                            <ul>
                                <li>
                                    Telugu, Hindi, English
                                </li>
                            </ul>
                        </div>
                    </div>
                </Masonry>
            </section >

        </>
    );
}

export default Resume;
