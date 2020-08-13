import React, { Component } from 'react';
import {
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import qs from 'qs';

import LoadMoreList from 'Components/LoadMoreList/LoadMoreList';
import ImagePreviewListItem from 'Components/ListItem/ImagePreview';

// redux actions
import { getCatBreeds, getCats, setCatsFilter } from 'Actions';

class CatsList extends Component {
  state = {
    catsPerPage: 10
  }

  async componentDidMount() {
    const { getCatBreeds, getCats, setCatsFilter, location } = this.props;
    const { catsPerPage } = this.state;

    const { breed } = qs.parse(location.search.replace(/^\?/, ''));

    getCatBreeds();
    if (breed) {
      await setCatsFilter({ breed });
    }
    getCats(catsPerPage);
  }

  render() {
    const {
      isCatBreedsLoading,
      isCatsLoading,
      catBreeds,
      cats,
      isLastCat,
      breedsFilter,
      getCats
    } = this.props;
    const { catsPerPage } = this.state;

    return (
      <div>
        <h1>Cat Browser</h1>
        <Row className="py-1">
          <Col sm={6} md={3}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Breed</Form.Label>
                <Form.Control
                  type="text"
                  as="select"
                  disabled={isCatBreedsLoading || isCatsLoading}
                  value={breedsFilter}
                  onChange={this.onBreedSelected.bind(this)}
                >
                  <option value="">Select breed</option>
                  {catBreeds.map((breed) => {
                    return <option key={breed.id} value={breed.id}>{breed.name}</option>
                  })}
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <LoadMoreList
          onItem={(cat) => {
            return <ImagePreviewListItem
              imgSrc={cat.url}
              btnText="View Details"
              btnLink={`/${cat.id}`}
            />
          }}
          onLoadMore={getCats.bind(this, catsPerPage)}
          emptyMessage="No cats available"
          lastPage={isLastCat}
          isLoading={isCatsLoading}
          loadingText="Loading cats..."
          items={cats}
        />
      </div>
    );
  }

  async onBreedSelected(event) {
    const { catsPerPage } = this.state;
    const { setCatsFilter, getCats } = this.props;

    await setCatsFilter({ breed: event.target.value });
    await getCats(catsPerPage);
  }
}

// map state to props
const mapStateToProps = ({ cat, catBreed }) => {
  const { catBreeds, loading: isCatBreedsLoading } = catBreed;
  const { cats, loading: isCatsLoading, isLastCat, breedsFilter } = cat;
  return { catBreeds, cats, isCatsLoading, isCatBreedsLoading, isLastCat, breedsFilter };
}

export default connect(mapStateToProps, {
  getCatBreeds,
  getCats,
  setCatsFilter
})(CatsList);