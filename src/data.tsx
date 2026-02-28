import {
  HiOutlineDocument,
  HiOutlineUser,
  HiOutlineViewGrid,
} from "react-icons/hi";

export const MobyDick = [
  "Loomings.",
  "The Carpet-Bag.",
  "The Spouter-Inn",
  "The Counterpane.",
  "Breakfast.",
  "The Street.",
];
// Thanks project gutenberg: https://www.gutenberg.org/cache/epub/2701/pg2701.txt

export const values = [
  {
    icon: <HiOutlineDocument className="size-6" />,
    title: "Radical Simplicity",
    description:
      "No accounts, no subscriptions, no complex databases. Just a file that lives on your machine.",
  },
  {
    icon: <HiOutlineUser className="size-6" />,
    title: "True Ownership",
    description:
      "Your data shouldn't be trapped in a proprietary cloud. A .docx file is yours forever.",
  },
  {
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
