import { h } from "preact";
import If from "./utility/If";
import ItemRow from "./ItemRow";

const Category = ({ categoryData }) => (
  <div class="category">
    <h2>{categoryData.title}</h2>
    <If condition={categoryData.info}>
      <aside class="info">{categoryData.info}</aside>
    </If>
    <table class="items">
      {categoryData.items.map((x) => (
        <ItemRow itemData={x} />
      ))}
    </table>
  </div>
);

export default Category;
