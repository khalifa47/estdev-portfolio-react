import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContainer></MainContainer>
    </ThemeProvider>
  );
}

export default App;

const MainContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.2rem;
  height: max-content;
`;
