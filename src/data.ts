import image1 from "./images/Art-Img-1.png";
import image2 from "./images/Art-Img-2.jpg";
import image3 from "./images/Art-Img-3.png";
import icon1 from "./images/Icons/Icon (1).svg";
import icon2 from "./images/Icons/Icon (2).svg";
import icon3 from "./images/Icons/Icon (3).svg";
import icon4 from "./images/Icons/Icon (4).svg";
import icon5 from "./images/Icons/Icon (5).svg";
import icon6 from "./images/Icons/icon-6.svg";
import fb from "./images/img/facebook.svg"
import google from "./images/img/Ini_tech.svg"
import umbrella from "./images/img/Google.svg"
import tech from "./images/img/Umbrella.svg"
import Princy from "./images/img/Princy.jpg"
import Stef from "./images/img/Stef.jpg"
import Kat from "./images/img/Kat.jpg"
import icon from "./images/img/inovate.png"
import own from "./images/img/Own.png"
import team from "./images/img/Team.png"
import commit from "./images/img/Commit.png"
import positive from "./images/img/Positive.png"
import analytic from "./images/img/analytics.png"
import socialMedia from "./images/img/socialMedia.png"
import boots from "./images/img/boots.png"
import innovative from "./images/img/innovative.png"
import technology from "./images/img/technology.png"
import platform from "./images/img/platform.png"

export type TierName = 'Standard' | 'Super' | 'Supreme';

export type Tiers = {
  [key in TierName]: boolean | string;
};

export interface Feature {
  name: string;
  tiers: Tiers;
}

const enterprise: string =
  "Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.";

export const footerData = [
  {
    id: 1,
    name: "3 Social Set",
  },
  {
    id: 2,
    name: "150 posts per social",
  },

  {
    id: 3,
    name: "5 users",
  },
  {
    id: 4,
    name: "Phone Support",
  },
  {
    id: 5,
    name: "Planning & publishing",
  },
  {
    id: 6,
    name: "Analytics tools",
  },
];

export const resourcesPages = [
  {
    id: 1,
    page: "Home",
  },
  {
    id: 2,
    page: "About Us",
  },
  {
    id: 3,
    page: "Contact",
  },
  {
    id: 4,
    page: "Blog",
  },
  {
    id: 5,
    page: "Blog Post",
  },
  {
    id: 6,
    page: "Pricing",
  },
  {
    id: 7,
    page: "Pricing Single",
  },
];

export const resourcesPageTwo = [
  {
    id: 3,
    page: "Careers",
  },
  {
    id: 4,
    page: "Why Choose us",
  },
  {
    id: 5,
    page: "Case Studies",
  },
  {
    id: 6,
    page: "Case Study Single",
  },
];

export const utilityPages = [
  {
    id: 1,
    page: "Start here",
  },
  {
    id: 2,
    page: "Style guide",
  },
  {
    id: 3,
    page: "Password protected",
  },
  {
    id: 4,
    page: "404 Not found",
  },
  {
    id: 5,
    page: "Licenses",
  },
  {
    id: 6,
    page: "Changelog",
  },
  {
    id: 7,
    page: "Career Single",
  },
];

export const articles = [
  {
    id: 1,
    Image: image1,
    title: "Detailed insights for your social media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    date: "Jan 1, 2023",
    read: "3 min read",
  },
  {
    id: 2,
    Image: image2,
    title: "New Device Invention for Digital Platforms",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    date: "Jan 1, 2023",
    read: "3 min read",
  },
  {
    id: 3,
    Image: image3,
    title: "Business Strategy Make His Goal Acheive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    date: "Jan 1, 2023",
    read: "3 min read",
  },
];

export const stats = [
  {
    id: 1,
    title: "10 years",
    description: "in Business",
  },
  {
    id: 2,
    title: "75,000+",
    description: "customers",
  },
  {
    id: 3,
    title: "100k",
    description: "monthly blog readers",
  },
  {
    id: 4,
    title: "1.2m+",
    description: "social followers",
  },
];

