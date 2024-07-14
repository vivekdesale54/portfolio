"use client";
import React from "react";
import Link from "next/link";
import { LampContainer } from "@/components/ui/lamp";

export default function PortfolioPage() {

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
            <LampContainer >
                {""}
            </LampContainer>
            <div className="w-full md:w-[60%] p-4 mx-auto">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
                    {
                        portfolioData.map((data, index) => {
                            return (
                                <><Link href={`/portfolio/${index + 1}`} className="overflow-hidden rounded-lg">
                                    <img src={data.image} className="rounded-lg hover:scale-105 transition-all" alt={data.title} /></Link>
                                    <div className="flex flex-col gap-3 p-4"><h1 className="text-2xl font-bold">{data.title}</h1>
                                        <p className="text-md text-gray-500">{data.description}</p></div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}