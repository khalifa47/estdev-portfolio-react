import styled from "styled-components";
import { technologies } from "../constants";
import GridWrap from "./shared/GridWrap";

const Tech = () => {
  return (
    <TechContainer>
      <GridWrap>
        {technologies.map((tech, index) => (
          <TechItem key={`tech-${index}`}>
            <img src={tech.icon} alt={tech.name} />
            <p>{tech.name}</p>
          </TechItem>
        ))}
      </GridWrap>
    </TechContainer>
  );
};

export default Tech;

const TechContainer = styled.div`
  padding-left: 8rem;
  padding-right: 8rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const TechItem = styled.div`
  width: 7rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
  }
  img {
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
    transition: all 0.25s ease-out;
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;
