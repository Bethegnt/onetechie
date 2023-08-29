import React from 'react';
import narrative from "../assets/narrative.jpg";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <>
    
    <div className='Home'>
        <main>
            <h1>Gagan</h1>
            <p>Solutions to all your problems.</p>
        </main>
    </div>

    <div className='Home2'>
        <img src={narrative} alt="Graphics"/>
        <div>
            <p>
                We are your one and only solution to take problem's you face every day. We are leading tech company whose aim is to increase the problem-solving ability in children's.
            </p>
        </div>
    </div>

    <div className="Home3">
        <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed explicabo rerum voluptates autem perferendis impedit, in earum et omnis enim, reprehenderit expedita! Culpa laborum autem, odit corrupti ipsum repellat nesciunt nostrum atque modi mollitia ratione aut, cumque minus voluptate iste! Odit modi numquam qui ea?</p>
        </div>
    </div>

    <div className="Home4">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay:"0.5s",
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay:"0.7s",
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>

                <div style={{
                    animationDelay:"1s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>

    </>
  );
}

export default Home