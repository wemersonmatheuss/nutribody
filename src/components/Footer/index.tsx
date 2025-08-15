import styles from "./styles.module.css"

import logo from "../../assets/svg/logoNutriBody.svg"

export function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.footerTop}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo do NutriBody" />
                </div>

                <div className={styles.infos}>
                    <div className={styles.navigation}>
                        <h3>Navegação rápida</h3>
                        <div className={styles.linksNavigation}>
                            <a href="#initial">Início</a>
                            <a href="#pqusar">Por que usar?</a>
                            <a href="#differential">Diferencial</a>
                            <a href="#faq">Perguntas frequentes</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.line}></div>

            <div className={styles.footerBottom}>
                <a href="https://www.instagram.com/wemersonmth/" target="_blank" rel="noopener">Desenvolvido por Wemerson | Dev</a>
                <p>© 2025 . Todos os direitos reservados.</p>
            </div>
        </footer>
    )
    
}