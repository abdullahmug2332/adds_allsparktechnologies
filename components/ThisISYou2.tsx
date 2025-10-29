"use client"

import { VerticalTimeline } from "@/components/Vertical-timeline"
import { Check } from "lucide-react"

const timelineSteps = [
    {
        id: 1,
        title: "You have a domain, but not a live website.",
        icon: <Check className="h-5 w-5" />,
        status: "completed" as const,
    },
    {
        id: 2,
        title: "Your present website looks like it was made in the 90s.",
        icon: <Check className="h-5 w-5" />,
        status: "completed" as const,
    },
    {
        id: 3,
        title: "You want a portfolio site that actually converts.",
        icon: <Check className="h-5 w-5" />,
        status: "completed" as const,
    },
    {
        id: 4,
        title: "Your website is a digital showpiece, it doesn't bring in any leads, sales or even visits.",
        icon: <Check className="h-5 w-5" />,
        status: "completed" as const,
    },
    {
        id: 5,
        title: "You tried WordPress, got lost, and never looked back.",
        icon: <Check className="h-5 w-5" />,
        status: "completed" as const,
    },
    {
        id: 6,
        title: "You're losing eyeballs.",
        icon: <Check className="h-5 w-5" />,
        status: "completed" as const,
    },
    {
        id: 7,
        title: "You've got a killer product, but your website makes it look average.",
        icon: <Check className="h-5 w-5" />,
        status: "completed" as const,
    },
    {
        id: 8,
        title: "You know you need a website, but don't know where to start.",
        icon: <Check className="h-5 w-5" />,
        status: "completed" as const,
    },
    {
        id: 9,
        title: "You want to stand out on the web, not copy paste another template.",
        icon: <Check className="h-5 w-5" />,
        status: "completed" as const,
    },
    {
        id: 10,
        title: "You've watched a hundred Framer tutorials and still feel stuck.",
        icon: <Check className="h-5 w-5" />,
        status: "completed" as const,
    },
    {
        id: 11,
        title: "There's \"something missing\" on your website, you just don't know what.",
        icon: <Check className="h-5 w-5" />,
        status: "completed" as const,
    },
    {
        id: 12,
        title: "You're embarrassed to send your link because it feels half-finished.",
        icon: <Check className="h-5 w-5" />,
        status: "completed" as const,
    },
]

const leftSteps = timelineSteps.slice(0, 6)
const rightSteps = timelineSteps.slice(6, 12)

export default function ThisIsYou2() {
    return (

        <div className="container pad">
            <div className="mb-8 md:mb-12 sm:text-center">
                <h1 className="heading md:text-4xl font-bold color mb-2">This is You, Isnt It?</h1>
                <p className="para md:text-lg text-slate-600">Your journey to a better website starts here — where design meets performance, and every click turns visitors into loyal customers.</p>
            </div>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ">
                {/* Left Timeline */}
                <div>
                    <VerticalTimeline
                        steps={leftSteps}
                        lineColor="bg"
                        dotColor="bg"
                        completedColor="bg"
                    />
                </div>

                {/* Right Timeline */}
                <div >
                    <VerticalTimeline
                        steps={rightSteps}
                        lineColor="bg"
                        dotColor="bg"
                        completedColor="bg"
                    />
                </div>
            </div>
            <div className="block md:hidden">
                <VerticalTimeline
                    steps={timelineSteps}
                    lineColor="bg"
                    dotColor="bg"
                    completedColor="bg"
                />
            </div>
        </div>
    )
}
