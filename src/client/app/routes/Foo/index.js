import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { Loading } from '../../components'

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "foo" */ './route'),
  loading: Loading,
})

class Route extends Component {
  render() {
    return <LoadableComponent {...this.props} />
  }
}

export default Route