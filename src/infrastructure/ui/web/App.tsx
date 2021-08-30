import React from 'react';
import { useEffect } from "react";
import BreedController from "../../controllers/BreedController";


function App() {
  useEffect(() => {

    async function getBreadList() {
      const breedList = await BreedController.getAllBreeds(); 
      console.log(breedList);
    }
    getBreadList();


    async function getBreedImages() {
      const breedImages = await BreedController.getBreedByName('hound');
      console.log(breedImages);
    } 
    getBreedImages();
  }, []);

  return (
    <div id='App' className="App">
     
    </div>
  );
}

export default App;
