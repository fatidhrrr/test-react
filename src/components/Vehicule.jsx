import React from "react"

const Vehicule = (props) => {
    let color;
    if(props.validite == "non validé") { 
        color = "red" }
        else{
            color = ""
        }

        return (
            <div>
                <div>
                    {props.marque}
                </div>
            <div>
                {props.annee}
            </div>
            <div>
                {props.couleur}
            </div>
            <div>
                {props.carburant}
            </div>
            <div className={color}>
                {props.validite}
            </div>
        </div>
        )
        }

export default Vehicule;