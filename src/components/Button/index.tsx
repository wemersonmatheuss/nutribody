import styles from "./styles.module.css"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    name: string
}

export function Button({ name, ...rest}: Props) {
    return (
        <button className={styles.container} {...rest}> {name} </button>
    )
}