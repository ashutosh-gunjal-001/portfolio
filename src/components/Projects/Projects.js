import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="NutriGen"
              description="NutriGen is a Gen AI-powered web app that serves as a personal nutrition coach. It provides personalized meal plans, nutrition analysis, and 24/7 AI-based coaching using Google Gemini and USDA APIs."
              ghLink="hhttps://github.com/ashutosh-gunjal-001/nutrigen-ai"
              demoLink="https://splendid-phoenix-533e04.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Invisible-MIDI-Instrument"
              description="Invisible MIDI Instrument is a touchless, Arduino-powered MIDI controller that enables users to play musical notes and switch instruments in real time using IR proximity sensors and a gesture-based interface. Designed for accessibility, education, and expressive digital performances."
              ghLink="https://github.com/ashutosh-gunjal-001/Invisible-MIDI-Instrument"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="cvla-interactive-ai-lab"
              description="CVLA Interactive AI Lab is a free, AI-powered, interactive web app that allows users to explore Complex Variables and Linear Algebra topics visually. Designed for education and self-learning, it uses lightweight AI models and math engines to visualize functions, solve equations, and simulate transformations — right in your browser."
              ghLink="https://github.com/ashutosh-gunjal-001/cvla-interactive-ai-lab"        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="mnist_digit_classifier"
              description="This project uses a Convolutional Neural Network (CNN) built with PyTorch to classify handwritten digits from the MNIST dataset."
              ghLink="https://github.com/ashutosh-gunjal-001/mnist_digit_classifier"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="gamified-daily-task-manager"
              description="A motivating task management application with gamification elements to make daily productivity more engaging and rewarding.."
              ghLink="https://github.com/ashutosh-gunjal-001/gamified-daily-task-manager"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="dad-jokes-extension"
              description="Chrome Extension for Dad Jokes"
              ghLink="https://github.com/ashutosh-gunjal-001/dad-jokes-extension"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
