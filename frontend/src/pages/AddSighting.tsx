import React, { FormEvent } from 'react';
import { useState, useEffect } from 'react';

export function AddSighting(){
    // Todo: get a list of species from backend
    // fetch("GET", "/")
    const species = [
        {speciesId: 0, speciesName: "Dolphin"},
        {speciesId: 1, speciesName: "Whale"},
        {speciesId: 2, speciesName: "Porpoise"},
    ];
    
    const [userId, setUserId] = useState(0);
    const [speciesId, setSpeciesId] = useState(0);
    const [latitude, setLatitude] = useState("0.0");
    const [longitude, setLongitude] = useState("0.0");
    const [photoUrl, setPhotoUrl] = useState("");
    const [description, setDescription] = useState("");
    const [dateTime, setDateTime] = useState(""); // Todo

    const [submitStatus, setSubmitStatus] = useState(false);

    async function submitSighting(event: FormEvent) {
        event.preventDefault();
        setSubmitStatus(true);

        try {
            const response = await fetch("/sightings/create", {
                method: "post",
                body: JSON.stringify({
                    // UserId : ,
                    SpeciesId: speciesId,
                    Latitude: parseFloat(latitude),
                    Longitude: parseFloat(longitude),
                    PhotoUrl: photoUrl,
                    Description: description,
                    DateTime: dateTime
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // redirect to sighting
        } catch (err) {
            // redirect to error page
        };
    }

    return (
        <div>
            <h1>Add Sighting</h1>
            <form method="post" onSubmit={submitSighting}>
                <label htmlFor="species">
                    Species:
                    <select id="species" value={speciesId} onChange={(event) => setSpeciesId(species[event.target.selectedIndex].speciesId)}>
                        {species.map(option =>( 
                            <option value={option.speciesId}>{option.speciesName}</option>
                        ))}
                    </select>
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
                {submitStatus ? <p>Sighting Submitted</p> : null}
            </form>
        </div>
    )
}