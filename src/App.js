import Global from './themes/global';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { Main } from './pages';
import AppProvider from './hooks';

function App() {
  return (
    <>
      <Global />
      <AppProvider>
        <Main />
      </AppProvider>
    </>
  );
}

export default App;
