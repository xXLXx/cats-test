import React, { Component } from 'react';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';

class LoadMoreList extends Component {

  render() {
    const { items, onItem, emptyMessage, lastPage, isLoading, loadingText, onLoadMore } = this.props;

    return (
      <div>
        {items.length ? (
          <Row>
            {items.map((item, key) => {
              return <Col sm={6} md={3} key={key}>{ onItem(item, key) }</Col>
            })}
          </Row>
        ) : (
          <Row className="mb-4">
            <Col>{ emptyMessage }</Col>
          </Row>
        )}
        {!lastPage && <Row>
          <Col sm={6} md={3}>
            <Button variant="success" disabled={!items.length || isLoading} onClick={onLoadMore}>
              { isLoading ? loadingText : 'Load More' }
            </Button>
          </Col>
        </Row>}
      </div>
    );
  }
}

export default LoadMoreList;