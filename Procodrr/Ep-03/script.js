console.log("hello world");

const h1 = React.createElement("h1", {}, "it from react");

console.log(h1);

const container = document.querySelector("#root");

const root = ReactDOM.createRoot(container);

root.render(obj);
