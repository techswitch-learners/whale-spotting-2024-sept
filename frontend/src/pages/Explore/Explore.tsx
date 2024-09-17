import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../Components/LoginManager/LoginManager';
import { getSightings } from '../../api/backendClient';
import "./Explore.scss"


interface SightingType {
  userName: string;
  speciesName: string;
  latitude: number;
  longitude: number;
  photoUrl: string;
  description: string;
  dateTime: Date;
}


function Explore(): JSX.Element {
  const [sightings, setSightings] = useState<SightingType[]>([]);
  const loginContext = useContext(LoginContext);
  const jwt = loginContext.jwt;

  useEffect(() => {
    async function fetchSightings() {
      try {

        const response = await getSightings(jwt);
        if (!response.ok) {
          throw new Error('Network response failed');
        }
        const result = await response.json();
        setSightings(result.sightings);
      }
      catch (error) {
        console.error('Error fetching sightings:', error);
      }
    }

    fetchSightings();
  }, [jwt]);

  return (
    <>
      <h1>Explore</h1>
      {sightings.map(sighting => (
        <>
        <p>{sighting.userName}</p>
        <p>{sighting.speciesName}</p>
        <img src={sighting.photoUrl} className="thumbnail-explore-gallery"/>
        <p>Latitude: {sighting.latitude}</p>
        <p>Longitude: {sighting.longitude}</p>
        <p>Description: {sighting.description}</p>
        <p>Date: {sighting.dateTime.toString()}</p>
        </>
      ))}
    </>
  )
  
}

export default Explore
