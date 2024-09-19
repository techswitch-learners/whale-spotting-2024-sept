import "./Explore.scss"
import SightingsGallery from '../../Components/SightingsGallery/SightingsGallery';

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
      <SightingsGallery />
    </>
  )
  
}

export default Explore
