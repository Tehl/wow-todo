import { h } from "preact";

const If = ({ condition, children }) => (!!condition ? children : null);

export default If;
