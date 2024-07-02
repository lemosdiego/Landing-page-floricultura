import Styles from './sobre.module.css'

export default function Sobre() {
    return (
        <section className={Styles.sobre} id='sobre'>
            <div className={Styles.title}>
                <h2>Sobre nós</h2>
            </div>
            <div className={Styles.descricao}>
                <p>Somos apaixonados por flores e dedicados a transformar suas ocasiões especiais em experiências memoráveis. Com anos de experiência em design floral, nosso compromisso é criar arranjos únicos e elegantes que capturam a essência de cada evento. Da simplicidade do dia a dia aos momentos mais extraordinários, nossa equipe talentosa está aqui para tornar seus sonhos florais uma realidade. Descubra como podemos fazer a diferença em seu próximo evento.</p>
                <p>Descubra nossa variedade de produtos de alta qualidade, incluindo buquês de flores frescas, arranjos personalizados para eventos especiais e decoração floral para ambientes encantadores. Estamos aqui para transformar seus momentos em memórias inesquecíveis com nossa expertise em design floral. Entre em contato para explorar esses e muitos outros serviços, e faça um orçamento sem compromisso hoje mesmo!</p>
                <p>Explore Nossa Galeria de Fotos e Inspire-se! Descubra mais sobre nosso trabalho excepcional em decoração floral.    Saber mais...</p>
            </div>
        </section>
    )
}