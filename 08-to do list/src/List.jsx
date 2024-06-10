import PropTypes from "prop-types"
import Listittem from "./Listittem"

const List = ({taskList,setTaskList}) =>{
    return(
        <>
        <div className="row">
        <div className="col-5">
          <h4>Tasks</h4>
        </div>

        <div className="col-2">
          <h4>Limit</h4>
        </div>

        <div className="col-3">
          <h4>Location</h4>
        </div>
        <div className="col">
          <h4>Done</h4>
        </div>
      </div>

      {
        taskList.map(
            (task) => (
                <Listittem
                key={task.id}
                task={task}
                taskList={taskList}
                setTaskList={setTaskList}
                />
            )
        )
    }

      
    </>
    )
}

List.propTypes = {
    taskList: PropTypes.array.isRequired,
    setTaskList: PropTypes.func.isRequired,
}
export default List