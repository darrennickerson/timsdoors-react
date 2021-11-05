import React from 'react';
import Photo from './Photo';
import Loading from './Loading';
const axios = require('axios');
const { REACT_APP_FL_API_KEY } = process.env;

class Work extends React.Component {
  constructor() {
    super();
    this.state = { photos: [], loading: true };
  }
  componentDidMount() {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${REACT_APP_FL_API_KEY}&user_id=155842074%40N08&extras=url_o&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({ photos: response.data.photos.photo, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let photoList = this.state.photos.map((photo) => (
      <Photo key={photo.id} photo={photo} />
    ));

    return (
      <div className="container">
        <h1>Our Work</h1>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="grid-container">{photoList}</div>
        )}
      </div>
    );
  }
}

export default Work;
