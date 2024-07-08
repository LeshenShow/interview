import { NavElements } from "./ui/nav-elements";
import { NavLayout } from "./ui/nav-layout";
import { NavPanel } from "./ui/nav-panel";

export function Navigation() {
  let navList: Object = [1, 2, 3];
  return (
    <NavLayout
      navPanel={<NavPanel />}
      navElements={<NavElements navList={navList} />}
    />
  );
}
