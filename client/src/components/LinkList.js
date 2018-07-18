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

    return (
      <div>
        {
          list.map(link => {
            return <Link key={link.id} link={link} />
          })
        }
      </div>
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