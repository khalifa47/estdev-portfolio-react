import styled from "styled-components";

const SectionWrapper = styled.section<{ $about?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$about ? "space-between" : "center")};
  flex-direction: ${(props) => (props.$about ? "row" : "column")};
  align-items: center;
  padding: 4rem;

  @media screen and (max-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  ${(props) =>
    props.$about
      ? `
    flex-wrap: nowrap;
    gap: 1.25rem;
    
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  `
      : `
    h1 {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      text-align: center;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 300;
      margin-bottom: 0.5rem;
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }
    }
`}
`;

export default SectionWrapper;
