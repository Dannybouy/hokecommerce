export const testimonials = [
  {
    name: "Orlando Diggs",
    role: "Position, Company name",
    image: "/testimonial-img.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Mollie Hall",
    role: "Position, Company name",
    image: "/testimonial-img.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Lori Bryson",
    role: "Position, Company name",
    image: "/testimonial-img.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Lori Bryson",
    role: "Position, Company name",
    image: "/testimonial-img.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Lori Bryson",
    role: "Position, Company name",
    image: "/testimonial-img.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
];

export const AccordionContentList = [
  {
    id: "1",
    title: "How do i place an order?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quaevel officia nobis aut, enim maxime exercitationem placeat! Illumvoluptate vero id placeat cumque? Harum, possimus Ipsa odit consectetur voluptate",
  },
  {
    id: "2",
    title: " Can I change or cancel my order after placing it?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quaevel officia nobis aut, enim maxime exercitationem placeat! Illumvoluptate vero id placeat cumque? Harum, possimus Ipsa odit consectetur voluptate",
  },
  {
    id: "3",
    title: " How can I track my order?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quaevel officia nobis aut, enim maxime exercitationem placeat! Illumvoluptate vero id placeat cumque? Harum, possimus Ipsa odit consectetur voluptate",
  },
  {
    id: "4",
    title: " Do you offer wholesale pricing?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quaevel officia nobis aut, enim maxime exercitationem placeat! Illumvoluptate vero id placeat cumque? Harum, possimus Ipsa odit consectetur voluptate",
  },
  {
    id: "5",
    title: "Where do you deliver?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quaevel officia nobis aut, enim maxime exercitationem placeat! Illumvoluptate vero id placeat cumque? Harum, possimus Ipsa odit consectetur voluptate",
  },
  {
    id: "6",
    title: " How long does delivery take?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quaevel officia nobis aut, enim maxime exercitationem placeat! Illumvoluptate vero id placeat cumque? Harum, possimus Ipsa odit consectetur voluptate",
  },
  {
    id: "7",
    title: " How much is delivery?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quaevel officia nobis aut, enim maxime exercitationem placeat! Illumvoluptate vero id placeat cumque? Harum, possimus Ipsa odit consectetur voluptate",
  },
  {
    id: "8",
    title: "Can I pay on delivery?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quaevel officia nobis aut, enim maxime exercitationem placeat! Illumvoluptate vero id placeat cumque? Harum, possimus Ipsa odit consectetur voluptate",
  },
  {
    id: "9",
    title: "What payment options do you accept?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quaevel officia nobis aut, enim maxime exercitationem placeat! Illumvoluptate vero id placeat cumque? Harum, possimus Ipsa odit consectetur voluptate",
  },
  {
    id: "10",
    title: " Do you accept returns?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quaevel officia nobis aut, enim maxime exercitationem placeat! Illumvoluptate vero id placeat cumque? Harum, possimus Ipsa odit consectetur voluptate",
  },
  {
    id: "11",
    title: "Are your products 100% authentic?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quaevel officia nobis aut, enim maxime exercitationem placeat! Illumvoluptate vero id placeat cumque? Harum, possimus Ipsa odit consectetur voluptate",
  },
  {
    id: "12",
    title: "How do I know which products are right for my skin?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quaevel officia nobis aut, enim maxime exercitationem placeat! Illumvoluptate vero id placeat cumque? Harum, possimus Ipsa odit consectetur voluptate",
  },
  {
    id: "13",
    title: " Do you sell skin-lightening products?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quaevel officia nobis aut, enim maxime exercitationem placeat! Illumvoluptate vero id placeat cumque? Harum, possimus Ipsa odit consectetur voluptate",
  },
];

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    emoji: string;
  }[];
}

export const Questions: Question[] = [
  {
    id: 1,
    question:
      "How does your skin feel after washing with a gentle cleanser (before applying moisturizer)?",
    options: [
      { text: "Tight & dry", emoji: "🍂" },
      { text: "Comfortable, neither oily nor dry", emoji: "😌" },
      { text: "Slightly oily in the T-zone but normal elsewhere", emoji: "" },
      { text: "Oily all over the face", emoji: "" },
    ],
  },
  {
    id: 2,
    question: "How often does your skin get shiny throughout the day?",
    options: [
      { text: "Rarely, mostly feels dry", emoji: "🌿" },
      { text: "Only my T-zone gets shiny", emoji: "✨" },
      { text: "Always shiny everywhere", emoji: "💦" },
    ],
  },
  {
    id: 3,
    question: "Do you experience flakiness or rough patches?",
    options: [
      { text: "Yes, often", emoji: "😔" },
      { text: "Occasionally", emoji: "😕" },
      { text: "Never", emoji: "🚀" },
    ],
  },
  {
    id: 4,
    question: "How visible are your pores?",
    options: [
      { text: "Small and barely visible", emoji: "🔍" },
      { text: "Medium-sized, noticeable in T-zone", emoji: "" },
      { text: "Large and noticeable everywhere", emoji: "" },
    ],
  },
  {
    id: 5,
    question: "How does your skin react to new products?",
    options: [
      { text: "Often sensitive, gets irritated easily", emoji: "" },
      { text: "Usually fine, but occasional breakouts", emoji: "" },
      { text: "Rarely reacts to anything", emoji: "" },
    ],
  },
];
