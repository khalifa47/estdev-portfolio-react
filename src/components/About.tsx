import styled, { keyframes } from "styled-components";
import SectionWrapper from "./shared/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper about>
      <BioText>
        <h2>Hello World👋</h2>
        <h1>
          I'm <span>Khalifa</span>
        </h1>
        <p>
          I'm a skilled software engineer with experience in TypeScript and
          JavaScript, and expertise in React, Next.js 13, Supabase, Firebase,
          and React Native for mobile apps. I have been developing applications
          for 3 years. I'm a quick learner and collaborate closely with clients
          to create efficient, scalable, and user-friendly solutions that solve
          real-world problems.
        </p>
        <p>
          When I'm not working on projects, I like to play chess, read on tech
          trends (especially on AI), and enjoy outdoors activities.
        </p>
        <p>Let's work together to bring your ideas to life!</p>
      </BioText>
      <BioImage>
        <ProfileImage src="me.png" alt="Profile" />
      </BioImage>
    </SectionWrapper>
  );
};

export default About;

const BioText = styled.div`
  width: 50%;

  h1 {
    font-size: 4rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    margin: 1rem 0;
  }

  span {
    color: ${({ theme }) => theme.colors.main};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const BioImage = styled.div`
  width: 50%;
  max-width: 400px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const bobbing = keyframes`
0%,
100% {
  transform: translateY(0) translateX(0);
  box-shadow: -7px 7px 4px 4px rgba(0, 0, 0, 0.1);
}
50% {
  transform: translateY(-10px) translateX(10px);
  box-shadow: -10px 10px 7px 5px rgba(0, 0, 0, 0.2);
}
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border-bottom-left-radius: 50%;
  animation: ${bobbing} 3s ease-in-out infinite;
`;
