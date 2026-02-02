import {
  MonitorCheck,
  Database,
  BarChart3,
  ClipboardList,
  FileCheck,
  GraduationCap,
  LineChart,
  MapPinHouse,
  PhoneCall,
} from "lucide-react";

import gallery1 from "@/public/gallery1.png";
import gallery2 from "@/public/gallery2.png";
import gallery3 from "@/public/gallery3.png";
import gallery4 from "@/public/gallery4.png";
import gallery5 from "@/public/gallery5.png";
import gallery6 from "@/public/gallery6.png";
import gallery7 from "@/public/gallery7.png";
import gallery8 from "@/public/gallery8.png";
import gallery9 from "@/public/gallery9.png";
import gallery10 from "@/public/gallery10.png";
import gallery11 from "@/public/gallery11.png";
import gallery12 from "@/public/gallery12.png";
import gallery13 from "@/public/gallery13.png";
import gallery14 from "@/public/gallery14.png";

import aboutBanner from "@/public/about.png";
import servicesBanner from "@/public/services.png";
import projectsBanner from "@/public/project.png";
import contactBanner from "@/public/Contact.png";

export const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const about = [
  "End-to-end MERL support",
  "Research and evaluation Services",
  "Field data collection",
  "Learning for better decisions",
];

export const aboutOtherInfo = [
  {
    title: "Mission",
    content:
      "To provide high-quality MEL, research, analytical and strategic consulting services that empower organizations to design, implement, and scale interventions backed by strong evidence and actionable insights",
    image: "/mission.png",
  },
  {
    title: "Vision",
    content:
      "To be your trusted partner for hig quality data, evidence-driven decision-making, clarity, strategy, and measurable impact.",
    image: "/vision.png",
  },
  {
    title: "Core Values",
    content: "Results that move systems, not just dashboards.",
    image: "/values.png",
  },
  {
    title: "Our Advantage",
    content: "EXPEREINCE | INSIGHT DRIVEN",
    image: "/advantages.png",
  },
];

export const servicesPage = [
  {
    id: 1,
    icon: MonitorCheck,
    topic: "MEL System Design",
    description:
      "We support organizations to design and strengthen practical, fit-for-purpose MEL systems. Our work includes the development of MEL frameworks and plans, theories of change, logic models, indicator matrices, data collection plans, and data quality assurance processes (DQAs). These systems are designed to align with program objectives, donor requirements, and implementation realities.",
  },
  {
    id: 2,
    icon: Database,
    topic: "Research and Data Collection",
    description:
      "We conduct primary research using mixed methods, combining quantitative and qualitative approaches to generate reliable and context-sensitive evidence. Our work includes participatory monitoring and evaluation approaches that engage stakeholders and ensure findings reflect lived experiences and implementation contexts.",
  },
  {
    id: 3,
    icon: BarChart3,
    topic: "Assessments and Surveys",
    description:
      "We design and implement baseline, midline, and endline studies, as well as other program assessments. This includes questionnaire development, sampling design, training of field teams, field data collection, data cleaning, analysis, and comprehensive reporting. Our assessments are structured to uncover insights, support learning, strengthen accountability, and inform program decisions.",
  },
  {
    id: 4,
    icon: ClipboardList,
    topic: "Enumerator Recruitment and Training",
    description:
      "We recruit, train, certify, and deploy enumerators and field supervisors for research and monitoring activities. Our field management approach includes daily supervision, quality control checks, and continuous support to ensure data accuracy, consistency, and adherence to ethical standards.",
  },
  {
    id: 5,
    icon: LineChart,
    topic: "Indicator Tracking & Dashboards",
    description:
      "We support ongoing performance monitoring through structured indicator tracking and data visualization. This includes the development of dashboards, regular data updates, indicator analysis, and clear visual outputs that help program teams understand trends and use data effectively.",
  },
  {
    id: 6,
    icon: GraduationCap,
    topic: "Training & Capacity Building",
    description:
      "We provide tailored training and capacity-building support to strengthen MERL skills across project teams and partner organizations. Our trainings combine practical tools, real-world examples, and hands-on coaching to improve data quality, reporting, and the use of evidence for learning and decision-making.",
  },
];
export const services = [
  {
    position: "left",
    topic: "MEL System Design",
    description:
      "Designing fit-for-purpose MEL frameworks, indicators, and monitoring systems aligned with program and donor requirements.",
    icon: MonitorCheck,
  },
  {
    position: "right",
    topic: "Research & Data Collection",
    description:
      "Conducting high-quality quantitative and qualitative research to generate reliable, context-sensitive evidence.",
    icon: Database,
  },
  {
    position: "left",
    topic: "Assessments & Surveys",
    description:
      "Implementing baseline, midline, endline, and program assessments that support learning and accountability.",
    icon: BarChart3,
  },
  {
    position: "right",
    topic: "Indicator Tracking & Dashboards",
    description:
      "Supporting ongoing performance monitoring through structured indicator tracking and data visualization.",
    icon: ClipboardList,
  },
];

export const projects = [
  {
    topic:
      "Climate Resilience and Agricultural Systems Assessment Plateau State, Nigeria",
    subTopic: "Independent Research & Data Collection Assignment",
    message:
      "Aairi-Metrics supported a climate resilience and agricultural systems assessment in semi-arid communities in Plateau State, focusing on how climate change affects agricultural productivity, access to inputs, and adaptation practices among smallholder farmers.",
    img: "/project1.png",
  },
  {
    topic:
      "Maternal and Child Health Service Delivery Monitoring – Akwa Ibom State, Nigeria",
    subTopic: "Independent Monitoring & Field Coordination Assignment",
    message:
      "Aairi-Metrics provided field monitoring and coordination support for a maternal and child health service delivery initiative focused on Vitamin A supplementation and nutrition services for women and children under five.",
    img: "/project2.png",
  },
];

export const commitment = [
  {
    name: "Sound Evidence",
    icon: FileCheck,
  },
  {
    name: "Thoughtful Analysis",
    icon: BarChart3,
  },
  {
    name: "Pratical Learning",
    icon: GraduationCap,
  },
];

export const contact = [
  {
    name: "Address",
    content: [
      {
        value: "18A Biltmore Homes Estate, Galadimawa, Abuja, Nigeria",
      },
    ],
    icon: MapPinHouse,
  },
  {
    name: "Contact",
    content: [
      {
        value: "+234 803 4053307",
      },
      {
        value: "info@aairimetric.com",
      },
    ],
    icon: PhoneCall,
  },
];

export const gallery = [
  {
    title: "Image 1",
    image: gallery1,
  },
  {
    title: "Image 2",
    image: gallery2,
  },
  {
    title: "Image 3",
    image: gallery3,
  },
  {
    title: "Image 4",
    image: gallery4,
  },
  {
    title: "Image 5",
    image: gallery5,
  },
  {
    title: "Image 6",
    image: gallery6,
  },
  {
    title: "Image 7",
    image: gallery7,
  },
  {
    title: "Image 8",
    image: gallery8,
  },
  {
    title: "Image 9",
    image: gallery9,
  },
  {
    title: "Image 10",
    image: gallery10,
  },
  {
    title: "Image 11",
    image: gallery11,
  },
  {
    title: "Image 12",
    image: gallery12,
  },
  {
    title: "Image 13",
    image: gallery13,
  },
  {
    title: "Image 14",
    image: gallery14,
  },
];

export const bannerConfig = {
  about: {
    img: aboutBanner,
  },
  services: {
    img: servicesBanner,
  },
  projects: {
    img: projectsBanner,
  },
  contact: {
    img: contactBanner,
  },
};
