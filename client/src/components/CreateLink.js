import React from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import Form from './Form'

class CreateLink extends React.Component {
  render() {
    const inputs = [{
      name: "description",
      placeholder: "This is a description for the link"
    }, {
      name: "url",
      placeholder: "This is the link url"
    }]

    return (
      <Form
        inputs={inputs}
        onSubmit={(variables) => this._createLink(variables)}
        submitText="Create"
      />
    )
  }

  _createLink = async(variables) => {
    console.log("variables", variables)
    // await this.props.createLinkMutation({
    //   variables
    // })
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