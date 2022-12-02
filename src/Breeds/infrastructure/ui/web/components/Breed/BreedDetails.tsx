import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import Breed from "../../../../../domain/entities/Breed"
import BreedController from "../../../../controllers/BreedController";


interface IProps {
    breed: Breed,
}
interface IParams {
    breedName: string
}

export const BreedDetails: React.FC<IProps> = () => {
    const { breedName } = useParams<IParams>()
    const [selectedBreed, setSelectedBreed] = useState<Breed>(new Breed())

    useEffect(() => {
        async function getBreadList() {
            const breed = await BreedController.getBreedByName(breedName)
            setSelectedBreed(breed)
        }
        getBreadList()
    }, [breedName]);

    return (
        <>

            <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to="/">Back to list</Link>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 ">
                {selectedBreed.images.map((image, index) => {
                    return (<div className="bg-gray-100 flex items-center justify-center py-50 mb-5 mt-5">
                        <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                            <div className="p-4">
                                <img src={image} alt={selectedBreed.breedName} />

                            </div>
                            <div className="flex justify-between p-6">
                                <div className="flex items-center space-x-4">
                                    <h1 className="text-lg text-gray-900 font-bold"  >{selectedBreed.breedName}</h1>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </>
    )
}
