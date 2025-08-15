import styles from "./styles.module.css"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    name: string;
}

function sendMessageWhatsApp() {
    // Guardar o numero de telefone
    const phoneNumber = "5581995166980"

    // Guardar a menssagem automatica
    const message = "Olá, quero emagrecer com saúde usando o NutriBody agora!"
    
    // codificar a mensagem
    const encodedMessage = encodeURIComponent(message)

    // link para abir o whatsapp com a mensagem automatica
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Abrir em nova aba 
    window.open(url, "_blank") 
}

export function Button({ name, ...rest}: Props) {
    return (
        <button className={styles.container} onClick={sendMessageWhatsApp} {...rest}> {name} </button>
    )
}