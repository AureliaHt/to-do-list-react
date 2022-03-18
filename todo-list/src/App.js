import Header from "./components/Header";
import List from "./components/List";
import ThemeToggler from "./components/ThemeToggler";
import ThemeColorWrapper from "./components/context/ThemeContext";

const App = () => {
  return (
    <div>
      <ThemeColorWrapper>
        <ThemeToggler />
        <Header />
        <List />
      </ThemeColorWrapper>
    </div>
  );
};

export default App;
