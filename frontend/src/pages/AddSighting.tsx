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
    const [latitude, setLatitude] = useState(0.0);
    const [longitude, setLongitude] = useState(0.0);
    const [photoUrl, setPhotoUrl] = useState("");
    const [description, setDescription] = useState("");
    const [dateTime, setDateTime] = useState(""); // Todo

    const [submitStatus, setSubmitStatus] = useState(false);

    // TODO: We need a function to submit the changes to the backend
    async function submitSighting(event: FormEvent) {
        event.preventDefault();
        setSubmitStatus(true);
        // const apiKey = process.env.REACT_APP_NASA_API_KEY;
        // const link = `${apiUrl}${apiKey}&date=${date}`;
    
        // try {
        //     const response = await fetch(link);
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }
        //     const pictureData = await response.json();
        //     return pictureData;
        // } catch (err) {
        //     throw err;
        // }

        const response = await fetch("/sightings/create", {
            method: "post",
            body: JSON.stringify({ username: "example" }),
            // ...
          });
          
        // TODO: fetch POST to backend to save sighting and redirect
        //       if any errors.
        //       otherwise, redirect to sighting page...
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
                </label>
                <label htmlFor="latitude">
                    Latitude:
                    <input type='number' id="latitude" value={latitude} onChange={(event) => setLatitude(parseFloat(event.target.value))} />
                </label>
                <label htmlFor="longitude">
                    Longitude:
                    <input type='number' id="longitude" value={longitude} onChange={(event) => setLongitude(parseFloat(event.target.value))}/>
                </label>
                <label htmlFor="photoUrl">
                    Photo URL:
                    <input type='url' id="photoUrl" value={photoUrl} onChange={(event) => setPhotoUrl(event.target.value)}/>
                </label>
                <label htmlFor="description">
                    Description:
                    <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)}/>
                </label>
                <label htmlFor="dateTime">
                    Date/Time:
                    <input type='datetime-local' id="dateTime" value={dateTime} onChange={(event) => setDateTime(event.target.value)}/>
                </label>
                <button type="submit">Submit</button>
                {submitStatus ? <p>Sighting Submitted</p> : null}
            </form>
        </div>
    )
}