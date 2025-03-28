import { Code2, Layout } from 'lucide-react';

export const projects = [
  {
    title: "Egnyte AutoCAD",
    description: "Cloud support integration for AutoCAD files. Developed functionality for creating, saving, and opening AutoCAD files directly from the Egnyte cloud.",
    icon: <Layout className="text-[#0a192f]" size={24} />,
    technologies: ["AutoCAD APIs","C#", "WPF", "Egnyte API"]
  },
  {
    title: "Grit",
    description: "A construction scheduling software optimizing estimated time and efforts by creating a collaborative platform. Enhanced Angular version and made numerous UI changes; supported floor plan PDF files. Integrated third-party applications like BIM 360, Procore, Dropbox, and Google Drive.",
    icon: <Layout className="text-[#0a192f]" size={24} />,
    technologies: ["Angular", "Node.js", "Autodesk Forge", "JavaScript"]
  },
  {
    title: "BIMconnections",
    description: "Developed an application to streamline BIM data management and collaboration. Improved data integration efficiency by 30%, deployed on the App Store",
    icon: <Code2 className="text-[#0a192f]" size={24} />,
    technologies: ["Node.js", "Angular", "MongoDB", "Rest API's", "Forge"]
  },
  {
    title: "CADshare",
    description: "Developed a web-based customer portal to digitize engineering and commercial data. Delivered an easy-to-use interface enhancing user experience and data accessibility",
    icon: <Layout className="text-[#0a192f]" size={24} />,
    technologies: ["Angular", "JavaScript", "Autodesk Forge"]
  },
  {
    title: "Invicara - Digital Twin Apps",
    description: "Developed advanced applications to create digital replicas of building assets, telemetry data, enabling real-time monitoring, analysis, and predictive maintenance. Project setup, streamlining initial configurations for new deployments, Runtime JavaScript execution, enhancing performance and stability of real-time operations. Resolved viewer issues, ensuring smooth and reliable 3D model rendering. Improved Data visualization.",
    icon: <Layout className="text-[#0a192f]" size={24} />,
    technologies: ["React", "JavaScript", "HOOPS Visualize", "GIS"]
  },
  {
    title: "Flypaper",
    description: "Developed a Procore Viewer Clash Detection app in Vue 3, enabling seamless identification of design conflicts in 3D models. Optimized project setup and configurations for new deployments, implemented runtime JavaScript execution for enhanced performance, and resolved viewer issues to ensure smooth and accurate clash detection. Improved data visualization for better insights and decision-making.",
    icon: <Layout className="text-[#0a192f]" size={24} />,
    technologies: ["Vue", "Typescript", "Procore", "Node"]
  },
];