import React from 'react'
import UserBar from '../navBarComponents/UserBar'
import TaskList from '../navBarComponents/TaskList'

const createLinks = (user, initailTaskList, onLogout) => {
    let authLinks

    switch (user.role) {
        case 'manager':
            authLinks = (
                <>
                    <TaskList tasks={initailTaskList} />
                    <UserBar avatar={user.avatar} name={user.name} user={user} toLogOut={onLogout} />
                </>
            )
            break;
        case 'npc':
            authLinks = (
                <>
                    <TaskList tasks={initailTaskList} />
                    <UserBar avatar={user.avatar} name={user.name} user={user} toLogOut={onLogout} />
                </>
            )
            break;
        case 'operator':
            authLinks = (
                <>
                    <TaskList operatorTasks={user.task} />
                    <UserBar avatar={user.avatar} name={user.name} user={user} toLogOut={onLogout} />
                </>
            )
            break;
        default:
            break;
    }

    return authLinks
}

export default createLinks