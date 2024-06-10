import Swal from "sweetalert2"
import PropTypes from "prop-types"
import { useForm } from "./Hooks/UseForm"
const taskInfo = {
    task: "",
    description: "",
    location: "",
    limit: ""
}
const TaskModal = ({task = null , taskList, setTaskList }) => {
    const [values, handleInputChange, reset] = useForm(task || taskInfo)

    const handleSaveClick = () => {
       let newTaskList = []

     if (task) {
        newTaskList = taskList.map((t) => {
            if (t.id == task.id) {
                t.task = values.task
                t.description = values.description
                location = values.location
                t.limit = values.limit
            }
            return t
            
        })

        } else{

            
        newTaskList = [
            ...taskList,
            {
                id: taskList.length + 1,
                ...values,
                isDone: false
            }
        ]

        }

        setTaskList(newTaskList)

        localStorage.setItem("taskList", JSON.stringify(taskList))
        reset()

        Swal.fire({
            icon: "success",
            title: "Task added",
        })
    }

    const id = task?.id || ''

    return (
        <div className="modal fade" id={"TaskModal" +  id}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title"
                            id="taskModalLabel">
                            
                            
                                {task ? "Edit Task" : "Add Task"}
                            


                        </h5>

                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col text-start">
                                <label className="form-label"
                                    htmlFor="task"
                                > Task </label>
                                <input
                                    className="form-control"
                                    id="task"
                                    name="task"
                                    onChange={handleInputChange}
                                    type="text"
                                    value={values.task}
                                />
                                <label
                                    className="form-label"
                                    htmlFor="description" //Esta etiqueta es para la descripción
                                > Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    onChange={handleInputChange}
                                    name="description"
                                    value={values.description}
                                ></textarea>
                                <label
                                    className="form-label"
                                    htmlFor="location"
                                >Location</label>
                                <input
                                    className="form-control"
                                    id="location"
                                    onChange={handleInputChange}
                                    name="location"
                                    type="text"
                                    value={values.location}
                                />
                                <label
                                    className="form-label"
                                    htmlFor="limit"
                                >Limit</label>
                                <input
                                    className="form-control"
                                    id="limit"
                                    onChange={handleInputChange}
                                    name="limit"
                                    type="time"
                                    value={values.limit}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">

                        <button
                            className="btn btn-sm btn-primary"
                            onClick={handleSaveClick}
                            data-bs-dismiss="modal">
                            <i className="bi bi-pencil-square" >
                            </i>
                            Save
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary" data-bs-dismiss="modal">
                            <i className="bi bi-x -lg"></i>
                            Close
                        </button>



                    </div>
                </div>
            </div>
        </div>
    )

}

TaskModal.propTypes = {
    taskList: PropTypes.array.isRequired,
    setTaskList: PropTypes.func.isRequired,
    task: PropTypes.object
}

export default TaskModal