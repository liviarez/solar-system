import React from 'react';
import PropTypes from 'prop-types';
import '../Css/Title.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="planet-title">
        <h2>{headline}</h2>
      </div>

    );
  }
}

Title.defaultProps = {
  headline: 'Default Headline',
};

Title.propTypes = {
  headline: PropTypes.string,
};

export default Title;
