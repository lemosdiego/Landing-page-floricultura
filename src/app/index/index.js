import Contatos from "../componentes/Contatos/contatos";
import Footer from "../componentes/Footer/footer";
import Header from "../componentes/Header/header";
import Inicio from "../componentes/Inicio/inicio";
import Servicos from "../componentes/Servicos/servicos";
import Sobre from "../componentes/Sobre/sobre";

export default function Index() {
    return (
        <>
            <Header />
            <Inicio />
            <Servicos />
            <Sobre />
            <Contatos />
            <Footer />
        </>
    )
}