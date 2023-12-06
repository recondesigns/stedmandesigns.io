import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { Section } from "../../..";
import { Card, Button } from "../../..";
import CardImage from "./CardImage";
import ProjectLinks from "./ProjectLinks";
import projectsList from "../../../../assets/projectsList";

const StyledSection = styled(Section)`
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 20px;

  & > div:last-child {
    margin-bottom: 0px;
  }

  @media (min-width: 1024px) {
    gap: 32px;
  }
`;

const Wrapper = styled("div")`
  position: relative;
  box-sizing: border-box;
  grid-column: span 12;

  @media (min-width: 576px) {
    grid-column: span 6;
  }

  @media (min-width: 1024px) {
    grid-column: span 6;
  }

  @media (min-width: 1200px) {
    grid-column: span 4;
  }

  @media (min-width: 1600px) {
    grid-column: span 3;
  }
`;

const H5 = styled("h4")`
  margin: 0px;
  position: relative;
  box-sizing: border-box;
  grid-column: span 12;
  font-size: 24px;
  line-height: 28px;
  color: #586165;
`;

const CardTitle = styled("h4")`
  position: relative;
  box-sizing: border-box;
  color: #586165;
  margin: 0px 0px 8px 0px;
`;

const CardDescription = styled("p")`
  margin: 0px 0px 0px 0px;
  position: relative;
  box-sizing: border-box;
  position: relative;
  box-sizing: border-box;
  display: block;
  font-weight: 400;
  color: #586165;
  color: rgba(88, 97, 101, 0.8);
  font-size: 15px;
  line-height: 20px;
`;

const StyledButton = styled(Button)`
  border-color: dodgerblue;
  color: dodgerblue;

  &:hover {
    background: dodgerblue;
  }

  &:disabled {
    border-color: #586165;
    background: #D9D9D9;
    cursor: not-allowed;
  },
`;

export default function PreviewSection() {
  return (
    <StyledSection>
      <H5>Dev projects</H5>
      {projectsList.map((project, idx) => (
        <Wrapper key={idx}>
          <Card>
            <div>
              <CardImage image={project.previewImage} />
              <CardTitle>{project.title}</CardTitle>
              <div
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  margin: "0px 0px 16px 0px",
                  height: "80px",
                  maxHeight: "80px",
                  overflow: "hidden",
                }}
              >
                <CardDescription>{project.description}</CardDescription>
              </div>
              <ProjectLinks links={project.projectLinks} />
              <Button
                buttonStyle="secondary"
                onclick={() => navigate(project.projectPath)}
                label="See more"
                isFullWidth={true}
              ></Button>
            </div>
          </Card>
        </Wrapper>
      ))}
      <Wrapper>
        <Card style={{ height: "100%" }}>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <CardImage image={null} />
              <CardTitle>Other dev projects</CardTitle>
              <div
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  margin: "0px 0px 0px 0px",
                  height: "80px",
                  maxHeight: "80px",
                  overflow: "hidden",
                }}
              >
                <CardDescription>
                  Click the button to see my other projects.
                </CardDescription>
              </div>
            </div>
            <StyledButton
              buttonStyle="secondary"
              onclick={() => alert("Button clicked.")}
              label="View projects"
              isFullWidth={true}
            />
          </div>
        </Card>
      </Wrapper>
    </StyledSection>
  );
}
