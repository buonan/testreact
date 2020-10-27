import React from 'react'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      isMounted: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.setState(state => ({
      isMounted: true
    }))
  }
  handleClick() {
    this.setState(state => ({
      isClicked: true
    }))
    console.log('Clicked!')
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default Welcome