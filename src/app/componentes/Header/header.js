'use client';
import { useEffect } from 'react';
import Styles from "./header.module.css";
import Image from "next/image";

export default function Header() {

    useEffect(() => {
        function handleOutsideClick(event) {
            const header = document.getElementById("header");
            if (!header.contains(event.target)) {
                fecharMenu();
            }
        }

        function handleScroll() {
            fecharMenu();
        }

        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function abriMenu() {
        const header = document.getElementById('header');
        const iconeOpen = document.getElementById('open');
        const iconClose = document.getElementById('close');

        header.classList.add(Styles.show);
        iconeOpen.style.display = 'none';
        iconClose.style.display = 'block';
    }

    function fecharMenu() {
        const header = document.getElementById("header");
        const openSvg = document.getElementById("open");
        const closeSvg = document.getElementById('close');

        header.classList.remove(Styles.show);
        openSvg.style.display = "block";
        closeSvg.style.display = "none";
    }

    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.icon}>
                    <Image src="/floricultura/2.png" id="open" alt="open" width={50} height={50} onClick={abriMenu} />
                    <Image src="/floricultura/2.png" id="close" alt="close" width={50} height={50} onClick={fecharMenu} style={{ display: "none" }} />
                </div>
            </div>
            <header className={Styles.header} id="header">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li className={Styles.icone}>
                        <img src='/floricultura/2.png' />
                    </li>
                    <li><a href="#sobre">Sobre nós</a></li>
                    <li><a href="#contato">Contatos</a></li>
                </ul>
                <div className={Styles.contatos}>
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
            </header>
        </>
    );
}
