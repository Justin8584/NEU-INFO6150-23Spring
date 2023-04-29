import "./Home.css";
import gradImg from '../image/IMG_7889.jpeg';
import selfInMusk from '../image/IMG_0897.jpeg';
function Home() {
    return (
        <div className="home">

            <div className="home-block">

                <img className="home-block__img" src={gradImg} alt="graduation Img" />
                <div className="home__content">
                    <h3 className="content__title">About My Mechanical Engineering</h3>

                    <p className="content__text">
                        I really like what Steve Jobs said <span className="text__emphasize">"Design is not just what it looks like and feels like. Design is how to works."</span> {' '}
                        The great arts always catch visitors' eyes in Museum, but great products with fantastic user experience make people live with it every single day. My name is Jiading Zhou, a graduate student in mechanical engineering at UC Berkeley. I enjoy making the design of something cool to help people. I am seeking some entry-level mechanical design positions.
                    </p>
                </div>
            </div>

            <div className="home-block">

                <img className="home-block__img" src={selfInMusk} alt="my selfie in musk" />
                <div className="home-block__content">
                    <h3 className="content__title">Little More about Software Engineering</h3>

                    <p className="content__text">
                        The knowledge and experience make me growth. After a year working on Exoskeleton in UC Berkeley, I keep thinking how the other way that could help more patients.
                        Mechanical design can adapt to major situations easily. However, it is difficult to address more sophisticated problems.
                        Software develops the ways that control the mechanical equipments that can be used under complex situations; and also allows potential users to have their own attributes in their own situations.
                    </p>
                </div>
            </div>

        </div>
    );
}
export default Home;