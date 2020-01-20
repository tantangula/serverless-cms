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

export default class Post extends React.Component {
  
  componentDidMount() {
    const { getPost } = this.props;
    let { id } = this.props.match.params;
    getPost(id);
  }

  render() {
    const { post } = this.props;
    console.log('post.body: ', post.body);
    return (
      <div>
        {parse(post.body, options)}
      </div>
    );
  }
}
