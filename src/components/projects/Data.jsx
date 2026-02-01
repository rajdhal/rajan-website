// Placeholder images - replace with actual project screenshots
import image1 from "../../assets/circle.png"; // Placeholder for trOCR
import image2 from "../../assets/circle.png"; // Placeholder for Notetake

export const projects = [
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
