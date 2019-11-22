import React from 'react';
import Goal from './goal';
// import axios from 'axios';
// import Popup from './popup';

const Category = props => {

    return (
        <div id='category'>
            <section id='category-box'>current goals</section>
            {props.listedGoals.map((element, index) => {
                return (
                    <Goal
                        id={element.id}
                        progress={element.progress} 
                        date={element.date}
                        problem={element.problem}
                        key={index}

                        refreshFn={props.componentDidMount}
                        deleteFn={props.deleteFn}
                        editFn={props.editFn}
                />)})}
        </div>
    )
}

export default Category