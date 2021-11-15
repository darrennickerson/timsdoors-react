import React from 'react';
import Photo from './Photo';
import Loading from './Loading';

class Work extends React.Component {
  render() {
    let photoList = this.props.photos.map((photo) => (
      <Photo key={photo.id} photo={photo} />
    ));

    return (
      <div className="container">
        <h1>Our Work</h1>
        {this.props.loading ? (
          <Loading />
        ) : (
          <div className="grid-container">{photoList}</div>
        )}
      </div>
    );
  }
}

export default Work;
