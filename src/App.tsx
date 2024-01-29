import styled, { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { theme } from "./theme";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Jokes from "./components/Jokes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Khalifa Fumo | EstDev Portfolio</title>
        <meta property="title" content="Khalifa Fumo | Portfolio" />
        <meta
          property="description"
          content="Khalifa Fumo's React Portfolio Showcase"
        />
        <meta property="image" content="favicon.ico" />
        <meta
          property="url"
          content="https://khalifa47.github.io/estdev-portfolio-react"
        />
      </Helmet>
      <Header />
      <MainContainer>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Jokes />
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
