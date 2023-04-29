import "./Education.css";
import AccordionSection from '../components/AccordionSection';
import Button from '../components/Button';

import ncsu_logo from '../image/university-Hallmark-red-no-bkgd-rgb.jpg';
import ucb_logo from '../image/UC_Berkeley_Seal_80px.png';
import neu_logo from '../image/neu_logo.png';


function Education() {
    return (
        <div className="education">

            <div className="education-cards">
                <div className="education-card">
                    <img className="card-img" src={ncsu_logo} alt="NCSU Logo" />
                    <h3 className="card-title">North Carolina State University</h3>
                    <h4 className="card-subtitle">Bachelor of Science - Mechanical Engineering</h4>
                    <p className="card-content">
                        North Carolina State University's College of Engineering is a highly respected and nationally recognized institution that has been at the forefront of engineering education and research for more than a century.
                        Founded in 1887 as a land-grant institution, NC State has a long tradition of excellence in engineering and has consistently ranked among the top engineering schools in the United States.
                    </p>

                    <p className="card-content">
                        The College of Engineering at NC State offers a wide range of undergraduate and graduate programs in various engineering disciplines, including chemical, civil, electrical, computer, mechanical, and aerospace engineering, among others.
                        With over 9,000 students and 200 faculty members, the College is one of the largest and most diverse engineering schools in the country.
                    </p>

                    <p className="card-content">
                        The College of Engineering is committed to providing students with a rigorous and challenging education that emphasizes both theory and practical application.
                        Students are encouraged to work on real-world engineering projects through internships, co-op programs, and research opportunities with faculty members.
                    </p>

                    <p className="card-content">
                        The College of Engineering is also known for its world-class research programs, which are focused on addressing some of the most pressing challenges facing society today, including renewable energy, cybersecurity, and advanced manufacturing.
                        The College's research efforts are supported by a number of state-of-the-art research facilities and centers, including the NSF Engineering Research Center for Advanced Self-Powered Systems of Integrated Sensors and Technologies (ASSIST) and the FREEDM Systems Center.
                    </p>

                    <p className="card-content">
                        NC State University's College of Engineering is an outstanding institution that provides students with an exceptional education and prepares them for successful careers in engineering and related fields.
                    </p>

                    <Button
                        className="card-button"
                        aria-label="learn more nc state"
                        type="button"
                        visual="link"
                        onClick={() => window.open('https://www.ncsu.edu', '_blank', 'noopener noreferrer')}
                    >
                        Learn More about NC State
                    </Button>

                    <p className="card-content">
                        Please see the coresponding courses I took in following.
                    </p>

                    <AccordionSection aria-label="learn more about course" title="MAE 201 & 302  Engineering Thermodynamics">
                        Introduction to the concept of energy and the laws governing the transfers and transformations of energy. Emphasis on thermodynamic properties and the First and Second Law analysis of systems and control volumes. Integration of these concepts into the analysis of basic power cycles is introduced.
                        Continuation of Engineering Thermodynamics with emphasis on the analysis of power and refrigeration cycles and the application of basic principles to engineering problems with systems involving mixtures of ideal gases, psychrometrics, nonideal gases, chemical reactions, combustion, chemical equilibrium cycle analysis, and one-dimensional compressible flow.
                    </AccordionSection>

                    <AccordionSection aria-label="learn more about course" title="MAE 308  Fluid Mechanics">
                        Development of the basic equations of fluid mechanics in general and specialized form. Application to a variety of topics including fluid statics; inviscid, incompressible fluid flow; design of Fluid dynamic system.
                    </AccordionSection>

                    <AccordionSection aria-label="learn more about course" title="MAE 435  Principles of Automatic Control">
                        Study of linear feedback control systems using transfer functions. Transient and steady state responses. Stability and dynamic analyses using time response and frequency response techniques. Compensation methods. Classical control theory techniquesfor determination and modification of the dynamic response of a system. Synthesis and design applications to typical mechanical engineering control systems. Introduction to modern control theory.
                    </AccordionSection>

                    <AccordionSection aria-label="learn more about course" title="MAE 430  Applied Finite Element Analysis  ">
                        Finite element modeling techniques for solving real-world engineering problems are discussed. Theory of finite element discretization is highlighted follow by software implementation, emphasis is given on accurate prescription of boundary conditions that represent actual physical systems, modeling exercises and projects include solid structural problems, heat transfer, structural vibrations, fluid dynamics and contact problems, modeling is carried out using commercial software packages.
                    </AccordionSection>

                </div>

                <div className="education-card">
                    <img className="card-img" src={ucb_logo} alt="UCB Logo" />
                    <h3 className="card-title">University of California, Berkeley</h3>
                    <h4 className="card-subtitle">Master of Engineering - Mechanical Engineering</h4>
                    <p className="card-content">
                        The University of California's College of Engineering is one of the most highly regarded engineering schools in the world, known for its cutting-edge research, innovative curriculum, and exceptional faculty and students.
                        With a history dating back over 150 years, the College of Engineering has played a critical role in shaping the field of engineering and technology.
                    </p>

                    <p className="card-content">
                        The College of Engineering at UC offers a broad range of undergraduate and graduate programs in various engineering disciplines, including chemical, civil, electrical, computer, mechanical, and materials science engineering.
                        With over 8,000 students and 400 faculty members, the College is one of the largest and most diverse engineering schools in the United States.
                    </p>

                    <p className="card-content">
                        The College of Engineering at UC is dedicated to providing its students with a comprehensive education that emphasizes both theory and practical application.
                        The College encourages students to engage in experiential learning opportunities, such as internships, research projects, and industry collaborations.
                        This approach prepares students for successful careers in engineering and related fields, and many graduates go on to work at leading companies and organizations around the world.
                    </p>

                    <p className="card-content">
                        The College of Engineering is also renowned for its world-class research programs, which are focused on addressing some of the most pressing challenges facing society today, including sustainability, health care, and information technology.
                        The College's research efforts are supported by a number of state-of-the-art research facilities and centers, including the Center for Information Technology Research in the Interest of Society (CITRIS) and the Institute for Transportation Studies (ITS).
                    </p>

                    <p className="card-content">
                        University of California's College of Engineering is a premier institution that provides students with an exceptional education and prepares them for successful careers in engineering and related fields.
                        With its focus on innovation, collaboration, and impact, the College of Engineering is shaping the future of engineering and technology.
                    </p>

                    <Button
                        className="card-button"
                        aria-label="learn more uc berkeley"
                        type="button"
                        visual="link"
                        onClick={() => window.open('https://www.berkeley.edu', '_blank', 'noopener noreferrer')}
                    >
                        Learn More about UC Berkeley
                    </Button>

                    <p className="card-content">
                        Please see the coresponding courses I took in following.
                    </p>

                    <AccordionSection aria-label="learn more about course" title="MEC ENG 280 Finite Element Method">
                        Weighted-residual and variational methods of approximation. Canonical construction of finite element spaces. Formulation of element and global state equations. Applications to linear partial differential equations of interest in engineering and applied science. A brief review of continuum mechanics. Consistent linearization of kinematical variables and balance laws. Incremental formulations of the equations of motion. Solution of the nonlinear field equations by Newton's method and its variants. General treatment of constraints. Applications to nonlinear material and kinematical modeling on continua.
                    </AccordionSection>

                    <AccordionSection aria-label="learn more about course" title="MEC ENG C223 Polymer Engineering">
                        A survey of the structure and mechanical properties of advanced engineering polymers. Topics include rubber elasticity, viscoelasticity, mechanical properties, yielding, deformation, and fracture mechanisms of various classes of polymers. The course will discuss degradation schemes of polymers and long-term performance issues. The class will include polymer applications in bioengineering and medicine.
                    </AccordionSection>

                    <AccordionSection aria-label="learn more about course" title="MEC ENG 235 Design of Microprocessor-Based Mechanical Systems ">
                        This course provides preparation for the conceptual design and prototyping of mechanical systems that use microprocessors to control machine activities, acquire and analyze data, and interact with operators. The architecture of microprocessors is related to problems in mechanical systems through study of systems, including electro-mechanical components, thermal components, and a variety of instruments. Laboratory exercises lead through studies of different levels of software.
                    </AccordionSection>

                    <AccordionSection aria-label="learn more about course" title="MEC ENG 239 Robotic Locomotion ">
                        This course will provide students with a solid understanding of robotic locomotion and the use of dynamics, control and embedded microcomputers in designing artificial legs such as prosthetics, orthotics and exoskeletons.
                        Design artificial legs, select and design components of the robotic legs.
                        Conduct various analyses on the legs' performance, propose and study practical applications such as orthotics and prosthetics in medical field, back support, knee support and shoulder support exoskeletons in industrial field and recreational exoskeletons.
                    </AccordionSection>
                </div>

                <div className="education-card">
                    <img className="card-img" src={neu_logo} alt="NEU Logo" />
                    <h3 className="card-title">Northeastern University</h3>
                    <h4 className="card-subtitle">Master of Science - Computer Software Engineering</h4>
                    <p className="card-content">
                        Northeastern University's College of Engineering is a top-ranked institution that is widely recognized for its excellence in engineering education and research.
                        With a history dating back to 1898, the College has established a strong reputation for its innovative curriculum, world-class faculty, and commitment to experiential learning.
                    </p>

                    <p className="card-content">
                        The College of Engineering at Northeastern offers a comprehensive range of undergraduate and graduate programs in various engineering disciplines, including mechanical, civil, electrical, computer, bioengineering, and environmental engineering.
                        With over 5,000 students and 150 faculty members, the College is one of the largest and most diverse engineering schools in the United States.
                    </p>

                    <p className="card-content">
                        The College of Engineering is committed to providing students with a hands-on, experiential learning approach that prepares them for successful careers in engineering and related fields.
                        The College encourages students to participate in co-op programs, research projects, and industry collaborations, allowing them to gain real-world experience and apply classroom knowledge to solve complex problems.
                    </p>

                    <p className="card-content">
                        The College of Engineering is also known for its cutting-edge research programs, which are focused on addressing some of the most pressing challenges facing society today, including renewable energy, sustainability, and health care.
                        The College's research efforts are supported by a number of state-of-the-art research facilities and centers, including the Center for Renewable Energy Technology (NUCRET) and the Nanoscale Engineering Research Laboratory (NERL).
                    </p>

                    <p className="card-content">
                        Northeastern University's College of Engineering is a dynamic and forward-thinking institution that provides students with an exceptional education and prepares them for successful careers in engineering and related fields.
                        With its focus on experiential learning, innovation, and impact, the College of Engineering is shaping the future of engineering education and research.
                    </p>

                    <Button
                        className="card-button"
                        aria-label="learn more northeastern"
                        type="button"
                        visual="link"
                        onClick={() => window.open('https://www.northeastern.edu', '_blank', 'noopener noreferrer')}
                    >
                        Learn More about Northeastern
                    </Button>

                    <p className="card-content">
                        Please see the coresponding courses I took in following.
                    </p>

                    <AccordionSection aria-label="learn more about course" title="INFO 5100  Application Engineering and Development">
                        Takes students in a step-by-step manner through the process of systematically combining UX techniques, business processes, and complex data models to assemble applications that are user-friendly and meet business requirements. Employs the object-oriented paradigm, visual user experience, and system design principles to put together complicated, powerful, real-world applications. The primary objective of this course is to practice social-technical software engineering methods and tools to solve real-world problems. Offers students an opportunity to learn innovative design and programming techniques to build significant business applications quickly; to practice simple and smart ways of making software construction enjoyable; and to master the art of how to systematically write software programs to solve any business problem.
                    </AccordionSection>

                    <AccordionSection aria-label="learn more about course" title="INFO 6150  Web Design and User Experience Engineering">
                        Exposes students to both conceptual and technical aspects of Web design. User experience design is the discipline of creating a useful and usable website or application that is easily navigated and meets the needs of both the site owner and its users. Covers Web standards and best practices. Studies the fundamental concepts, techniques, practices, work flows, and tools associated with the practice of user-experience design in Web interfaces. Offers students an opportunity to learn the core principles of information architecture, usability, marketing hierarchy, and user experience for contextual, value-driven websites. Additional areas of focus include typography, color theory and composition, responsive design, CSS3 concepts, basic scripting, and JavaScript libraries to create functional, effective, and visually appealing websites.
                    </AccordionSection>

                    <AccordionSection aria-label="learn more about course" title="INFO 6250  Web Development Tools and Methods">
                        Explores advanced server-side technologies and tools necessary to design and engineer complete web-based enterprise applications quickly. Designed to build on previous experience to cover the life cycle of a web-based application. Focuses on MVC web development frameworks to build server-side, data-intensive, and multiplier web applications. Additionally, discusses designing rich internet applications (RIA) using AJAX and service-oriented architecture (SOA) using REST.
                    </AccordionSection>

                    <AccordionSection aria-label="learn more about course" title="CSYE 6225  Network Structures and Cloud Computing">
                        Offers a practical foundation in cloud computing and hands-on experience with the tools used in cloud computing. Designed as a foundation course for cloud-aware, adept professionals. Focuses on the fundamentals of cloud computing, the principal areas of cloud architectures, cloud security, cloud governance, cloud storage, cloud virtualization, and cloud capacity. Discusses the Internet evolution that led to cloud and how cloud applications revolutionized Web applications
                    </AccordionSection>
                </div>


            </div>
        </div>
    );
}
export default Education;