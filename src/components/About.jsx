import React from 'react';
import Title from './Title';

function About() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title>About</Title>
                <p className='text-md max-w-xl mb-6'>I'm a third-year B.S. Computer Science student at Georgia Institute of Technology.</p>
            </div>
        </div>
    )
}

export default About;