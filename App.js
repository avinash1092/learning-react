const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I am the heading"),
    React.createElement("h2", { id: "heading" }, "I am second heading"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
