import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from "./tabs.module.css";

interface ITabsProps {
  current: string;
  setCurrent: (e: string) => void;
}

function Tabs(props: ITabsProps) {
  const { current, setCurrent } = props;

  const scrollTo = (e: string) => {
    setCurrent(e);
    const el = document.querySelector("#" + e) as HTMLDivElement;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={tabsStyles.tabs}>
      <Tab value="bun" active={current === "bun"} onClick={scrollTo}>
        Булки
      </Tab>
      <Tab value="sauce" active={current === "sauce"} onClick={scrollTo}>
        Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={scrollTo}>
        Начинки
      </Tab>
    </div>
  );
}

export default Tabs;
