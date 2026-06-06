import {
  HiOutlineCheckCircle,
  HiOutlineDocument,
  HiOutlineLightBulb,
  HiOutlineLocationMarker,
  HiOutlinePuzzle,
  HiOutlineUser,
  HiOutlineViewGrid,
  HiOutlineDocumentText,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";

// Thanks project gutenberg: https://www.gutenberg.org/cache/epub/2701/pg2701.txt

export const values = [
  {
    id: 1,
    icon: <HiOutlineDocument className="size-6" />,
    title: "Radical Simplicity",
    description:
      "No accounts, no subscriptions, no complex databases. Just a file that lives on your machine.",
  },
  {
    id: 2,
    icon: <HiOutlineUser className="size-6" />,
    title: "True Ownership",
    description:
      "Your data shouldn't be trapped in a proprietary cloud. A .docx file is yours forever.",
  },
  {
    id: 3,
    icon: <HiOutlineViewGrid className="size-6" />,
    title: "Focus by Design",
    description:
      "We stripped away the notifications and 'collaboration features' that actually just distract you.",
  },
];

export const faq = [
  {
    id: 1,
    title: "Is this a real app?",
    description:
      "No. It's better. It's a standard .docx file that you own, modify, and keep forever. We provide the methodology, you provide the work.",
  },
  {
    id: 2,
    title: "Can I use it on mobile?",
    description:
      "Yes. Use Google Docs or the Microsoft Word mobile app to access your WordDock anywhere.",
  },
  {
    id: 3,
    title: "Does it sync with my calendar?",
    description:
      "Only if you want it to. Since it's a Word doc, you can copy/paste your commitments directly into any calendar app of your choice.",
  },
];

export const sections = [
  {
    icon: <HiOutlineDocumentText />,
    title: "Cover Page",
    description:
      "Set the foundation. Name your project, define its type, and record your start date so every session begins with context.",
  },
  {
    icon: <HiOutlineQuestionMarkCircle />,
    title: "Why Does It Matter?",
    description:
      "Capture your reason before momentum fades. Two to five sentences on why this project is worth your time — just for you.",
  },
  {
    icon: <HiOutlineLocationMarker />,
    title: "Where Will It Be Located?",
    description:
      "Decide where the finished work lives — analog or digital. Knowing the destination keeps your decisions pointed in the right direction.",
  },
  {
    icon: <HiOutlineLightBulb />,
    title: "Brainstorming Dump",
    description:
      "No structure, no limits. Drop every idea, link, sketch, or constraint here before you start filtering. Capture first, organize later.",
  },
  {
    icon: <HiOutlineCheckCircle />,
    title: "Commitment & Completion",
    description:
      "Define the finish line. Set a target date, name what you plan to ship, and call out what might get cut before scope creep decides for you.",
  },
  {
    icon: <HiOutlinePuzzle />,
    title: "Reflection & Lessons Learned",
    description:
      "Close the loop. Record what shipped, what surprised you, and what you would do differently to ensure a smooth experience.",
  },
];
