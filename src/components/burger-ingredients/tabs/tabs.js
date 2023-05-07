import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from "./tabs.module.css";
import PropTypes from "prop-types";

function Tabs(props) {
  const { current, setCurrent } = props;

  const scrollTo = (e) => {
    setCurrent(e);
    const el = document.querySelector("#" + e);
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

Tabs.propTypes = {
  current: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default Tabs;
