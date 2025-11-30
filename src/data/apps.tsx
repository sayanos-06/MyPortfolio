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
    linkGitHub: "https://github.com/The-Breakroom-Carousal/HazardIQ",
    linkApk: "https://github.com/The-Breakroom-Carousal/HazardIQ/releases/download/v1.0.0/app-debug.apk",
    linkPlayStore: "",
    screenshots: ["/screenshots/h1.png", "/screenshots/h2.png"],
    description:
      "HazardIQ+ helps citizens stay informed during emergencies with real-time hazard alerts, SOS requests, and map-based visualization."
  },
    
];