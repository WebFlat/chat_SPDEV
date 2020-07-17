import React from 'react';
import style from './Main.module.css';
import LinkPage from '../link_page';


const MainContent = () => {
    return (
        <section className={style.wrapper}>
            <LinkPage url="users" text="To Users">

            </LinkPage>
            <LinkPage url="posts" text="To Posts">

            </LinkPage>
           
        </section>
    );
};




export default MainContent;
