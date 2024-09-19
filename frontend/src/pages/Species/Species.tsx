import SpeciesGallery from "../../Components/SpeciesGallery/SpeciesGallery";
import "./Species.scss"

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

function Species(): JSX.Element {

    return (
        <>
            <SpeciesGallery />
        </>
    )

}

export default Species
