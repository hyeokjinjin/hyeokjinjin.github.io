import React from 'react';
import Title from './Title';

function About() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title>About</Title>
                <p className='text-md max-w-xl mb-6'>My name is Hyeokjin Jin, currently a third year B.S. Computer Science student at the Georgia Institute of Technology. My current interest is to develop applications whether they are used for fun or for solving real world problems. While I am passionate about this area, I am always eager to explore the vast field of computer science.</p>
                <p className='text-md max-w-xl mb-6'>Beyond school and work, my hobbies include practicing bass guitar, listening to a diverse range of genres of music, playing video games with friends, and catching up on the latest anime, K-drama, or TV shows.</p>
                <p className='text-md max-w-xl mb-6'>I am currently seeking software engineering intern opportunities. Please feel free to contact me at hjin307(at)gatech(dot)edu.</p>
            </div>
        </div>
    )
}

export default About;