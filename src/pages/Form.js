import React, { Component } from 'react';
import {Root, Container, Header,Title,Body,Left,Button,Icon } from 'native-base';
export default class GeneralExample extends Component {
  render() {
    return (
      <Root>
        <Container>
          <Header style={styles.green}>
            <Left>
              <Button transparent>
                <Icon name="arrow-back"/>
              </Button>
            </Left>
            <Body>
              <Title>Cadastrar novo imóvel</Title>
            </Body>
          </Header>
        </Container>
      </Root>
    );
  }
}