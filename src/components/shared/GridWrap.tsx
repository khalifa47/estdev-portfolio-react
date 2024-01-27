import styled from "styled-components";

const GridWrap = styled.div<{ $projects?: boolean }>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  ${(props) => props.$projects && `margin-top: 3rem;`}
`;

export default GridWrap;
