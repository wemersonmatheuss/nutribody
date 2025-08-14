import styles from "./styles.module.css"

import star from "../../assets/svg/star.svg"

type Props = {
    description: string;
    picture: string;
    name: string;
    work: string;
}

export function CardTestimonials({ description, picture, name, work}: Props) {
    return (
        <div className={styles.container}>
                    <div className={styles.star}>
                        <img src={star} alt="Icone de estrela de avaliação" />
                        <img src={star} alt="Icone de estrela de avaliação" />
                        <img src={star} alt="Icone de estrela de avaliação" />
                        <img src={star} alt="Icone de estrela de avaliação" />
                        <img src={star} alt="Icone de estrela de avaliação" />
                    </div>

                    <div className={styles.text}>
                        <p>{description}</p>
                    </div>

                    <div className={styles.person}>
                        <img src={picture} alt="" />

                        <h3>{name}</h3>
                        <p>{work}</p>
                    </div>
        </div>
    )
}