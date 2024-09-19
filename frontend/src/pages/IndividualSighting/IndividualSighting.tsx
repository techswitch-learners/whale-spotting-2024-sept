import { useParams } from "react-router-dom"

export function IndividualSighting () {
    const params = useParams();
    
    return (
        <h2>Sighting {params.id} details</h2>
    )
}