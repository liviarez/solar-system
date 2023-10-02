import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../Css/Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div className="mission-container">
        <div data-testid="missions" />
        <Title headline="Missões" />
        <div className="missions">
          {
            missions.map((mission) => (<MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />))
          }
        </div>
      </div>
    );
  }
}
export default Missions;
