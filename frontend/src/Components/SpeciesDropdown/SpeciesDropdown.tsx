import { useState } from "react";

interface SpeciesType {
    speciesId: number;
    speciesName: string;
    exampleLink: string;
    tailPictureLink: string;
    wikiLink: string;
    totalSightings: number;
    sightings:[]
}

export function SpeciesDropdown({getSpeciesIdFromDropdown} : {getSpeciesIdFromDropdown(speciesIdFromDropdown: number): void}) {
    // const [speciesId, setSpeciesId] = useState(0);
    const [species, setSpecies] = useState<SpeciesType[]>([]);
    
    if(species.length === 0) {
        fetch("http://localhost:5280/species", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => {
            setSpecies(data.listOfSpecies);
        });
    }

    if (!species) {
        return <div>Loading...</div>
    } else {
        return (
            <select id="species"
            className="form-control"
            onChange={(event) => getSpeciesIdFromDropdown(species[event.target.selectedIndex].speciesId)}>
                {species.map(option => (
                    <option value={option.speciesId}>{option.speciesName}</option>
                ))}
            </select>
        );
    }
}