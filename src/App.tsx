import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Projects from "./components/Projects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContainer>
        <About />
        <Experience />
        <Tech />
        <Projects />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;

const MainContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.2rem;
  height: max-content;
`;
