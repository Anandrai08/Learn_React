const heading = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "Hello World"),
    React.createElement("h2", {}, "This is a react app")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
