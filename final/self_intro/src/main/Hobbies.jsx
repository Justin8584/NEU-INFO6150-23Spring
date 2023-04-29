import "./Hobbies.css";
import Button from '../components/Button'
import ImageCarousel from '../components/ImageCarousel';

import photoGraphing_images from '../image/photoGraphing_images';
import dota2_images from '../image/dota2_images';
import csgo_images from '../image/csgo_images';
import reading_images from '../image/reading_images';



function Hobbies() {

    return (
        <div className="hobbies">
            <div className="hobbies-panels">

                <div className="hobbies-panel">
                    <ImageCarousel className="hobbies-ImageCarousel" images={photoGraphing_images} />
                    <div className="hobbies-panel__content">
                        <h3 className="hobbies-panel__title">
                            PhotoGraphing.
                        </h3>

                        <p className="hobbies-panel__text">
                            I really like Photo Graph. Normal days, I use my iPhones to take photos. When I travel to somewhere, I bring my camera, Sony Aphal6, and record my traveling Enjoy!.
                        </p>

                        <p className="hobbies-panel__text">
                            I alway believe that photography is a fascinating hobby that allows to capture and preserve memories in a unique and creative way.
                            With the advancements in technology, photography has become more accessible than ever before, which allowing to experiment with different techniques and styles to capture the perfect shot.
                            Whether I enjoy taking photos of landscapes, people, or animals, photography allows me to express my creativity and capture the beauty of the world around me.
                            It's a hobby that can be both relaxing and exciting, and can lead to a lifetime of learning and growth.
                        </p>
                    </div>


                </div>

                <div className="hobbies-panel">
                    <ImageCarousel className="hobbies-ImageCarousel" images={dota2_images} />
                    <div className="hobbies-panel__content">
                        <h3 className="hobbies-panel__title">
                            Game - DOTA2.

                        </h3>

                        <Button
                            className="panel-button"
                            aria-label="learn more DOTA2 game"
                            type="button"
                            visual="link"
                            onClick={() => window.open('https://www.dota2.com', '_blank', 'noopener noreferrer')}
                        >
                            Learn More
                        </Button>

                        <p className="hobbies-panel__text">
                            Dota 2 is a multiplayer online battle arena (MOBA) game that has become increasingly popular since its release in 2013 [2]. The game is developed and published by Valve Corporation and is a sequel to Defense of the Ancients (DotA), a popular Warcraft III mod. Dota 2 features two teams, each with five players who compete to destroy the enemy's ancient structure while defending their own. The game has a vast array of unique hero characters, each with its own abilities and playstyle, providing a broad range of strategies and team compositions.
                        </p>
                        <p className="hobbies-panel__text">
                            Dota 2 has an enormous and dedicated player base, with millions of players worldwide. The game is highly competitive, with regular tournaments featuring professional players from all over the world. The gameplay is incredibly strategic, requiring teamwork, quick thinking, and expert timing to succeed. The game's complexity and depth are some of its most significant draws, with players dedicating hours to mastering the game's mechanics and strategies.
                        </p>
                        <p className="hobbies-panel__text">
                            Dota 2 is a highly popular MOBA game with a dedicated player base and complex gameplay that provides endless opportunities for strategy and teamwork. The game's unique hero characters, regular updates, and highly competitive nature have made it one of the most successful and widely-played games in recent years.
                        </p>
                    </div>


                </div>

                <div className="hobbies-panel">
                    <ImageCarousel className="hobbies-ImageCarousel" images={csgo_images} />
                    <div className="hobbies-panel__content">
                        <h3 className="hobbies-panel__title">
                            Game - CSGO.
                        </h3>

                        <Button
                            className="panel-button"
                            aria-label="learn more CSGO game"
                            type="button"
                            visual="link"
                            onClick={() => window.open('https://www.counter-strike.net/news', '_blank', 'noopener noreferrer')}
                        >
                            Learn More
                        </Button>

                        <p className="hobbies-panel__text">
                            Counter-Strike: Global Offensive (CSGO) is a popular first-person shooter game that was released in 2012. It is the fourth game in the Counter-Strike series and has quickly become one of the most popular first-person shooter games of all time. CSGO is developed and published by Valve Corporation and is available on multiple platforms, including Windows, macOS, Xbox 360, and PlayStation 3.
                        </p>
                        <p className="hobbies-panel__text">
                            The gameplay of CSGO features two teams, the terrorists and counter-terrorists, each with their specific objectives. The terrorists aim to plant a bomb or take hostages, while the counter-terrorists aim to prevent these objectives from being completed. CSGO is known for its highly competitive nature, with players competing in online matches, leagues, and tournaments for cash prizes.
                        </p>
                        <p className="hobbies-panel__text">
                            CSGO's popularity can be attributed to its fast-paced gameplay, strategic elements, and dedicated community of players. The game's developers regularly update the game, introducing new maps, weapons, and gameplay mechanics, which keeps the game fresh and exciting. Additionally, CSGO's replayability is enhanced by its customizable settings, allowing players to adjust their gameplay experience to suit their playstyle.
                        </p>
                        <p className="hobbies-panel__text">
                            CSGO is a popular first-person shooter game that has become one of the most played and beloved games in its genre. Its fast-paced gameplay, strategic elements, and dedicated community of players have helped make it a long-lasting success. CSGO's replayability is enhanced by its customizable settings, while the developers' constant updates ensure that the game stays fresh and engaging for both new and experienced players.                        </p>
                    </div>


                </div>

                <div className="hobbies-panel">
                    <ImageCarousel className="hobbies-ImageCarousel" images={reading_images} />
                    <div className="hobbies-panel__content">
                        <h3 className="hobbies-panel__title">
                            Reading.
                        </h3>

                        <p className="hobbies-panel__text">
                            I enjoy reading, not just fictional novel, also some professional topics beyond my major. There three books that I enjoy most and highly recommended.
                        </p>

                        <p className="hobbies-panel__text">
                            First, <span className="books-title">Principles of Economics.</span> "Principles of Economics" is a comprehensive introductory textbook on economics written by N. Gregory Mankiw. The book is widely used in universities and colleges around the world to teach students the fundamental principles and concepts of economics. The book covers a broad range of topics, including microeconomics, macroeconomics, international trade, and the global economy. It is known for its clear and concise writing style, real-world examples, and practical applications. The book also introduces students to economic models and theories, providing them with the tools to analyze and understand complex economic issues. With its accessible approach, "Principles of Economics" is an essential resource for anyone interested in economics, whether they are students, professionals, or simply curious readers.
                        </p>

                        <p className="hobbies-panel__text">
                            Second, <span className="books-title">The Intelligent Investor.</span> "The Intelligent Investor" is a classic investment book written by Benjamin Graham, widely considered to be the father of value investing. First published in 1949, the book teaches investors how to approach the stock market with a long-term, value-oriented perspective. Graham argues that intelligent investing requires diligent research, a sound investment strategy, and a disciplined approach to portfolio management. The book provides practical advice on how to analyze financial statements, assess a company's intrinsic value, and construct a portfolio of stocks and bonds that can withstand market volatility. It emphasizes the importance of risk management and avoiding speculative investments. The book has influenced generations of investors, including Warren Buffett, who famously studied under Graham at Columbia University and has called "The Intelligent Investor" the best book on investing ever written.
                        </p>

                        <p className="hobbies-panel__text">
                            Third, <span className="books-title">Galactic Empire.</span> "Galactic Empire" is a science fiction novel written by the legendary American author Isaac Asimov. It is a collection of short stories that take place in a fictional future universe in which humans have established a vast interstellar empire. The stories are set in different time periods and explore various aspects of the empire's history, including its rise, decline, and eventual fall. The book features Asimov's signature blend of science, philosophy, and storytelling, making it a classic in the science fiction genre. With its intricate world-building and engaging characters, "Galactic Empire" is a must-read for fans of science fiction and anyone interested in exploring the human condition in the context of a futuristic society.
                        </p>
                    </div>


                </div>

            </div>
        </div>
    );
}
export default Hobbies;