export const features = [
  {
    id: 1,
    header: "publish",
    title: "Save time by scheduling posts",
    description: enterprise,
    icon: icon1,
    start: "$7.99",
  },
  {
    id: 2,
    header: "respond",
    title: "All your conversations in one place",
    description: enterprise,
    icon: icon2,
    start: "get started",
  },
  {
    id: 3,
    header: "automate",
    title: "Truly automate your social media",
    description: enterprise,
    icon: icon3,
    start: "get started",
  },
  {
    id: 4,
    header: "monitor",
    title: "Save time by scheduling postsListen to what they say about you",
    description: enterprise,
    icon: icon4,
    start: "get started",
  },
  {
    id: 5,
    header: "analyze",
    title: "Detailed insights for your social media",
    description: enterprise,
    icon: icon5,
    start: "get started",
  },
  {
    id: 6,
    header: "creative content",
    title: "Artificial Intelligence trained Team",
    description: enterprise,
    icon: icon6,
    start: "get started",
  },
];

export const socialsData = [
  {
    id: "01",
    title: "Create your free account",
    description: enterprise,
  },
  {
    id: "02",
    title: "Connect your channels",
    description: enterprise,
  },
  {
    id: "03",
    title: "Schedule your posts",
    description: enterprise,
  },
  {
    id: "04",
    title: "Publish & get your planning on point",
    description: enterprise,
  },
];

export const blogList = [
  {
    id: 1,
    title: "Listen to what they say about you",
  },
  {
    id: 2,
    title: "Randomised words which don't look even slightly believable.",
  },
  {
    id: 3,
    title:
      "Lorem Ipsum generators on the Internet tend to repeat predefined chunks",
  },
  {
    id: 4,
    title: "Automate multiple scenarios and eliminate tedious tasks.",
  },
];


export const investorsData = [
  {
    id: 1,
    img: fb,
    paragraph : "One of a select group of Facebook Marketing Partners in Advertising Technology and Management.Building the ddfgan enterprisedoesn't need nightmare."
  },
  {
    id: 2,
    img: tech,
    paragraph : "One of a select group of Facebook Marketing Partners in Advertising Technology and Management.Building the ddfgan enterprisedoesn't need nightmare."
  },
  {
    id: 3,
    img: google,
    paragraph : "One of a select group of Facebook Marketing Partners in Advertising Technology and Management.Building the ddfgan enterprisedoesn't need nightmare."
  },
  {
    id: 4,
    img: umbrella,
    paragraph : "One of a select group of Facebook Marketing Partners in Advertising Technology and Management.Building the ddfgan enterprisedoesn't need nightmare."
  }
]

export const teamData = [
  {
    id: 1,
    img: Princy,
    name: "Princy Flora",
    position: "Co-Founder of Alofirm",
  },
  {
     id: 2,
    img: Stef,
    name: "Stefhen Richards",
    position: "CEO & Art Director",
  },
  {
     id: 3,
    img: Kat,
    name: "Katherine",
    position: "Head Of Finance",
  }
]

export const valueData  = [
  {
    id:1,
    icon: icon,
    title: "Innovation",
    paragraph : "Building an enterprise doesn't need nightmare or cost your thousandsFelix is purpose built.",
  },
  {id:2,
    icon: icon,
    title: "Super",
    paragraph : "Building an enterprise doesn't need nightmare or cost your thousands Felix is purpose built.",},
  {id:3,
    icon: own,
    title: "Ownership",
    paragraph : "Building an enterprise doesn't need nightmare or cost your thousandsFelix is purpose built",},
  {id:4,
    icon: team,
    title: "Team Work",
    paragraph : "Building an enterprise doesn't need nightmare or cost your thousandsFelix is purpose built",},
  {id:5,
    icon: commit,
    title: "Commitment",
    paragraph : "Building an enterprise doesn't need nightmare or cost your thousandsFelix is purpose built.",},
  {id:6,
    icon: positive,
    title: "Positivity",
    paragraph : "Building an enterprise doesn't need nightmare or cost your thousandsFelix is purpose built.",},
  
]

