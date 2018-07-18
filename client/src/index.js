import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { config } from './config'
import registerServiceWorker from './registerServiceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: config.apiUrl,
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
, document.getElementById('root'))
registerServiceWorker()
