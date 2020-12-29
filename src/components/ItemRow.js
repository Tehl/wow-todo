import { h } from "preact";
import If from "./utility/If";

const ItemRow = ({ itemData }) => (
  <tr>
    <td class="check">[&nbsp;&nbsp;]</td>
    <td>
      <span>{itemData.title}</span>
      <If condition={itemData.frequency}>
        <span class="frequency">[{itemData.frequency}]</span>
      </If>
      <If condition={itemData.info}>
        <aside class="info">{itemData.info}</aside>
      </If>
    </td>
  </tr>
);

export default ItemRow;
