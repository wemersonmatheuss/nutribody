import styles from "./styles.module.css"

import { CardTestimonials } from "../CardTestimonials"

import logo from "../../assets/nutribodyImage.jpg"

export function Testimonials() {
    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h2>Depoimentos</h2>
                <p>Veja o que as pessoas dizem sobre o D'Castillá-Vie NutriBody!</p>
            </div>

            <div className={styles.allTestimonials}>
                <CardTestimonials 
                description="“Depoimento que alguém escreveu destacando os benefícios ou ganhos que teve ao usar o seu produto/serviço.”" 
                picture={logo}
                name="Wemerson Matheus"
                work="Desenvolvedor da NutriBody"
                />

                <CardTestimonials 
                description="“Depoimento que alguém escreveu destacando os benefícios ou ganhos que teve ao usar o seu produto/serviço.”" 
                picture={logo}
                name="Wemerson Matheus"
                work="Desenvolvedor da NutriBody"
                />
            
                <CardTestimonials 
                description="“Depoimento que alguém escreveu destacando os benefícios ou ganhos que teve ao usar o seu produto/serviço.”" 
                picture={logo}
                name="Wemerson Matheus"
                work="Desenvolvedor da NutriBody"
                />
            </div>

            
        </section>
    )
}