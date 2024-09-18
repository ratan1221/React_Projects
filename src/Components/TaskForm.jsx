import Tags from "./Tags";
import "./TaskForm.css";

const TaskForm = () => {
  return (
    <header className="app-header">
      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqcQOvtLJs3gkHLZRba7GcGtqxUpeOl-OK_XCYPbHjSdFmvbFSdI8G9atWEA&s"
        alt="Picture Not Available"
      /> */}
      <img src="1st.png" height={"60%"} alt="My Image" className="img-head" />
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter Your Task"
        />

        <div className="task_form_bottom_line">
          <div>
            <Tags tagName={"HTML"} />
            <Tags tagName={"CSS"} />
            <Tags tagName={"JavaScript"} />
            <Tags tagName={"React"} />
          </div>
          <div>
            <select className="task_status">
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
