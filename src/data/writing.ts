export interface WritingItem {
  title: string;
  href?: string;
  meta: string;
  /** ISO publication date, e.g. 2025-02-25 */
  date?: string;
}

export const writing: WritingItem[] = [
  {
    title: "Who will protect you now?",
    href: "https://thephiladelphiacitizen.org/guest-commentary-who-will-protect-you-now/",
    meta: "op-ed · cfpb",
    date: "2025-02-25",
  },
  {
    title: "Philadelphia FY27 budget interactive",
    href: "https://thephiladelphiacitizen.org/mayor-parker-2026-budget/",
    meta: "dataviz · philadelphia",
  },
  {
    title: "Pennsylvania 2026-27 budget interactive",
    href: "https://thephiladelphiacitizen.org/pa-budget-2026/",
    meta: "dataviz · pennsylvania",
  },
];
