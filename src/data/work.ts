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
          "Interactive dashboard I built at Philadelphia’s City Controller’s Office. I now maintain it pro bono for the Civic Coalition to Save Lives.",
        meta: "public-data · geospatial · dataviz · philadelphia",
      },
      {
        title: "Fair Measure Philadelphia",
        href: "/fair-measure",
        description:
          "An independent assessment-integrity project that trains machine-learning models on public property records to flag likely over- and under-assessed homes and support appeals.",
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
          "A neighborhood well-being dashboard developed at the Philadelphia City Controller’s Office.",
        meta: "civic-indicators · public-dashboard · philadelphia",
      },
      {
        title: "Geospatial Data Science in Python",
        href: "https://musa-550-fall-2023.github.io/",
        description:
          "Curriculum and materials for the Python geospatial data science course I developed and taught in the University of Pennsylvania’s Master of Urban Spatial Analytics program.",
        meta: "teaching · python · geospatial · public-policy",
      },
      {
        title: "nbodykit",
        href: "https://nbodykit.readthedocs.io",
        description:
          "An open-source, MPI-parallel Python toolkit for large cosmology datasets that I co-developed during my PhD. I’m first author of the paper describing it.",
        meta: "open-source · python · mpi · cosmology",
      },
      {
        title: "Parking Jawn",
        href: "https://parkingjawn.com/",
        description:
          "An older civic data project exploring parking violations in Philadelphia.",
        meta: "archived · maps · civic-data",
      },
    ],
  },
];
