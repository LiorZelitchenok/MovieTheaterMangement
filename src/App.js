import { AppContextProvider } from "./Context";
import Main from "./Components/Main/Main";
function App() {
  return (
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  );
}

export default App;
