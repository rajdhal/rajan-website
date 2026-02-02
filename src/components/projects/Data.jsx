import image1 from "../../assets/trOCR.png";
import image2 from "../../assets/Notetake.png";
import websiteLight from "../../assets/websiteLight.png";
import websiteDark from "../../assets/websiteDark.png";

export const projects = [
  {
    title: "Personal Portfolio",
    image: websiteLight,
    imageDark: websiteDark,
    description:
      "Modern responsive portfolio website with dark mode, built with React and deployed on GitHub Pages.",
    tags: ["React", "JavaScript", "CSS", "GitHub Pages"],
    link: "https://github.com/rajdhal/rajan-website",
  },
  {
    title: "AI Data Processing Platform",
    image: image1,
    description:
      "End-to-end ML solution for automating handwritten data recognition with 95%+ accuracy, built in partnership with University of Windsor.",
    tags: ["Python", "YOLOv8", "trOCR", "PyTorch", "Gradio"],
    link: "https://github.com/rajdhal/trOCR",
  },
  {
    title: "Notetake",
    image: image2,
    description:
      "Django web app for uploading and sharing class documents with user authentication, inline PDF viewing, and RESTful API.",
    tags: ["Python", "Django", "REST API", "PostgreSQL"],
    link: "https://github.com/rajdhal/Notetake",
  },
];

export default projects;
