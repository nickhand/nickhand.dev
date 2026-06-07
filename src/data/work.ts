export interface WorkItem {
  title: string;
  href?: string;
  description: string;
  meta: string;
}

export const work: WorkItem[] = [
  {
    title: "Mapping Philadelphia's Gun Violence",
    href: "/philly-gun-violence-map",
    description:
      "Interactive public data dashboard tracking shootings using public records, geospatial analysis, and web-based visualization.",
    meta: "public-data · geospatial · dataviz · philadelphia",
  },
  {
    title: "ProgressPHL",
    href: "https://controller.phila.gov/philadelphia-audits/progressphl/",
    description:
      "A neighborhood well-being dashboard developed at the Philadelphia City Controller's Office.",
    meta: "civic-indicators · public-dashboard · philadelphia",
  },
  {
    title: "Geospatial Data Science in Python",
    href: "https://musa-550-fall-2023.github.io/",
    description:
      "Course materials for a graduate course I taught at the University of Pennsylvania.",
    meta: "teaching · python · geospatial · public-policy",
  },
  {
    title: "Parking Jawn",
    href: "https://parkingjawn.com/",
    description:
      "An older civic data project exploring parking violations in Philadelphia.",
    meta: "archived · maps · civic-data",
  },
];
