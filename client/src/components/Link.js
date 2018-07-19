import React from 'react'

class Link extends React.Component {
  render() {
    return (
      <span className="Link-desc">
        {this.props.link.description}
        <span className="Link-url"> ({this.props.link.url})</span>
      </span>
    )
  }
}

export default Link