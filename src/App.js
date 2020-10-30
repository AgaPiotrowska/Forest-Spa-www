import React from "react";
import ReactDOM from "react-dom";

import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import OfferPage from "./components/OfferPage";
import TeamAll from "./components/TeamAll";
import GalleryPage from "./components/GalleryPage";
import ContactPage from "./components/ContactPage";
import './App.scss';
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";


const App = () => {
    return (
        <HashRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/offerpage" component={OfferPage} />
                <Route path="/team" component={TeamAll}/>
                <Route path="/pricing" component={Pricing}/>
                <Route path="/gallerypage" component={GalleryPage}/>
                <Route path="/contactpage" component={ContactPage}/>
            </Switch>
            <Footer/>
        </HashRouter>
    )
};

//ReactDOM.render(<App />, document.querySelector("#app"));
export default App;