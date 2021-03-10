import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component  {
  state = {
    isLightTheme: true,
    light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
    dark: {syntax: '#ddd', ui: '#333', bg: '#555'}
  }


  toggleTheme = () => {
    const newTheme = !this.state.isLightTheme
    this.setState({isLightTheme: newTheme})
    localStorage.setItem('isLightTheme', newTheme);
  }


  componentDidMount() { // useEffect with empty [], executed once
    const lightTheme = JSON.parse(localStorage.getItem('isLightTheme'))
    console.log({lightTheme})
       this.setState({isLightTheme: lightTheme})
  }

  //componentDidUpdate
  render() {
    return(
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}> {/*provide objects so need another {} */}
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider
