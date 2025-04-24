import "./App.scss";
import { Header, Main } from "./pages";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
    </>
  );
}

export default App;
