import React from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

class CreateLink extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      url: '',
      description: ''
    }
  }

  render() {
    return (
      <div>
        <input
          name="description"
          value={this.state.description}
          type="text"
          onChange={(e) => this.setState({ description: e.target.value })}
          placeholder="This is a description for the link"
        />
        <input
          name="url"
          value={this.state.url}
          type="text"
          onChange={(e) => this.setState({ url: e.target.value })}
          placeholder="This is the link url"
        />
        <button type="submit" onClick={this._createLink}>Create Link</button>
      </div>
    )
  }

  _createLink = async() => {
    const { description, url } = this.state
    await this.props.createLinkMutation({
      variables: {
        description,
        url
      }
    })
  }
}

const createLinkMutation = gql`
  mutation CreateLinkMutation($description: String!, $url: String!){
    createLink(
      description: $description
      url: $url
    ) {
      id
      createdAt
      description
      url
    }
  }
`

export default graphql(createLinkMutation, { name: 'createLinkMutation' })(CreateLink)