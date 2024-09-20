import SpeciesGallery from "../../Components/SpeciesGallery/SpeciesGallery"
import "./Species.scss"

export interface SpeciesType {
  speciesId: number
  speciesName: string
  exampleLink: string
  tailPictureLink: string
  wikiLink: string
  totalSightings: number
}

function Species(): JSX.Element {
  return (
    <>
      <SpeciesGallery />
    </>
  )
}

export default Species
