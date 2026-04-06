import ReactDOM from "React-DOM/client";

const HeadingComponent1 = () => <div id="parent"><h1>Heading 1</h1><HeadingComponent2 />{123}<HeadingComponent3 /></div>

const HeadingComponent2 = () => <h2>Heading 2</h2>

const HeadingComponent3 = () => <h3>Heading 3</h3>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />)