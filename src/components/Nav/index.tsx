import styles from "./styles.module.css"

import logo from "../../assets/svg/logoDcastillaVie.svg"

import { Button } from "../Button"

export function Nav() {
    return (
        <nav className={styles.container}>
            <img src={logo} alt="Logo da D'Castillá-Vie" />
            
            <Button name="Quero emagrecer agora!"/>
        </nav>
    )
}