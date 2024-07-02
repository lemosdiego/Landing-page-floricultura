import Styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.icon}>
                <div className={Styles.icones}>
                    <img src='whats.svg' />
                </div>
                <div className={Styles.icones}>
                    <img src='linkedin.svg' />
                </div>
                <div className={Styles.icones}>
                    <img src='insta.svg' />
                </div>
            </div>
            <p>© 2024 Washington Lemos. Todos os direitos reservados.</p>
        </footer>
    )
}