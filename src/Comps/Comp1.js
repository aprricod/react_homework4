import React, { Component } from "react";

export default class Comp1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      comment: [],
    };
    this.myRef = React.createRef();
  }

  handler = () => {
    let currentCount = this.state.count;
    currentCount++;
    this.setState({ count: currentCount });
  };

  addComment = () => {
    let comment = this.myRef.current.value;
    let comments = this.state.comment;
    comments.push(comment);
    this.setState({
      comments: comments,
    });
    this.myRef.current.value = "";
  };
  render() {
    return (
      <div>
        <h1>State</h1>
        <div>
          <button onClick={this.handler}>Изменение state</button>
        </div>
        <div>{this.state.count % 2 === 0 ? "even" : "odd"}</div>
        <div>{this.state.count} раз</div>
        <div>
          <textarea ref={this.myRef}></textarea>
        </div>
        <div>
          <button onClick={this.addComment}>Add comment</button>
        </div>
        <div>
          <ul>
            {this.state.comment.map((item, index) => (
              <li key={index.toString()}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
