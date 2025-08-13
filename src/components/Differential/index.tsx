import styles from "./styles.module.css"

import { Button } from "../Button"

type Props = {
    title: string;
    
    img1: string;
    name1: string;
    description1: string;

    img2: string;
    name2: string;
    description2: string;

    img3: string;
    name3: string;
    description3: string;

    titleButton: string;
}

export function Differential({ title, img1, name1, description1, img2, name2, description2, img3, name3, description3, titleButton }: Props) {
    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h2>{title}</h2>
            </div>

            <div className={styles.infos}>
                <div className={styles.info}>
                    <img src={img1} alt="" />
                    <h3>{name1}</h3>
                    <p>{description1}</p>
                </div>

                <div className={styles.info}>
                    <img src={img2} alt="" />
                    <h3>{name2}</h3>
                    <p>{description2}</p>
                </div>

                <div className={styles.info}>
                    <img src={img3} alt="" />
                    <h3>{name3}</h3>
                    <p>{description3}</p>
                </div>
            </div>

            <Button name={titleButton}/>
        </section>
    )
}