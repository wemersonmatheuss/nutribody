import styles from "./styles.module.css"

import { Button } from "../Button"

import imgNutriBody from "../../assets/nutribodyImage.jpg"

export function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h1>Queime gordura, ganhe energia e transforme seu corpo. Comece hoje!</h1>
                
                <p>Cansado de esperar para ter resultados? Com tecnologia de ponta e formula selecionada, o NutriBody controla seu apetite e mantém sua disposição lá no alto </p>

                <Button name="Quero secar agora"/>
            </div>

            <div className={styles.image}>
                <img src={imgNutriBody} alt="" />
            </div>
        </div>
    )
}