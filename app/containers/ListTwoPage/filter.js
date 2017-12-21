import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';

export default class List extends PureComponent {

  state = {
    name: '',
    filter: '',
  }

  render() {
    const { name, filter } = this.state;

    return (
      <div>
        <TextField
          id="login_name"
          value={name}
          type="text"
          onChange={(e, newValue) => this.setState({ name: newValue })}
        /><br />
        <TextField
          id="login_possword"
          value={filter}
          type="text"
          onChange={(e, newValue) => this.setState({ filter: newValue })}
        />
      </div>
    );
  }
}
