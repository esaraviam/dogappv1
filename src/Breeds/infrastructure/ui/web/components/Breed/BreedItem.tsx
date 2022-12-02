import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import Breed from "../../../../../domain/entities/Breed"
import BreedController from '../../../../controllers/BreedController'

interface IProps {
    breed: Breed,

}

export const BreedItem: React.FC<IProps> = ({ breed }) => {

    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        async function getBreedImage() {
            const image = await BreedController.getBreedImage(breed.breedName)
            breed.defaultImage = image
            setLoading(false)
        }
        getBreedImage()

    }, [breed])
    return (

        <div className="bg-gray-100 flex items-center justify-center py-50 mb-5">
            <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                <div className="p-4">
                    {loading ? <div className="text-center">Loading...</div> : <img src={breed.defaultImage} alt={breed.breedName} />}

                </div>
                <div className="flex justify-between p-6">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-lg text-gray-900 font-bold"  >
                            <Link to={`/details/${breed.breedName}`} >{breed.breedName}</Link> </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
