import Styles from './contatos.module.css'

export default function Contatos() {
    return (
        <section className={Styles.contatos} id='contato'>
            <div className={Styles.container_contato}>
                <div className={Styles.logo}>
                    <h3>Contate-nos</h3>
                </div>
                <div className={Styles.form}>
                    <form>
                        <input placeholder='Seu nome' />
                        <input placeholder='Email' />
                        <input placeholder='telefone' />
                        <textarea></textarea>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}