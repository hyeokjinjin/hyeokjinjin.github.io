import React from 'react';

function CoursesItem({name, desc}) {
    return (
        <p className="flex flex-wrap gap-1 sm:gap-2 flex-col sm:flex-row items-start sm:items-center justify-start text-xs sm:text-sm mb-3">
            <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                {name}
            </span>
            <h3 className="text-base font-semibold text-stone-900 dark:text-white">
                {desc}
            </h3>
        </p>
    )  
}

export default CoursesItem;