import { useNavigate, useParams } from "react-router-dom"
import "./IndividualSighting.scss"
import { deleteSighting, getSightingById, Sighting } from "../../api/backendClient";
import { LoginContext } from "../../Components/LoginManager/LoginManager";
import { useContext, useEffect, useState } from "react";
import { DeleteSightingModal } from "../../Components/DeleteSightingModal/DeleteSightingModal";

export function IndividualSighting() {
    const [sighting, setSighting] = useState<Sighting | null>(null)
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const params = useParams();
    const loginContext = useContext(LoginContext);
    const navigate = useNavigate();

    useEffect(() => {
        getSightingById(loginContext.jwt, Number(params.id))
            .then((response) => setSighting(response));
    }, [loginContext.jwt])
    

    if (!sighting) {
        return (<div>Loading...</div>)
    }    

    const getConfirmDelete = (confirmation: boolean) => {
        setShowDeleteModal(false);

        if (confirmation) {
            deleteSighting(loginContext.jwt, Number(sighting.id))
                .then(response => {

                    if (!response.ok) {
                        return response.json().then((errorData) => {
                            throw new Error();
                        })
                    }
                    navigate("/explore")
                    return response.json()
                })
                .catch((error) => { });
        }
    }

    return (
        <div>
            <div className="container col-10 col-md-6 pt-3 mx-auto">
                <div className="card bg-light mb-3 mt-lg-5 mx-auto">
                    <h4 className="card-header py-3 ps-4">Sighting Details</h4>
                    <div className="card-body px-4">
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="card-title mb-0">Sighting ID</h6>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{sighting.id}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Image</h6>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0"><img className="sighting-image" alt={sighting.speciesName} src={sighting.photoUrl} /></p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Submitted by</h6>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{sighting.username}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Species</h6>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{sighting.speciesName}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Longitude</h6>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{sighting.longitude}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Latitude</h6>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{sighting.latitude}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Description</h6>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{sighting.description}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Submitted at</h6>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{sighting.dateTime}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0">
                        {(loginContext.username === sighting.username && !sighting.isApproved) && (
                            <div className="col-6 p-2">
                                <button id="update-button" data-testid="update-button" className="btn btn-primary btn-md w-100">
                                    Update
                                </button>
                            </div>
                        )}
                        {loginContext.username === sighting.username && (
                            <div className="col-6 p-2">
                                <button id="delete-button" data-testid="delete-button" className="btn btn-primary btn-md w-100" onClick={() => setShowDeleteModal(true)} >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {showDeleteModal && <DeleteSightingModal getConfirmDelete={getConfirmDelete} />}
        </div>
    )
}