import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionWrapper from "./shared/SectionWrapper";
import { experiences } from "../constants";
import styled from "styled-components";

const ExperienceCard = ({
  experience,
}: {
  experience: (typeof experiences)[0];
}) => {
  return (
    <VerticalTimelineElement
      date={experience.date}
      contentStyle={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <IconContainer>
          <img src={experience.icon} alt={experience.company_name} />
        </IconContainer>
      }
    >
      <WorkContainer>
        <h3>{experience.title}</h3>
        <p>{experience.company_name}</p>
      </WorkContainer>

      <ExperiencePoints>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ExperiencePoints>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <h2>WHAT I HAVE DONE SO FAR</h2>
      <h1>Experience.</h1>
      <VerticalTimeline lineColor="#e8e8e8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </SectionWrapper>
  );
};

export default Experience;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }
`;

const WorkContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.colors.main};
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }
`;

const ExperiencePoints = styled.ul`
  list-style: disc;
  margin-left: 1rem;
  margin-top: 1rem;

  li {
    margin-bottom: 0.5rem;
    letter-spacing: 0.05em;
    padding-left: 0.25rem;
    font-size: 0.875rem;
  }
`;
