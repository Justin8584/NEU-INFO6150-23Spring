import "./Experience.css";
import suitX from '../image/suitX logo front page.jpg';
import iacas from '../image/iacas_logo.jpg';
import ucb_logo from '../image/UC_Berkeley_Seal_80px.png';

function Experience() {
    return (
        <div className="experience">

            <h3 className="experience-title">Experience & Skills</h3>

            <div className="experience-skills">
                <p className="experience-skill"><span className="text-emphasis">Language</span>: Python, C++, Java, JavaScript, CSS, SQL, MATLAB, LabView, Simpack, ABAQUS, ANSYS</p>
                <p className="experience-skill"><span className="text-emphasis">Frameworks & DB</span>: AWS EC2, Node.js, React, DynamoDB, SolidWorks, Blender, PyTorch, TensorFlow, Keras, Git</p>
                <p className="experience-skill"><span className="text-emphasis">Hardware</span>: DfM, DfA, GDT, Materials Finishing and Treatments, PSOC 6, ESP32, Arduino, PixyCam, 3D-Printer</p>
            </div>

            <div className="experience-cards">

                <div className="experience-card">

                    <img className="experience-card__img" src={suitX} alt="SuitX Logo" />

                    <div className="experience-card__content">
                        <h4 className="content__title">SuitX Exo-Skeleton Internship</h4>
                        <h5 className="content__subtitle">Mechanical Design Engineer [Aug 2021 ~ May 2022]</h5>

                        <p className="content__text">
                            • Deployed an accurate analytical simulation platform in <span className="text-emphasis">ABAQUS</span> to conduct corresponding research and development on
                            the design of electric actuator systems specifically tailored to exoskeletons, robotics, and orthotic systems.
                        </p>

                        <p className="content__text">
                            • Designed and prototyped Exoskeleton structure by <span className="text-emphasis">Carbon-M3</span> based on human-like location maneuvers and collected data
                        </p>

                        <p className="content__text">
                            • Designed actuators in <span className="text-emphasis">SolidWorks</span>, all sensors, proper winding, transmission, and bearings restricted in small volume.

                        </p>

                        <p className="content__text">
                            • Consistently improved the practical and scalable design for all the relevant power requirements in multiple situations.
                        </p>
                    </div>
                </div>

                <div className="experience-card">

                    <img className="experience-card__img" src={iacas} alt="Chinese Academy of Science" />
                    <div className="experience-card__content">
                        <h4 className="content__title">Institute of Automation, Chinese Academy of Sciences</h4>
                        <h5 className="content__subtitle">Research Assistant & Group Leader [Jul 2019 ~ Aug 2019]</h5>

                        <p className="content__text">
                            • Reviewed and analyzed literature and journals on steel material properties and train aerodynamics.
                        </p>

                        <p className="content__text">
                            • Performed aerodynamic simulation of the high-speed train by <span className="text-emphasis">SIMPACK</span>; Obtained the digression coefficient and wind
                            resistance under different wind speeds.
                        </p>

                        <p className="content__text">
                            • Deployed <span className="text-emphasis">ABAQUS</span> to analyze the pressure of the hinge at the junction of two trains and the pressure of the wheels and
                            track; Conducted Wheel-rail contact relationship and dynamics analysis of China’s high-speed train.
                        </p>

                        <p className="content__text">
                            • Conducted Wheel-rail contact relationship and dynamics analysis of China’s high-speed train.
                        </p>

                        <p className="content__text">
                            • Delivered a final report and pitch on the design analysis and simulation of China’s high-speed train.
                        </p>
                    </div>
                </div>
                <div className="experience-card">

                    <img className="university__logo" src={ucb_logo} alt="ucb university Logo" />

                    <div className="experience-card__content">
                        <h4 className="content__title">Self Following, Avoiding Travel Luggage, UC Berkeley</h4>
                        <h5 className="content__subtitle">Product Design [Jan 2022 ~ May 2022]</h5>

                        <p className="content__text">
                            • Designed self-driving, avoiding luggage within organized motors, wheels, sensors, camera, micro-controller on chassis.
                        </p>

                        <p className="content__text">
                            • Configured succinct platform in <span className="text-emphasis">Modus-Toolbox & Arduino IDE</span> between <span className="text-emphasis">ultra-sonic sensor</span>, <span className="text-emphasis">PixyCam</span>, <span className="text-emphasis">Arduino</span>, and
                            <span className="text-emphasis">PSOC 6</span>; Construct PID control and ultra-sonic sensor to achieve the balance of motor outputs and distance measuring.
                        </p>

                        <p className="content__text">
                            • Developed the <span className="text-emphasis">UART Communication</span> between PSOC 6, Arduino, and PixyCam, transmit image and size of obstacles to
                            targets’ user interface by Wi-Fi and Bluetooth modules; coordinated priority between PixyCam and Ultra-sonic.
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
}
export default Experience;