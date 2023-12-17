const parent = React.createElement("div", {id:"parent"}, [React.createElement("div", {id:"child1"},React.createElement("h1", {},"im h1 first" ) ), React.createElement("div", {id:"child2"}, React.createElement("h1", {},"im h2 second"  ))] )

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);