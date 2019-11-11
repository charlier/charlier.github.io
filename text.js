const { h, Component, render } = preact;
/**@jsx h*/

class App extends Component {
  render() {
    return (
      h("div", null,
      h("input", { type: "text", value: "2017-06-01" })));


  }}


render(h(App, null), document.body);
