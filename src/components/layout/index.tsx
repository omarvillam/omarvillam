import React, { ReactNode } from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import { Helmet } from "react-helmet"
import './layout.module.scss'

type Props = {
    children: ReactNode
    title?: string
}

export default function Layout(props: Props) {
    return (
        <main>
            <Helmet>
                <title>{props.title ?? 'Omar Villalobos ~ Front End Developer'}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Helmet>
            <Navbar/>
            {props.children}
            <Footer />
        </main>
    )
}