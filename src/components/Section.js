import { h } from "preact";
import Category from "./Category";

const Section = ({ sectionData }) => (
  <div class="panel">
    <h1>{sectionData.title}</h1>
    {sectionData.categories.map((x) => (
      <Category categoryData={x} />
    ))}
  </div>
);

export default Section;
