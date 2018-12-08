import React, { Component } from 'react';
import axios from 'axios';
import MediaQuery from 'react-responsive';
import WebPushNotification from './WebPushNotification';
import DownloadApp from './DownloadApp';
import Newsletter from './Newsletter';
import icoNotification from '../images/ico-notification.svg';
import icoMail from '../images/ico-mail.svg';
import '../styles/tabs.css';

class App extends Component {

  static defaultProps = {
    photos: null,
    loading: false,
    error: null,
    canSendNotifications: false
  };

  constructor() {
    super();

    const canSendNotifications = window.Notification && Notification.permission === "granted";

    this.state = {
      filteredPhotos: null,
      photos: null,
      loading: false,
      error: null,
      canSendNotifications: canSendNotifications,
    };

    this.checkPushNotification = this.checkPushNotification.bind(this);
  }

  componentDidMount() {
    // Fetch photos from the API
    const self = this;
    this.setState({ loading: true, error: null, items: null }, () => {
      axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(function (response) {
          self.setState({
            loading: false,
            error: null,
            filteredPhotos: response.data,
            photos: response.data,
          });
        })
        .catch(function (error) {
          self.setState({ loading: false, filteredPhotos: null, photos: null, error: error });
        });
    });
  }

  checkPushNotification(e) {
    e.preventDefault();

    if (window.Notification && (Notification.permission !== 'denied' || Notification.permission === 'default')) {
      const self = this;
      Notification.requestPermission(function (status) {
        if (status === "granted") {
          self.setState({ canSendNotifications: true });
        }
      });
    } else {
      alert('Notifications blocked or not allowed! Please try again later.');
    }

  }

  searchPhotos(event) {
    event.preventDefault();

    const searched = event.target.value;
    this.setState({ filteredPhotos: null }, () => {

      let filtered = this.state.photos.filter((item) => {
        return item.title.toLowerCase().indexOf(searched.toLowerCase()) !== -1;
      });

      this.setState({ filteredPhotos: (filtered === '') ? this.state.photos : filtered });
    });
  }

  render() {
    const { filteredPhotos, canSendNotifications, loading, error } = this.state;
    return (
      <div>

        {error !== null &&
          <div>
            <h3>Error calling the API</h3>
            <p>The API from packagist.org did not answered correctly. Please report this error.</p>
          </div>
        }

        { loading !== false &&
          <h3 className="text-center">
            Loading...
          </h3>
        }

        {loading === false &&
          <div>

            <div className="black-friday-row">
              <div className="column black-friday-column">
                <h1>Black Friday</h1>
                <p>Don't miss out on Black Friday deals, just in time for Christmas shopping! Up to 70% on all you favorite men's, women's, and kids brands like Alberta Ferretti, Casadei, Marni, Dsquared2, Versace, and Maison Margiela. Join on this fun Amerian tradition and keep an eye out for the best offers on clothing, bags, accessories, and shoes the day after Thanksgiving. Subscribe to our newsletter and to our web push notifications to receive updates on sales and special deals.</p>
              </div>

              <MediaQuery query="(min-device-width: 1224px)">
                <div className="column-two">
                  <div className="box-container">
                    <Newsletter />
                  </div>
                </div>
                <div className="column-two">
                  <div className="box-container">
                    {!canSendNotifications &&
                      <WebPushNotification checkPushNotification={this.checkPushNotification} />
                    }

                    {canSendNotifications &&
                      <DownloadApp />
                    }
                  </div>
                </div>
              </MediaQuery>
              <MediaQuery query="(max-device-width: 1224px)">
                <div className="column-two">

                  <div className="tabs">
                    <div className="tab">
                      <input type="radio" id="tab-one" name="tab-group" defaultChecked />
                      <label htmlFor="tab-one">
                        <img src={icoMail} alt="Icon Mail" />
                      </label>
                      <div className="content">
                        <Newsletter />
                      </div>
                    </div>
                    <div className="tab">
                      <input type="radio" id="tab-two" name="tab-group" />
                      <label htmlFor="tab-two">
                        <img src={icoNotification} alt="Icon Notification" />
                      </label>
                      <div className="content">
                        {!canSendNotifications &&
                          <WebPushNotification />
                        }
                        {canSendNotifications &&
                          <DownloadApp />
                        }
                      </div>
                    </div>
                  </div>

                </div>
              </MediaQuery>

            </div>

            <div className="photos-form-container">
              <h3 className="text-center">Shop Women</h3>
              <input type="text" onChange={this.searchPhotos.bind(this)} placeholder="Testo da ricercare" className="input-search" name="search" />
            </div>

            { filteredPhotos !== null && 
              <div className="photos-container">
                {filteredPhotos.map((item, i) =>
                  <div key={i} className="photos" style={{ background: `url(${item.url}) no-repeat center` }}>
                    <span className="photos-text">{item.title}</span>
                  </div>
                )}
              </div>
            }

            { (filteredPhotos === null || filteredPhotos.length === 0) && 
              <div className="alert-warning">
                <h3 className="text-center">No photos were found</h3>
              </div>
            }

          </div>
        }
      </div>
    );
  }
}

export default App;
