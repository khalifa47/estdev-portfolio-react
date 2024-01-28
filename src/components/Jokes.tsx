import { useEffect, useRef, useState } from "react";
import SectionWrapper from "./shared/SectionWrapper";
import styled from "styled-components";

interface Joke {
  category: string;
  type: string;
  joke?: string;
  setup?: string;
  delivery?: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
}

const Jokes = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Any");
  const [loading, setLoading] = useState(false);
  const tabBarRef = useRef<HTMLDivElement>(null);

  const handleChangeCategory = (cat: string) => {
    setSelectedCategory(cat);
  };

  const scrollTabBar = (scrollOffset: number) => {
    if (tabBarRef.current) {
      tabBarRef.current.scrollLeft += scrollOffset;
    }
  };

  const regenerateJokes = async () => {
    setLoading(true);
    const response = await fetch(
      `https://v2.jokeapi.dev/joke/${selectedCategory}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=3`
    );
    const data = await response.json();
    setJokes(data.jokes);
    setLoading(false);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://v2.jokeapi.dev/categories");
      const data = await response.json();
      setCategories(data.categories);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/${selectedCategory}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=3`
      );
      const data = await response.json();
      setJokes(data.jokes);
    };

    fetchJokes();
  }, [selectedCategory]);

  return (
    <SectionWrapper>
      <h2>Get ready to laugh.</h2>
      <h1>JOKE POKE</h1>
      <TabContainer>
        <ScrollButton onClick={() => scrollTabBar(-100)}>{"<"}</ScrollButton>
        <TabBar ref={tabBarRef}>
          {categories.map((cat: string) => (
            <TabButton
              key={cat}
              $active={selectedCategory === cat}
              onClick={() => handleChangeCategory(cat)}
            >
              {cat}
            </TabButton>
          ))}
        </TabBar>
        <ScrollButton onClick={() => scrollTabBar(100)}>{">"}</ScrollButton>
      </TabContainer>
      <JokeList>
        {jokes ? (
          jokes.map((joke: Joke) => (
            <JokeItem key={joke.id}>
              {joke.type === "single"
                ? joke.joke
                : `${joke.setup} ${joke.delivery}`}
            </JokeItem>
          ))
        ) : (
          <p>No jokes today😔</p>
        )}
      </JokeList>
      <JokeButton onClick={regenerateJokes} disabled={loading}>
        {loading && <CircularLoader />}
        Can't stop Laughing?😂See more jokes
      </JokeButton>
    </SectionWrapper>
  );
};

export default Jokes;

const TabContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  max-width: 100%;
  margin-bottom: 20px;
`;

const TabBar = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabButton = styled.button<{ $active: boolean }>`
  border: none;
  padding: 0 10px;
  margin: 0 10px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border-bottom: ${({ $active, theme }) =>
    $active ? `3px solid ${theme.colors.main}` : "none"};


  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ $active, theme }) => !$active && theme.colors.main};
    opacity: 0;
    transform-origin: center center;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    transform: scaleX(0);
  }

  &:hover {
    &:after {
      opacity: 1;
      transform: scaleX(1);
    }
`;

const ScrollButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 1.5rem;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const JokeList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 768px;
`;

const JokeItem = styled.li`
  margin: 20px 0;

  &:before {
    content: "🤣";
    margin-right: 5px;
  }
`;

const JokeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.background};
  font-size: 0.75rem;
  border: none;
  padding: 10px;
  margin: 10px 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  outline: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const CircularLoader = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.main};
  border-top: 4px solid ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }
`;
