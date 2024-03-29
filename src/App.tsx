import * as React from 'react';

import TodoProvider from './context/todoContext';
import ThemeProvider from './context/themeContext';
import Todos from './containers/Todos';
import ThemeWrapper from './components/ThemeWrapper';
import './styles.css';

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <ThemeWrapper>
          <main className="App">
            <h1>My Todos</h1>
            <Todos />
          </main>
        </ThemeWrapper>
      </TodoProvider>
    </ThemeProvider>
  );
}
