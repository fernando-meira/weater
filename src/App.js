import Global from './themes/global';

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
