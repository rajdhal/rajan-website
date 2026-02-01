// Placeholder images - replace with actual project screenshots
import image1 from "../../assets/circle.png"; // Placeholder for trOCR
import image2 from "../../assets/circle.png"; // Placeholder for Notetake

export const projects = [
  {
    title: "trOCR - Sign-In Sheet Recognizer",
    image: image1,
    description:
      "University of Windsor SmartCampus text recognition using custom trOCR and YOLO object detection with a Gradio web interface.",
    tags: ["Python", "trOCR", "YOLO", "Gradio", "Machine Learning"],
    link: "https://github.com/rajdhal/trOCR",
  },
  {
    title: "Notetake",
    image: image2,
    description:
      "Django web app for uploading and sharing class-specific documents with user authentication, inline PDF viewing, and RESTful API.",
    tags: ["Python", "Django", "REST API"],
    link: "https://github.com/rajdhal/Notetake",
  },
];

export default projects;
