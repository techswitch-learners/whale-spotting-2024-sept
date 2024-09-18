import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../Components/LoginManager/LoginManager';
import { getSightings } from '../../api/backendClient';
import "./Explore.scss"
import Gallery from '../../Components/Gallery/Gallery';

export interface SightingType {
  id: number
  username: string;
  speciesName: string;
  latitude: number;
  longitude: number;
  photoUrl: string;
  description?: string;
  dateTime: Date;
}

function Explore(): JSX.Element {

  return (
    <>
      <Gallery />
    </>
  )
  
}

export default Explore
