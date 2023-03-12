import ConstructorItems from "./constructor-items/constructor-items";
import ConstructorTotal from "./constructor-total/constructor-total";

import Style from "./burger-constructor.module.css";

function BurgerConstructor(props) {
  const { data } = props;
  return (
    <section className={`mt-25 ${Style.burger_constructor}`}>
      <ConstructorItems data={data} />
      <ConstructorTotal />
    </section>
  );
}

export default BurgerConstructor;
