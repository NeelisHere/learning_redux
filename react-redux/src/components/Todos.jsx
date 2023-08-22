import { useEffect, useRef, useState } from 'react'
import { 
    useGetTasksQuery, 
    useGetTaskByIdQuery, 
    useAddTaskMutation, 
    useCompleteTaskMutation,
    useDeleteTaskMutation 
} from '../slices/todosAPI'

const taskOnFocusStyle = {
    border: '2px solid red',
    width: '40%',
    margin: '8px',
    display: 'flex',
    padding: '4px',
    justifyContent: 'space-between',
}
const taskStyle = {
    border: '2px solid green',
    width: '40%',
    margin: '8px',
    padding: '4px',
}

const SingleTask = ({ 
    id, 
    showSingleTask, 
    setShowSingleTask 
}) => {

    const { data: singleTask } = useGetTaskByIdQuery(id)
    const [ completeTask ] = useCompleteTaskMutation()
    const [ deleteTask ] = useDeleteTaskMutation()

    const handleCheck = (e) => {
        completeTask({ id, isCompleted:e.target.checked })
    }
    const handleCancel = () => {
        setShowSingleTask(!showSingleTask)
    }
    const handleDelete = () => {
        deleteTask(id)
        setShowSingleTask(!showSingleTask)
    }
    

    return(
        <div style={taskOnFocusStyle}>
            <input 
                type="checkbox" 
                checked={singleTask?.isCompleted}
                onChange={handleCheck} 
            />  
            <div>{singleTask?.task}</div>
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleCancel}>x</button>
            </div>
        </div>
    )
}


const Todos = () => {
    const [showSingleTask, setShowSingleTask] = useState(false)
    const [singleTaskId, setSingleTaskId] = useState(0)
    const { data: taskList } = useGetTasksQuery() 
    const [ addTask ] = useAddTaskMutation()

    const taskRef = useRef()

    const addTaskHandler = () => {
        addTask({
            id: taskList.length + 1,
            task: taskRef.current.value
        })
        taskRef.current.value = ''
    } 

    return (
        <div>
            <div>
                <input type="text" ref={taskRef} />
                <button onClick={addTaskHandler}>Add</button>
            </div>

            {
                showSingleTask? 
                <SingleTask 
                    id={singleTaskId} 
                    showSingleTask={showSingleTask} 
                    setShowSingleTask={setShowSingleTask}
                />
                :
                <></>
            }

            {
                taskList?.map(({ id, isCompleted, task }, index) => {
                    return(
                        <div 
                            key={index} 
                            style={taskStyle} 
                            onClick={()=>{
                                setSingleTaskId(id)
                                setShowSingleTask(true)
                            }}
                        >
                            <div style={{textDecoration: isCompleted?'line-through':''}}>{task}</div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Todos
