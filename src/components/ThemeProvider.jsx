import React, { createContext } from 'react';
import { node } from 'prop-types';
const ThemeContext = createContext();

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: localStorage.getItem('theme') || 'light',
    };
  }

  toggleTheme = () => {
    const newTheme = this.state.theme === 'light' ? 'dark' : 'light';
    this.setState((prevState) => ({
      theme: newTheme,
    }));
    localStorage.setItem('theme', newTheme);
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
ThemeProvider.propTypes = {
  children: node.isRequired,
};

export { ThemeProvider, ThemeContext };
