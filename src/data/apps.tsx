export type AppItem = {
  slug: string;
  name: string;
  subtitle: string;
  icon: string;
  isFeatured?: boolean;
  techStack: string[];
  tags: string[];
  linkGitHub?: string;
  linkApk?: string;
  linkPlayStore?: string;
  screenshots: string[];
  description: string;
  whatsNew?: string;
  challenges?: string[];
  reviews?: string[];
  stats?: {
    downloads?: string;
    rating?: number;
  };
};

export const APPS: AppItem[] = [
  {
    slug: "hazardiq",
    name: "HazardIQ+",
    subtitle: "Real-time hazard alerts & SOS for citizens",
    icon: "/icons/hazardiq.png",
    isFeatured: true,
    techStack: ["Android", "Kotlin", "Firebase", "Maps SDK"],
    tags: ["Android", "Maps", "Realtime"],
    linkGitHub: "https://github.com/sayanos-06/HazardIQ",
    linkApk: "",
    linkPlayStore: "",
    screenshots: [
      "/screenshots/screenshot_hq_1.png",
      "/screenshots/screenshot_hq_2.png",
      "/screenshots/screenshot_hq_3.png",
      "/screenshots/screenshot_hq_4.png",
      "/screenshots/screenshot_hq_5.png",
      "/screenshots/screenshot_hq_6.png",
      "/screenshots/screenshot_hq_7.png",
      "/screenshots/screenshot_hq_8.png",
      "/screenshots/screenshot_hq_9.png",
      "/screenshots/screenshot_hq_10.png",
    ],
    description:
      "HazardIQ+ helps citizens stay informed during emergencies with real-time hazard alerts, SOS requests, and map-based visualization.",
    whatsNew:
      "v1.0 – Implemented SOS requests with live responder updates and map-based hazard zones.",
    challenges: [
      "Reduced Firestore reads by optimizing listeners and query structure.",
      "Handled flaky network with retry logic and graceful error states."
    ],
    reviews: [
      "“Planned, designed, and implemented end-to-end with solid backend thinking.”",
      "“Critical part of our hazard awareness project.”"
    ],
    stats: {
      downloads: "50+",
      rating: 4.8
    }
  }
];