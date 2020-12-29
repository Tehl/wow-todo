import { h } from "preact";
import Section from "./Section";

const App = ({ taskData }) => (
  <div class="container">
    {taskData.map((x) => (
      <Section sectionData={x} />
    ))}
  </div>
);

export default App;
