import React from 'react';
import styled from 'styled-components';

import parse, { domToReact } from 'html-react-parser';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid orange;
  color: orange;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const options = {
  replace: ({ attribs, children }) => {
    if (!attribs) return;
 
    if (attribs.class === 'button') {
      return (
        <Button>
          {domToReact(children, options)}
        </Button>
      );
    }
  }
};

export default class Feed extends React.Component {
  
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts } = this.props;
    console.log('posts: ', posts);
    return (
      <div>
        {posts.map(({ id, body }, index) => (
          <div key={index}>
            <h2>
              {id}
            </h2>
            {parse(body, options)}
          </div>
        ))}
      </div>
    );
  }
}
