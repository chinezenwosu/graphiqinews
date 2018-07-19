import '../styles/Link.css'
import React from 'react'
import Link from './Link'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

class LinkList extends React.Component {
  render() {
    const query = this.props.allLinksQuery

    if (query && query.loading) {
      return <div>Loading...</div>
    }

    if (query && query.error) {
      return <div>Error!</div>
    }

    const list = query.allLinks

    if (list.length === 0) {
      return <div>Sorry, there are currently no links at the moment. Please create a link with the form.</div>
    }

    return (
      <React.Fragment>
        {
          list.map(link => {
            return <Link key={link.id} link={link} />
          })
        }
      </React.Fragment>
    )
  }
}

const allLinksQuery = gql`
  {
    allLinks {
      id
      createdAt
      description
      url
    }
  }
`

export default graphql(allLinksQuery, { name: 'allLinksQuery' })(LinkList)