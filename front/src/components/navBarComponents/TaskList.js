import React from 'react'
import ListItem from './ListItem'

const TaskList = (props) => {
    let isForOperator = false

    if(props.operatorTasks) {
        isForOperator = true
    }

    const generateOperatorTasksData = (operatorTasks) => {
        return operatorTasks.map(taskName => {
            console.log(taskName);
            
            switch (taskName) {
                case 'Vendor Registration':
                    return {title: 'Vendor Registration', route: '/venRegistration'}
                case 'Scratch card desk':
                    return {title: 'Scratch card desk', route: '/venScratchCards'}
                case 'Hotline':
                    return {title: 'Hotline', route: '/hotline'}
                case 'Inspection':
                    return {title: 'Inspection', route: '/inspection'}
                default:
                    break;
            }
        })
    }

    let tasks = (!isForOperator) ?  props.tasks : generateOperatorTasksData(props.operatorTasks)        

    return ( 
        <ul className="navbar-nav mr-auto">
            {tasks.map((task, index) => {
                return <ListItem key={index.toString()} value={task.title} to={task.route} />
            })}
        </ul>
    )
}

export default TaskList