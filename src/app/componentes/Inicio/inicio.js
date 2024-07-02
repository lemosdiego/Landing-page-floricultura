import Styles from './inicio.module.css'

export default function Inicio() {
    return (
        <section className={Styles.inicio} id='inicio'>
            <div className={Styles.container}>
                <div className={Styles.title}>
                    <h1>Arte em Flores</h1>
                </div>
                <div className={Styles.subtitle}>
                    <h2>Transforme Seus Melhores Momentos em Lembranças Inesquecíveis com a Josias Decorações</h2>
                </div>
                <div className={Styles.botao}>
                    <button>Nossos Serviços</button>
                </div>
            </div>
        </section>
    )
}