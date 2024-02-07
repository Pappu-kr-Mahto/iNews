import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="text-center mb-5 "  >
        <img src={loading} alt="loading" style={{height:"100px" ,width:"100px"}}/>
        </div>
      </div>
    )
  }
}
