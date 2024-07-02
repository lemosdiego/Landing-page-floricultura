import Styles from './servicos.module.css'

export default function Servicos() {
    return (
        <section className={Styles.servicos} id='servicos'>
            <div className={Styles.title}>
                <h2>Nossos Serviços</h2>
            </div>
            <div className={Styles.container_cards}>
                <div className={Styles.cards}>
                    <div className={Styles.img}>
                        <img src='igreja.png' />
                    </div>
                    <div className={Styles.title_card}>
                        <h3>Decoração Floral para Igrejas</h3>
                    </div>
                    <div className={Styles.descricao}>
                        <p>ransforme o ambiente da sua cerimônia com nossa decoração floral exclusiva para igrejas. De arranjos elegantes a detalhes meticulosos, criamos uma atmosfera encantadora que celebra o seu dia especial com beleza e serenidade.</p>
                    </div>
                </div>
                <div className={Styles.cards}>
                    <div className={Styles.img}>
                        <img src='casamento.png' />
                    </div>
                    <div className={Styles.title_card}>
                        <h3>Decoração para Casamentos:</h3>
                    </div>
                    <div className={Styles.descricao}>
                        <p>Crie uma atmosfera de conto de fadas em seu casamento com nossa decoração floral personalizada. De arranjos encantadores a detalhes delicados, cada flor é escolhida para refletir o amor e a beleza do seu dia especial.</p>
                    </div>
                </div>
                <div className={Styles.cards}>
                    <div className={Styles.img}>
                        <img src='jantar.png' />
                    </div>
                    <div className={Styles.title_card}>
                        <h3>Decoração para Jantares</h3>
                    </div>
                    <div className={Styles.descricao}>
                        <p>Crie uma atmosfera elegante em seu jantar com nossa decoração floral personalizada, que adiciona um toque de charme e sofisticação a cada detalhe da sua mesa.</p>
                    </div>
                </div>
                <div className={Styles.cards}>
                    <div className={Styles.img}>
                        <img src='buquedeflores.png' />
                    </div>
                    <div className={Styles.title_card}>
                        <h3>Buquê de Flores:</h3>
                    </div>
                    <div className={Styles.descricao}>
                        <p>Encante-se com nosso buquê de flores, uma mistura perfeita de frescor e beleza para complementar seu momento especial com sofisticação.</p>
                    </div>
                </div>
                <div className={Styles.cards}>
                    <div className={Styles.img}>
                        <img src='buquedenoiva.png' />
                    </div>
                    <div className={Styles.title_card}>
                        <h3>Buquê de noiva</h3>
                    </div>
                    <div className={Styles.descricao}>
                        <p>Nosso buquê é uma mistura perfeita de frescor e beleza, cuidadosamente montado para realçar sua felicidade e amor no grande dia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}