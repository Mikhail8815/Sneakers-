import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import { S } from  "./components/pages/_styles"
import {Modal} from "./components/pages/Modal";

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={"/adidas"}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={"/puma"}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={"/abibas"}>Abibas</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/adidas"} />} />

                        <Route path="/adidas" element={<Adidas />} />
                        <Route path="/puma" element={<Puma />} />
                        <Route path="/abibas" element={<Abibas />} />
                        <Route path="/adidas/:id" element={<Modal />} />

                        <Route path="/*" element={<Error404 />} />
                        {/*<Route path="/*" element={<Navigate to={"/error404"} />} />*/}
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
