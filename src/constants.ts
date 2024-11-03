type RouteSchema = {
  title: string;
  href: string;
  icon: string;
  description?: string;
};

export const ROUTES: RouteSchema[] = [
  {
    title: "Overview",
    href: "/",
    icon: "icon-nav-overview",
    description: "Overview of your account",
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: "icon-nav-transactions",
    description: "List of all your transactions",
  },
  {
    title: "Budgets",
    href: "/budgets",
    icon: "icon-nav-budgets",
    description: "List of all your budgets",
  },
  {
    title: "Pots",
    href: "/pots",
    icon: "icon-nav-pots",
    description: "List of all your pots",
  },
  {
    title: "Recurring bills",
    href: "/recurring-bills",
    icon: "icon-nav-recurring-bills",
    description: "List of all your recurring bills",
  },
];
