import React, { Component } from "react";

let count = 2;
class Form extends Component {
  state = {
    id: 1,
    name: "",
    job: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ id: count });
    count++;
    this.props.updateNames(this.state);
  };

  changeValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.changeValue}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={this.state.job}
          onChange={this.changeValue}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
