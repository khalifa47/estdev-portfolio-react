import styled from "styled-components";

const SectionWrapper = styled.section<{ about?: boolean }>`
  display: flex;
  justify-content: ${({ about }) => (about ? "space-between" : "center")};
  flex-direction: ${({ about }) => (about ? "row" : "column")};
  align-items: center;
  padding: 4rem;

  ${({ about }) =>
    about &&
    `
    flex-wrap: nowrap;
    gap: 1.25rem;
    
    @media screen and (max-width: 768px) {
      flex-wrap: wrap-reverse;
      justify-content: center;
    }
  `}
`;

export default SectionWrapper;
