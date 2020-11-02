import React from "react";

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Navigation from './Navigation';
import Main from './Main';
import OfferPage from "./OfferPage";
import TeamAll from "./TeamAll";
import GalleryPage from "./GalleryPage";
import ContactPage from "./ContactPage";
import '../styles/App.scss';
import Footer from "./Footer";
import Pricing from "./Pricing";
import TreatmentDescription from "./TreatmentDescription";

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/offerpage/:treatmentID" component={TreatmentDescription}/>
                <Route path="/offerpage" component={OfferPage}/>
                <Route path="/team" component={TeamAll}/>
                <Route path="/pricing" component={Pricing}/>
                <Route path="/gallerypage" component={GalleryPage}/>
                <Route path="/contactpage" component={ContactPage}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
};

export default App;