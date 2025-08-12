import styles from "./styles.module.css"

import logo from "../../assets/svg/logoNutriBody.svg"

import { Button } from "../Button"

export function Nav() {
    return (
        <nav className={styles.container}>
            <img src={logo} alt="Logo da D'Castillá-Vie" />
            
            <Button title="Quero emagrecer agora"/>
        </nav>
    )
}