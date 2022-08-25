import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    tags: ['tag1', 'tag', 'tag3'],
  }
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return <ul><li>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</li></ul>
  }
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>

        {this.renderTags()}
        <span className="m-5">{this.state.count}</span>
        <button onClick={() => this.handleIncrement({ id: 1 })} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

}

export default Counter;

// <img src={this.state.imageUrl} alt="" />