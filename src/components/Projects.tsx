import styled from "styled-components";
import GridWrap from "./shared/GridWrap";
import SectionWrapper from "./shared/SectionWrapper";
import { projects } from "../constants";
import { github, readme } from "../assets";
import React from "react";

const Projects = () => {
  return (
    <SectionWrapper>
      <h2>MY WORK</h2>
      <h1>Projects🛠️.</h1>
      <p>
        The following projects showcase my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories, live demos, and/or login credentials (if
        necessary) in it. They reflect my ability to solve complex problems,
        work with different technologies, and manage projects effectively.
      </p>
      <GridWrap $projects>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            className={project.link ? "clickable" : ""}
            onClick={
              project.link
                ? () => window.open(project.link, "_blank")
                : undefined
            }
          >
            <ProjectHeader>
              <img src={project.image} alt={project.name} />
              <ProjectLinks>
                {project.creds && (
                  <div onClick={() => window.open(project.creds, "_blank")}>
                    <img src={readme} alt="source code" />
                  </div>
                )}
                {project.source_code_link && (
                  <div
                    onClick={() =>
                      window.open(project.source_code_link, "_blank")
                    }
                  >
                    <img src={github} alt="source code" />
                  </div>
                )}
              </ProjectLinks>
            </ProjectHeader>
            <ProjectDescription>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </ProjectDescription>
            <ProjectTags>
              {project.tags.map((tag, index) => (
                <p key={`project-tag-${index}`}>{tag}</p>
              ))}
            </ProjectTags>
          </ProjectCard>
        ))}
      </GridWrap>
    </SectionWrapper>
  );
};

export default Projects;

const ProjectCard = styled.div`
  width: 100%;
  max-width: 360px;
  padding: 1.25rem;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-out;

  &.clickable {
    cursor: pointer;
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectHeader = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 95%;
    border-radius: ${({ theme }) => theme.borderRadius};
    object-fit: contain;
    scale: 1.1;
    object-position: center;
  }
`;

const ProjectLinks = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  margin: 0.75rem;

  div {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 0.25rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.main};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.25s ease-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
    border-radius: 50%;
  }
`;

const ProjectDescription = styled(React.Fragment)`
  p {
    font-size: 0.8rem;
    font-weight: 300;
    margin-top: 0.5rem;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;

  p {
    font-size: 0.8rem;
    font-weight: 300;

    &::before {
      content: "#";
    }

    &:nth-child(1) {
      color: #ff8c00;
    }

    &:nth-child(2) {
      color: #4caf50;
    }

    &:nth-child(3) {
      color: #2196f3;
    }

    &:nth-child(4) {
      color: #e91e63;
    }
  }
`;
