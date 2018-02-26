import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from './query.gql';

class Foo extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        FOO PAGE - version {data && data.version}
      </div>
    );
  }
}

export default graphql(query)(Foo);
