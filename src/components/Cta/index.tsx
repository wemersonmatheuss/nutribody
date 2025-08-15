import styles from "./styles.module.css"

import { Button } from "../Button"

export function Cta() {
    return (
        <section className={styles.container}>

            <div className={styles.cta}>
                <h2>A fórmula que já mudou a vida de dezenas de pessoas agora pode mudar a sua!</h2>

                <p>Com ativos selecionados em laboratório próprio, o D’Castillá-Vie NutriBody é diferente de tudo que você já viu. Clique e mude de vida agora.</p>

                <Button name="Quero mudar de vida agora"/>
            </div>
            
        </section>
    )
}