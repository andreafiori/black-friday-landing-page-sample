import React, { Component } from 'react';
import Tabs from './Tabs';
import Header from './Header';
import axios from 'axios';

class App extends Component {

  static defaultProps = {
    photos: null,
    loading: false,
    error: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      photos: null,
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    const self = this;
    this.setState({ loading: true, error: null, items: null }, () => {
      axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(function (response) {
          self.setState({
            loading: false,
            error: null,
            photos: response.data,
          });
        })
        .catch(function (error) {
          self.setState({ loading: false, photos: null, error: error });
        });
    });
  }

  render() {
    const { photos, loading, error } = this.state;
    return (
      <div id="wrapper">

        <Header />

        {error != null &&
          <div className="alert alert-danger">
            <h3>Error calling the API</h3>
            <p>The API from packagist.org did not answered correctly. Please report this error.</p>
          </div>
        }

        { loading != false &&
          <h3 className="text-center">
            Loading...
          </h3>
        }

        { photos !== null &&
          <div>

            <div className="photos-form-container">
              <h3 className="text-center">Shop Women</h3>
              <input type="text" placeholder="Testo da ricercare" className="input-search" name="search" />
            </div>

            <div className="photos-container">
              {photos.map((item, i) =>
                <div key={i} className="photos" style={{ background: `url(${item.url}) no-repeat center` }}>
                  <span className="photos-text">{item.title}</span>
                </div>
              )}
            </div>

          </div>
        }
      </div>

    );
  }
}

export default App;
