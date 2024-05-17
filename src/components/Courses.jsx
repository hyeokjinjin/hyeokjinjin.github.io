import React from 'react';
import course from './data/course';
import CoursesItem from './CoursesItem';
import Title from './Title';

function Courses() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title>Relevant Courses</Title>
                {course.map(item => (
                    <CoursesItem
                        name={item.name}
                        desc={item.desc}
                    />
                ))}
            </div>
        </div>
    )
}

export default Courses;