export const tiers = [
  {
    name: 'Standard',
    id: 0,
    href: '#',
    priceMonthly: '$7.99',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: true,
  },
  {
    name: 'Standard',
    id: 1,
    href: '#',
    priceMonthly: '$14.99',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Supreme',
    id: 2,
    href: '#',
    priceMonthly: '$19.99',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
]


export const ComparisonTiers = [
  {
    name: 'Standard' as const,
    description: 'Everything you need to get started.',
    priceMonthly: '$7.99',
    href: '#',
    highlights: [
      { description: 'Facebook' },
      { description: 'Twitter' },
      { description: 'Instagram' },
      { description: 'Google For My Business', disabled: true },
      { description: 'Single sign-on (SSO)', disabled: true },
      { description: 'Priority phone support', disabled: true },
    ],
  },
  {
    name: 'Super' as const,
    description: 'All the extras for your growing team.',
    priceMonthly: '$14.99',
    href: '#',
    highlights: [
      { description: 'Custom domains' },
      { description: 'Edge content delivery' },
      { description: 'Advanced analytics' },
      { description: 'Quarterly workshops' },
      { description: 'Single sign-on (SSO)', disabled: true },
      { description: 'Priority phone support', disabled: true },
    ],
  },
  {
    name: 'Supreme' as const,
    description: 'Added flexibility at Supreme:.',
    priceMonthly: '$19.99',
    href: '#',
    highlights: [
      { description: 'Custom domains' },
      { description: 'Edge content delivery' },
      { description: 'Advanced analytics' },
      { description: 'Quarterly workshops' },
      { description: 'Single sign-on (SSO)' },
      { description: 'Priority phone support' },
    ],
  },
];

export const sections: { name: string; features: Feature[] }[] = [
  {
    name: 'Social Platforms',
    features: [
      { name: 'Facebook', tiers: { Standard: true, Super: true, Supreme: true } },
      { name: 'Instagram', tiers: { Standard: false, Super: false, Supreme: true } },
      { name: 'Twitter', tiers: {  Standard: false, Super: false, Supreme: true} },
      { name: 'Google For My Business', tiers: { Standard: false, Super: false, Supreme: true } },
    ],
  },
  {
    name: 'Publish',
    features: [
      { name: 'Monthly Posts', tiers: { Standard: true, Super: true, Supreme: true } },
      { name: 'Publish Images', tiers: { Standard: false, Super: true, Supreme: true } },
      { name: 'Post Recycling', tiers: { Standard: false, Super: false, Supreme: true } },
      { name: 'Custom Queues', tiers: { Standard: false, Super: false, Supreme: true } },
      { name: 'Hashtag Suggestions', tiers: { Standard: false, Super: false, Supreme: true }},
      { name: 'Story Approvals', tiers: { Standard: false, Super: false, Supreme: true }},
    ],
  },
  {
    name: 'Analyze',
    features: [
      { name: 'Post Insights', tiers: { Standard: true, Super: true, Supreme: true } },
      { name: 'Followers Growth Trends', tiers: { Standard: false, Super: true, Supreme: true } },
      { name: 'Top Performing Posts	', tiers: { Standard: false, Super: false, Supreme: true } },
      { name: 'Content Approvals', tiers: { Standard: false, Super: false, Supreme: true } },
      { name: 'Leave notes', tiers: { Standard: false, Super: false, Supreme: true } },
      { name: 'Live Chat', tiers: { Standard: false, Super: false, Supreme: true } },
    ],
  },
];

export const caseStudyData = [
  {
    id: 1,
    name: "Analytic Solutions",
    sub: "IT Technology",
    backgroud: "#FFEDFE",
    image: analytic
  },
  {
    id: 2,
    name: "2022 Social Media Benchmark Report",
    sub: "cloud services",
    backgroud: "#FFE7E3",
    image: socialMedia
  },
  {
    id: 3,
    name: "Boosts Reach, Recruiting, and Revenue",
    sub: "IT Technology",
    backgroud: "#DAE4FF",
    image: boots
  },
  {
    id: 4,
    name: "Innovative Interfaces",
    sub: "Cyber Security",
    backgroud: "#FFE7CA",
    image: innovative
  },
  {
    id: 5,
    name: "Analytic Solutions",
    sub: "IT Technology",
    backgroud: "#FFD7E3",
    image: technology
  },
  {
    id: 6,
    name: "Platform Integration",
    sub: "IT Technology",
    backgroud: "#D4F1EB",
    image: platform
  },
  
]