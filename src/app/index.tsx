import ThemeContextProvider from './context/ThemeContext';
import WordContextProvider from './context/WordContext';

import { Layout } from '@widgets/layout';

const App = () => {
  const themeLS = localStorage.getItem('theme') || 'dark';

  return (
    <ThemeContextProvider init={themeLS}>
      <WordContextProvider init="">
        <Layout />
      </WordContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
