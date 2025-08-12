import styles from "./styles.module.css"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
}

export function Button({ title, ...rest}: Props) {
    return (
        <button className={styles.container} {...rest}> {title} </button>
    )
}