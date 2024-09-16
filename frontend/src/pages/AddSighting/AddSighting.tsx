import React, { FormEvent } from 'react';
import { useState } from 'react';
import { SpeciesDropdown } from '../../Components/SpeciesDropdown/SpeciesDropdown';
import './AddSighting.scss';

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
        <div className="add-a-sighting-page">
            <h1 className="title">Add a Sighting</h1>
            <p>{errorMessage}</p>
            <form className="addSighting-form" method="post" onSubmit={submitSighting}>
                <div className="form-group row">
                    <label htmlFor="species" className="col-sm-2 col-form-label">
                        Species:
                    </label>
                        <div className="col-sm-3">
                            <SpeciesDropdown getSpeciesIdFromDropdown={getSpeciesIdFromDropdown} />
                        </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="latitude" className="col-sm-2 col-form-label">
                        Latitude:
                    </label>
                    <div className="col-sm-3">
                        <input type='text'
                            id="latitude"
                            className="form-control"
                            value={latitude} onChange={(event) => setLatitude(event.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="longitude" className="col-sm-2 col-form-label">
                        Longitude:
                    </label>
                    <div className="col-sm-3">
                        <input type='text'
                            id="longitude"
                            className="form-control"
                            value={longitude} onChange={(event) => setLongitude(event.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="photoUrl" className="col-sm-2 col-form-label">
                        Photo URL:
                    </label>
                    <div className="col-sm-3">
                        <input type='url'
                            id="photoUrl"
                            className="form-control"
                            value={photoUrl} onChange={(event) => setPhotoUrl(event.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-sm-2 col-form-label">
                        Description:
                    </label>
                    <div className="col-sm-3">
                        <textarea id="description"
                            className="form-control"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="dateTime" className="col-sm-2 col-form-label">
                        Date/Time:
                    </label>
                    <div className="col-sm-3">
                        <input type='datetime-local'
                            id="dateTime"
                            className="form-control"
                            value={dateTime}
                            onChange={(event) => setDateTime(event.target.value)} />
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-success px-4" style={{ width: "200px" }}>Submit</button>
            </form>
        </div>
    )
}