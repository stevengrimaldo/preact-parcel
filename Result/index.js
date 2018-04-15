import { h } from 'preact'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Item = styled.div`
  padding: 10px;
  margin: 10px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`

const Result = ({ result }) => (
  <Item>
    <div>
      <a href={result.html_url} target="_blank">
        {result.full_name}
      </a>
      🌟<strong>{result.stargazers_count}</strong>
    </div>
    <p>{result.description}</p>
  </Item>
)

Result.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      html_url: PropTypes.string.isRequired,
      full_name: PropTypes.string.isRequired,
      stargazers_count: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Result
