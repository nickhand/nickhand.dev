export interface WorkItem {
  title: string;
  href?: string;
  description: string;
  meta: string;
}

export interface WorkGroup {
  label: string;
  items: WorkItem[];
}

export const work: WorkGroup[] = [
  {
    label: "Independent projects",
    items: [
      {
        title: "Mapping Philadelphia’s Gun Violence",
        href: "/philly-gun-violence-map",
        description:
          "An interactive map of Philadelphia shootings I built at the City Controller’s Office. I now maintain it pro bono for the Civic Coalition to Save Lives.",
        meta: "public-data · geospatial · dataviz · philadelphia",
      },
      {
        title: "Fair Measure Philadelphia",
        href: "/fair-measure",
        description:
          "A free tool that checks whether your home’s property assessment looks fair by comparing it with an independent estimate built from public records, and helps you appeal if it doesn’t.",
        meta: "machine-learning · public-data · property-assessment · philadelphia",
      },
    ],
  },
  {
    label: "Earlier work",
    items: [
      {
        title: "ProgressPHL",
        href: "https://controller.phila.gov/philadelphia-audits/progressphl/",
        description:
          "A dashboard comparing quality of life across Philadelphia neighborhoods, built at the City Controller’s Office.",
        meta: "civic-indicators · public-dashboard · philadelphia",
      },
      {
        title: "Geospatial Data Science in Python",
        href: "https://musa-550-fall-2023.github.io/",
        description:
          "The graduate course I designed and taught at the University of Pennsylvania on analyzing maps and city data with Python.",
        meta: "teaching · python · geospatial · public-policy",
      },
      {
        title: "nbodykit",
        href: "https://nbodykit.readthedocs.io",
        description:
          "Open-source software for analyzing huge simulations of the universe, which I co-developed during my PhD. I’m first author of its paper.",
        meta: "open-source · python · mpi · cosmology",
      },
      {
        title: "Parking Jawn",
        href: "https://parkingjawn.com/",
        description:
          "An older project mapping parking tickets across Philadelphia.",
        meta: "archived · maps · civic-data",
      },
    ],
  },
];
