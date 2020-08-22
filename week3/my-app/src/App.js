import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"
import Timer from "./components/Timer"
import FlipMove from "react-flip-move"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: todosData,
            //setTodos: todosData,
            newItem: "",
            deadline: "",
            editing: false
        }

        // const [todos, setTodos] = useState(todosDatas);
        // this.setTodos = setTodos;
        // this.todos = todos;

        this.handleChange = this.handleChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.updateInput = this.updateInput.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.updateItem = this.updateItem.bind(this)
        this.updateDeadline = this.updateDeadline.bind(this)
        this.updateInputDeadline = this.updateInputDeadline.bind(this)
        this.editItem = this.editItem.bind(this)
    }

    handleChange(id) {
      this.setState((prevState) => {
        const updatedTodos = prevState.todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        });
        return { todos: updatedTodos };
      });
    }

    addTodo(e) {
      //console.log("add todo");
      e.preventDefault();
      const newTodo = {
        id: this.state.todos.length + 1,
        text: this.state.newItem,  // text should match with the input box
        completed: false,
        deadline: this.state.deadline
      }
      const newTodos = this.state.todos.concat([newTodo]);
      this.setState({
        todos: newTodos
      })
    }

    updateInput(value, id) {
        this.setState((prevState) => {
        const updatedTodos = prevState.todos.map((todo) => {
          if(todo.id === id) {
            return {...todo, text: value}
          }else {
            return todo;
          }
        })
        return {todos: updatedTodos}
      })
    }

    updateInputDeadline(value, id) {
      //console.log(value, id);
        this.setState((prevState) => {
        const updatedTodos = prevState.todos.map((todo) => {
          if(todo.id === id) {
            console.log(value, id);
            return {...todo, deadline: value}
          }else {
            return todo;
          }
        })
        return {todos: updatedTodos}
      })
    }

    updateItem(e) {
      this.setState({
        newItem: e.target.value
      })
    }

    updateDeadline(e) {
      this.setState({
        deadline: e.target.value
      })
    }

    deleteItem(id){
      //debugger
    const filteredItems= this.state.todos.filter(item =>
      item.id!==id); //true: keep it, false means discard(delete)
      this.setState({
      todos: filteredItems
    })
  }

  editItem(id) {
    this.setState({
      editing: id
    })
  }



    render() {
        const todoItems = this.state.todos.map
        (item =>
          <TodoItem
          key={item.id}
          item={item}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          deleteItem={this.deleteItem}
          updateInput={this.updateInput}
          updateInputDeadline={this.updateInputDeadline}
          isEdited={this.state.editing === item.id}
          editItem={this.editItem}
        />)


        return (
          <div className="todo-list">
          <Timer />

            <div className="add-todo">
              <label>Add an item...</label>
              <input
                type="text"
                placeholder="Type item here..."
                value={this.state.newItem}
                onChange={this.updateItem}
              />
            </div>

            <div className="date">
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date" id="start" name="deadline"
                min="2020-01-01"
                max="2020-12-31"
                value={this.state.deadline}
                onChange={this.updateDeadline}
              />
            </div>

            <button onClick={this.addTodo}>Add to the list</button>

            {todoItems.length === 0 ? <p>No items</p> : null}

            <div className="todoitems">
              {todoItems}
            </div>

          </div>
        )
    }
}

export default App
