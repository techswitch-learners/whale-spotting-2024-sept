import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../Components/LoginManager/LoginManager';
import { getSightings } from '../../api/backendClient';

function Explore(): JSX.Element {
  const [sightings, setSightings] = useState([]);
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
        setSightings(result);
      }
      catch (error) {
        console.error('Error fetching sightings:', error);
      }
    }

    fetchSightings();
  }, [jwt]);

  return (<>
    <h1>Explore</h1>
    {
      // <img src={sightings[0][0].PhotoUrl}/>
      JSON.stringify(sightings)
    }

  </>)
}

export default Explore
