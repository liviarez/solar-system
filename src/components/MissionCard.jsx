import React from 'react';
import PropTypes from 'prop-types';
import '../Css/MissionCard.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">

        <h2 data-testid="mission-name">{name}</h2>

        <hr className="mission-line" />

        <div className="mission-information">
          <div className="year-country">
            <p data-testid="mission-year" className="info-tag">{year}</p>
            <p
              data-testid="mission-country"
              className="info-tag"
            >
              {country}

            </p>
          </div>
          <div className="destination">
            <p
              data-testid="mission-destination"
              className="destination-tag"
            >
              {destination}

            </p>
          </div>
        </div>
      </div>

    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
