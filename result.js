import { h } from 'preact';

import styled from 'styled-components';

const Item = styled.div`
  padding: 10px;
  margin: 10px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const Result = ({ result }) => {
  return (
    <Item>
      <div>
        <a href={result.html_url} target="_blank">
          {result.full_name}
        </a>
        🌟<strong>{result.stargazers_count}</strong>
      </div>
      <p>{result.description}</p>
    </Item>
  );
};
