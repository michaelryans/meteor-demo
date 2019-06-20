import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Tasks } from '../../api/tasks'
import Task from '../Task.jsx'

function Todo(props) {
    return (
        <div>
            <h1>This is todo page</h1>
            <ul>
                {props.tasks.map((task) => {
                    return (<Task key={task._id} task={task} />)
                })}
            </ul>
        </div>
    )
}

export default withTracker(() => {
    return {
        tasks: Tasks.find({}).fetch()
    }
})(Todo)