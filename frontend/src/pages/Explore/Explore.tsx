import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../Components/LoginManager/LoginManager';
import { getSightings } from '../../api/backendClient';
import "./Explore.scss"

interface SpeciesType {
  speciesId: number;
  speciesName: string
}

interface UserType {
  userId: number;
  username: string
}

interface SightingType {
  user: UserType;
  species: SpeciesType;
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
        {/* <p>{sighting.user.username}</p> */}
        <img src={sighting.photoUrl} className="thumbnail-explore-gallery"/>
        {/* <p>{sighting.user}</p> */}
        <p>Latitude: {sighting.latitude}</p>
        <p>Longitude: {sighting.longitude}</p>
        <p>Description: {sighting.description}</p>
        {/* <p>Date: {sighting.dateTime.toDateString()}</p> */}
        </>
      ))}
    </>
  )
  
  
  
  // <>
  //   <h1>Explore</h1>
  //   {
  //     sightings.map((sighting) => (
  //       <>
  //       <p>{sighting.user.username} </p>
  //       <img src={sighting.photoUrl} />
  //       </>
  //     ))
  //   }

  // </>)
}

export default Explore
