import React, { FormEvent } from 'react';
import { useState } from 'react';
import { SpeciesDropdown } from '../Components/SpeciesDropdown/SpeciesDropdown';

export function AddSighting(): JSX.Element {
    
    const [latitude, setLatitude] = useState("0.0");
    const [longitude, setLongitude] = useState("0.0");
    const [photoUrl, setPhotoUrl] = useState("");
    const [description, setDescription] = useState("");
    const [dateTime, setDateTime] = useState(""); // Todo
    const [speciesId, setSpeciesId] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    async function submitSighting(event: FormEvent) {
        event.preventDefault();
        console.log("speciesId:", speciesId);

        try {
            const response = await fetch("http://localhost:5280/sightings/create", {
                method: "post",
                body: JSON.stringify({
                    SpeciesId: speciesId,
                    Latitude: parseFloat(latitude),
                    Longitude: parseFloat(longitude),
                    PhotoUrl: photoUrl,
                    Description: description,
                    DateTime: dateTime
                })
            });
            if (!response.ok) {
                setErrorMessage('Error: Sighting not submitted (response not ok)');
            }
            // redirect to sighting
        } catch (err) {
            setErrorMessage("Error: Sighting not submitted! (catch err)");
        };
    }

    function getSpeciesIdFromDropdown(speciesIdFromDropdown: number) {
        setSpeciesId(speciesIdFromDropdown);
    }

    return (
        <div>
            <h1>Add a Sighting</h1>
            <p>{errorMessage}</p>
            <form method="post" onSubmit={submitSighting}>
                <label htmlFor="species">
                    Species:
                    <SpeciesDropdown getSpeciesIdFromDropdown={getSpeciesIdFromDropdown} />
                </label><br />
                <label htmlFor="latitude">
                    Latitude:
                    <input type='text' id="latitude" value={latitude} onChange={(event) => setLatitude(event.target.value)} />
                </label><br />
                <label htmlFor="longitude">
                    Longitude:
                    <input type='text' id="longitude" value={longitude} onChange={(event) => setLongitude(event.target.value)}/>
                </label><br />
                <label htmlFor="photoUrl">
                    Photo URL:
                    <input type='url' id="photoUrl" value={photoUrl} onChange={(event) => setPhotoUrl(event.target.value)}/>
                </label><br />
                <label htmlFor="description">
                    Description:
                    <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)}/>
                </label><br />
                <label htmlFor="dateTime">
                    Date/Time:
                    <input type='datetime-local' id="dateTime" value={dateTime} onChange={(event) => setDateTime(event.target.value)}/>
                </label><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}