import React, { Component } from 'react';

import {
    Container,
    List,
    Segment,
} from 'semantic-ui-react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
            <Segment inverted vertical style={{ padding: '0.5em 0em' }}>
                <Container>
                    <List link inverted>
                        <a href="https://github.com/sistemaswebbrasil" target="_blank" rel="noopener noreferrer" className="item">@sistemaswebbrasil</a>
                    </List>
                </Container>
            </Segment>
      </footer>
    )
  }
};
