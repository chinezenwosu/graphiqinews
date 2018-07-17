import React from 'react'
import Link from './Link'

class LinkList extends React.Component {
  render() {
    const list = [{
      id: '1',
      description: 'This is the first description',
      url: 'https://link1.com'
    }, {
      id: '2',
      description: 'This is the second description',
      url: 'https://link2.com'
    }]

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

export default LinkList