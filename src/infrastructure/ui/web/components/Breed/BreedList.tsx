import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import BreedController from "../../../../controllers/BreedController";
import Breed from "../../../../../domain/entities/Breed"
import { BreedItem } from "./BreedItem";

export const BreedList = () => {

    const [breeds, setBreeds] = useState<any[]>([]);

    useEffect(() => {

        async function getBreadList() {
            const breedList = await BreedController.getAllBreeds();
            setBreeds(breedList);

        }
        getBreadList();

    }, []);

    const handleSearch = (e: any) => {
        console.log(e.target.value);
    }

    return (
        <div className="px-4 py-2 mt-5 w-100 min-h-screen">

            <div className="py-3 mt-3">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="please type the breed that you are looking for"
                    className="h-10 mx w-full text-blue-400 px-3 border border-red-500"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 ">
                {breeds.map((breed: Breed) => {
                    return <BreedItem key={breed.id} breed={breed} />
                })}

            </div>
        </div>
    )
}
