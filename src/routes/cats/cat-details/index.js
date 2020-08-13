import React, { Component } from 'react';
import {
  Card,
  Button
} from 'react-bootstrap';
import { connect } from 'react-redux';

import { setSelectedCat } from 'Actions';

class CatDetails extends Component {
  componentDidMount() {
    const { match: { params }, setSelectedCat } = this.props;

    setSelectedCat(params.catId);
  }

  /**
   * @todo The back button should just use history,
   * where breed id should be pushed to.
   */
  render() {
    const { selectedCat, loading } = this.props;

    return (
      <div>
        {!loading && selectedCat ? (
          <Card className="mb-4">
            <Card.Header>
              <Button variant="primary" href={`/?breed=${selectedCat.breeds[0]?.id}`}>Back</Button>
            </Card.Header>
            <Card.Img variant="top" src={selectedCat.url} />
            {this.renderCatBreedDetails(selectedCat.breeds[0])}
          </Card>
        ) : (
          <h5>Loading...</h5>
        )}
      </div>
    );
  }

  renderCatBreedDetails(details) {
    return (
      <div>
        {details ? (
          <Card.Body>
            <h4>{details.name}</h4>
            <h5>Origin: {details.origin}</h5>
            <h6>{details.temperament}</h6>
            <p>{details.description}</p>
          </Card.Body>
        ) : (
          <Card.Body></Card.Body>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ cat }) => {
  const { selectedCat, loading } = cat;
  return { selectedCat, loading };
}

export default connect(mapStateToProps, {
  setSelectedCat
})(CatDetails);