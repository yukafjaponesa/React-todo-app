import React, {useContext} from 'react'
import format from 'date-fns/format'
import {ThemeContext} from '../contexts/ThemeContext'

function TodoItem(props) {
  const themeChange = useContext(ThemeContext)
  const theme = themeChange.isLightTheme ? themeChange.light : themeChange.dark

  const completedStyle = {
      fontStyle: 'italic',
      //color: '#cdcdcd',
      color: '#A9A9A9',
      textDecoration: 'line-through'
  }

  const buttontext = (props.isEdited ? 'Update' : 'Edit');

    return (
        <div className="todo-item" style={{background: theme.ui, color: theme.syntax}}>
              <input
                  type="checkbox"
                  checked={props.item.completed}
                  onChange={() => props.handleChange(props.item.id)}
              />

              {!props.isEdited && (
                <div>
                  <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
                  <p style={props.item.completed ? completedStyle: null}>{format(new Date(props.item.deadline),'eee do MM yyyy')}</p>
                </div>
              )}

            <div className="editable-text-dlt-edit-btn">
              {props.isEdited && (
                <div>

                  <div className="editable-text-box">
                    <input
                      type="text"
                      id={props.item.id}
                      value={props.item.text}
                      onChange={(e) => {
                        props.updateInput(e.target.value, props.item.id)
                      }}
                    />
                  </div>

                  <div className="editable-text-box">
                    <input
                      type="date"
                      id={props.item.id}
                      value={props.item.deadline}
                      onChange={(e) => {
                        props.updateInputDeadline(e.target.value, props.item.id)
                      }}
                    />
                  </div>

                </div>
              )}

            <div className="delete-btn">
              <input type="button" value="Delete" onClick={() => {
                props.deleteItem(props.item.id)
              }}/>
            </div>

            <div className="edit-btn">
              <input type="button" value={buttontext} onClick={() => {
                if(props.isEdited) {
                  props.editItem(false)
                }else {
                  props.editItem(props.item.id)
                }
              }}/>
            </div>

          </div>

        </div>
    )
}

export default TodoItem
