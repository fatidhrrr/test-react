import React from "react"
import Vehicule from "./Vehicule"

const Garage = (props) => {
    return (
        <div>
            <Vehicule marque="Mercedes Benz S 260" annee="1991" couleur="bleu" carburant="essence" validite="non validé"/>
            <Vehicule marque="Fiat 500" annee="2010" couleur="noir" carburant="essence" validite="non validé"/>
            <Vehicule marque="Volkswagen Crafter" annee="2016" couleur="blanche" carburant="diesel" validite="validé"/>
            <Vehicule marque="BMW 114" annee="2012" couleur="bleu" carburant="essence" validite="non validé"/>
            <Vehicule marque="Audi A3" annee="2015" couleur="rouge" carburant="diesel" validite="validé"/>
        </div>
    )
}

export default Garage;