import styles from "./styles.module.css"

import { Button } from "../Button"

type Props = {
    title: string;
    description: string
    points?: string
    img: string

    titleButton: string;
}

export function CardDestak({ title, description, points, img, titleButton}: Props) {
    return (
        <section className={styles.container}>
            <div className={styles.image}>
                <img src={img} alt="" />
            </div>

            <div className={styles.infos}>
                <h2>{title}</h2>
                
                <p>{description}</p>
                
                <p>{points}</p>

                <Button name={titleButton}/>
            </div>
        </section>
    )
}