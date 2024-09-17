import "./DeleteModal.scss";
import { LoginContext } from "../LoginManager/LoginManager";
import React, { useContext } from "react";
import { deleteUserProfile } from "../../api/backendClient";
import { useNavigate } from "react-router-dom"


export const DeleteModal = ({setShowDeleteModal}:{setShowDeleteModal: (flag :boolean) => void}) => {
    
    return (
        <div className="popup">
            <div className="popup-content">
                <div>
                    <h2>Delete account</h2>
                    <p>
                        Warning: deleting your account is permanent, all your whale sightings will be deleted too. 
                    </p>
                    <p>
                        Are you sure you want to proceed?
                    </p>
                </div>
                <div className="button-group">
                <button id="deletebutton-yes"
                    data-testid="delete-button"
                    className="btn btn-primary btn-md w-50"
                    // onClick={getConfirmDelete(true)}
                    >Yes</button>
                <button id="deletebutton-no"
                    data-testid="delete-button"
                    className="btn btn-primary btn-md w-50"
                    // onClick={getConfirmDelete(false)}
                    >No</button>
                </div>
            </div>
        </div>
    );
};