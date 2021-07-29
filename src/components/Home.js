import React from "react";
import image from "../qyb.jpg";

export default function Home() {
    return (
        <main>
            <img src={ image } alt="Home page image" className="absolute object-cover w-full h-full" />
            <section className="relative flex, justify-center min-h-screen pt-12 lg:pt-64 px-8" >
                <h1 className="text-6xl text-green-100 fonmt-bold cursive leading-none lg:loading-snug home-name"> Oui, Amigo</h1>
            </section>
        </main>
    )
}