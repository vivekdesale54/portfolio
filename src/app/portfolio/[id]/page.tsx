"use client";
import React from "react";
import { ContainerScroll } from "../../../components/ui/container-scroll-animation";
import Image from "next/image";

export default function PortfolioProjectPage({ params }: { params: { id: string } }) {
    const id = params.id;

    const portfolioData = [{
        title: "Chat App Landing Page",
        description: "I designed the user interface for Chat App, a chat application aimed at providing seamless and secure communication for users. The goal was to create an intuitive and visually appealing interface that enhances the user experience across various devices.",
        image: "./Portfoliovda1.png"
    }, {
        title: "Landing page for Content creator",
        description: "This is lead capturing landing page for content creator. The goal was to create an intuitive and visually appealing interface that enhances the user experience across various devices.",
        image: "./Portfoliovda2.png"
    },
    {
        title: "It is templated created for a client",
        description: "It is template created for content creator to drag and drop and create their own website. ",
        image: "./Portfoliovda3.png"
    }, {
        title: "VR webinars and Courses Landing page",
        description: "VR webinars and Courses landing page for Content creator",
        image: "./Portfoliovda4.png"
    }]

    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-5xl font-semibold text-black dark:text-white">
                            {portfolioData[parseInt(id) - 1].title}
                        </h1>
                    </>
                }
            >
                <div className="h-full mx-auto rounded-2xl object-cover object-left-top  overflow-y-scroll">
                    <Image
                        src={(Number(id) > 2) ? `/${id}.jpg` : `/${id}.svg`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="overflow-auto"
                        draggable={false}
                    />
                </div>
            </ContainerScroll>
        </div>
    );
}