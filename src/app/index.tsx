import ThemeContextProvider from './context/ThemeContext';
import WordContextProvider from './context/WordContext';

import { Layout } from '@widgets/layout';

const App = () => {
  return (
    <ThemeContextProvider init="dark">
      <WordContextProvider init="">
        <Layout />
      </WordContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
