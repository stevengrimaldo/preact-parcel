import { Component, render, h } from 'preact'
import Result from './Result'

import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  font-family: sans-serif;
`

const SEARCH = '//api.github.com/search/repositories'

class App extends Component {
  componentDidMount() {
    fetch(`${SEARCH}?q=preact`)
      .then(r => r.json())
      .then(json => {
        this.setState({
          results: (json && json.items) || []
        })
      })
  }

  render(props, { results = [] }) {
    return (
      <div>
        <Title>Example</Title>
        <div className="list">
          {results.map(result => <Result result={result} />)}
        </div>
      </div>
    )
  }
}

if (typeof window !== 'undefined') {
  render(<App />, document.getElementById('root'))
}
