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
                            <a href="">Início</a>
                            <a href="">Sobre</a>
                            <a href="">Diferencial</a>
                            <a href="">Por que usar?</a>
                        </div>
                    </div>

                    <div className={styles.promotion}>
                        <div className={styles.title}>
                            <h3>Receba promoções</h3>
                            <p>Deixe seu e-mail e receba todas as promoções que surgirem</p>
                        </div>

                        <div className={styles.submit}>
                                <input type="email" placeholder="Digite seu melho e-mail" />
                                <button>Enviar</button>
                        </div>
                        
                    </div>
                </div>

            </div>

            <div className={styles.line}></div>

            <div className={styles.footerBottom}>
                <a href="">Desenvolvido por Wemerson | Dev</a>
                <p>© 2025 . Todos os direitos reservados.</p>
            </div>
        </footer>
    )
    
}