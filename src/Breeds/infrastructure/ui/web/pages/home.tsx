import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BreedDetails } from "../components/Breed/BreedDetails";
import { BreedList } from "../components/Breed/BreedList";
import { NavBar } from "../components/NavBar";

export const Home = () => {
    return (
        <Router>
            <div className="container mx-auto">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={BreedList} />
                    <Route exact path="/details/:breedName" component={BreedDetails} />
                </Switch>
            </div>
        </Router>
    )
}
