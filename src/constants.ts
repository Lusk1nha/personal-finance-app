import IconNavOverview from "./components/icons/icon-nav-overview";
import IconNavTransactions from "./components/icons/icon-nav-transactions";
import IconNavBudgets from "./components/icons/icon-nav-budgets";
import IconNavPots from "./components/icons/icon-nav-pots";
import IconNavRecurringBills from "./components/icons/icon-nav-recurring-bills";
import { Routes } from "./types/router";

type RouteSchema = {
  title: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description?: string;
};

export const ROUTES: RouteSchema[] = [
  {
    title: "Overview",
    href: Routes.Home,
    icon: IconNavOverview,
    description: "Overview of your account",
  },
  {
    title: "Transactions",
    href: Routes.Transactions,
    icon: IconNavTransactions,
    description: "List of all your transactions",
  },
  {
    title: "Budgets",
    href: Routes.Budgets,
    icon: IconNavBudgets,
    description: "List of all your budgets",
  },
  {
    title: "Pots",
    href: Routes.Pots,
    icon: IconNavPots,
    description: "List of all your pots",
  },
  {
    title: "Recurring bills",
    href: Routes.RecurringBills,
    icon: IconNavRecurringBills,
    description: "List of all your recurring bills",
  },
];
