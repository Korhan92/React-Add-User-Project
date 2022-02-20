import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  console.log(props.users);
  return (
    <tbody>
      {props.users.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.job}</td>
            <td>
              <button id={item.id} onClick={props.handleDelete}>
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

class Table extends Component {
  render() {
    console.log(this.props);
    return (
      <table>
        <TableHeader />
        <TableBody
          users={this.props.users}
          handleDelete={this.props.handleDelete}
        />
      </table>
    );
  }
}

export default Table;
