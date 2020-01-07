import React from "react";

import "./App.css";

class App extends React.Component {
  state = { list: [] };
  items = 0;
  loading = false;

  componentDidMount() {
    this.renderList();
    const obj = this;
    const loader = document.querySelector(".loader");
    window.onscroll = function() {
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight >=
          document.documentElement.scrollHeight &&
        obj.loading === false
      ) {
        loader.classList.add("active");
        obj.loading = true;
        setTimeout(() => {
          obj.loading = false;
          loader.classList.remove("active");
          obj.renderList();
        }, 3e3);
      }
    };
  }

  renderList() {
    const hold = [...this.state.list];
    for (var i = 0; i < 4; i++) {
      this.items += 1;
      hold.push(
        <div key={this.items} className="item">
          <span className="item-f">Item </span>
          <span className="item-s">{this.items}</span>
        </div>
      );
    }
    this.setState({ list: hold });
    return;
  }

  render() {
    return (
      <div className="ui container">
        <div id="title">
          <span id="first">Infinite</span>
          <span id="second">Scroll</span>
        </div>
        <div id="list-ctn">{this.state.list}</div>
        <div className="loader">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
