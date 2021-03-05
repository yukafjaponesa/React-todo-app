import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";
import Timer from "./components/Timer";
import ThemeContextProvider from "./contexts/ThemeContext";
//import FlipMove from "react-flip-move";
import { v4 as uuidv4 } from 'uuid'; //npm install uuid
import ThemeToggle from './components/ThemeToggle';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: window.localStorage.getItem('todos') ? JSON.parse(window.localStorage.getItem('todos')) : [],
            //setTodos: todosData,
            id: uuidv4(),
            newItem: "",
            deadline: "",
            editing: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.updateInput = this.updateInput.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.updateItem = this.updateItem.bind(this)
        this.updateDeadline = this.updateDeadline.bind(this)
        this.updateInputDeadline = this.updateInputDeadline.bind(this)
        this.editItem = this.editItem.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
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
        localStorage.setItem('todos',JSON.stringify(updatedTodos))
        return { todos: updatedTodos };
      });
    }

    addTodo(e) {
      //console.log("add todo");
      //e.preventDefault();
      const newTodo = {
        //id: this.state.todos.length + 1, // when youo delete an item, next one gets the same id and duplicate
        id: uuidv4(),
        text: this.state.newItem,  // text should match with the input box
        completed: false,
        deadline: this.state.deadline
      }
      const newTodos = this.state.todos.concat([newTodo]);
      this.setState({
        todos: newTodos,
        newItem: "",
        deadline: "",
        id: uuidv4(),//id: this.state.todos.length + 1,
        editing: false
      })

      localStorage.setItem('todos',JSON.stringify(newTodos))
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
        localStorage.setItem('todos',JSON.stringify(updatedTodos))
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
        localStorage.setItem('todos',JSON.stringify(updatedTodos))
        return {todos: updatedTodos}  // update tpdps, need setItem
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
    localStorage.setItem('todos',JSON.stringify(filteredItems))
  }

  editItem(id) {
    this.setState({
      editing: id
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();
  };

  componentDidMount() {
    const localData = localStorage.getItem('todo');
    const result = localData ? localData : '';
    console.log({result});
    const deadlineData = localStorage.getItem('deadline');
    this.setState({ result, deadlineData });
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
          <div className="todo-list" >
            <ThemeContextProvider>
              {/*<DayPicker />*/}
              <Timer />

              <form onSubmit={this.handleFormSubmit}>
                <div className="add-todo">
                  <label>Add an item...</label>
                  <input
                    type="text"
                    name="todo"
                    placeholder="Type item here..."
                    value={this.state.newItem}
                    onChange={this.updateItem}
                  />
                </div>

                <div className="date">
                  <label htmlFor="deadline">Deadline</label>
                  <input
                    type="date" id="start" name="deadline"
                    min="2021-01-01"
                    //max="2024-12-31"
                    value={this.state.deadline}
                    onChange={this.updateDeadline}
                  />
                </div>

                <button type="submit" onClick={this.addTodo}>Add to the list</button>
              </form>

              {todoItems.length === 0 ? <p>No items</p> : null}

              <div className="todoitems" >
                {todoItems}
              </div>

              <ThemeToggle />
            </ThemeContextProvider>
          </div>
        )
    }
}

export default App
