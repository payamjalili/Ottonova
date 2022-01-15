import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import getCities from '../../services/get-cities.service';
import GoogleMapReact from 'google-map-react';
import './city.css';
import ICity from '../../types/city';

const City: React.FC<{ city: ICity; visibility: boolean }> = ({
  children,
  city,
  visibility,
}) => {
  const cityStyle = {
    display: visibility ? 'block' : 'none',
  };

  return (
    <div className='city-container' style={cityStyle}>
      <div className='city-content'>
        <div className='map-container'>
          <GoogleMapReact
            defaultCenter={{
              lat: +city.latitude,
              lng: +city.longitude,
            }}
            defaultZoom={11}
          />
        </div>
        <div className='city-population'>
          <FontAwesomeIcon icon={faUsers} />
          <span>{city.population.toLocaleString()}</span>
        </div>
        <h3>
          <span data-testid='city-name'>{city.name}</span>,{' '}
          <span className='country'>{city.country}</span>
        </h3>
        <p>
          <span>landmarks:</span> {city.landmarks.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default City;
