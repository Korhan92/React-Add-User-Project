import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      //     {
      //       name: "Charlie",
      //       job: "Janitor",
      //     },
      //     {
      //       name: "Mac",
      //       job: "Bouncer",
      //     },
      //     {
      //       name: "Dee",
      //       job: "Aspring actress",
      //     },
      //   ],
    };
  }

  updateNames = (param) => {
    console.log(param);
    this.setState({ users: [...this.state.users, param] });
  };

  handleDelete = (e) => {
    console.log("delete run");
    let newUsers = this.state.users.filter((item) => {
      return item.id != e.target.id;
    });
    console.log(newUsers);
    this.setState({ users: newUsers });
    console.log(this.state.users);
  };

  render() {
    console.log(this.state.users);
    return (
      <div className="container">
        <h1>React List</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Form updateNames={this.updateNames} state={this.state} />
        <Table users={this.state.users} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
