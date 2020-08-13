import React, { Component } from 'react';
import {
  Card,
  Button
} from 'react-bootstrap';

class ImageCard extends Component {
  render() {
    const { imgSrc, btnLink, btnText } = this.props;

    return (
      <Card className="mb-4">
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Button variant="primary" href={ btnLink } block>{ btnText }</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ImageCard;