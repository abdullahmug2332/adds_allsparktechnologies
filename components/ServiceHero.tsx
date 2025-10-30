'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import img1 from "@/public/images/serviceshape1.png"
import img2 from "@/public/images/serviceshape2.png"
import arrowleft from "@/public/images/leftarrow.png"
import arrowright from "@/public/images/rightarrow.png"
import { usePathname } from "next/navigation";
import { toast } from "sonner"; // Sonner for toasts
import Link from 'next/link'
import { motion } from "framer-motion";
import { baseURL } from '@/api/baseURL'

interface HeroData {
    btnText: string;
    btnText2: string;
    btnText3: string;
    title: string;
    description: string;
    formSubtitle: string;
    formTitle: string;
}
interface ServiceHeroProps {
    serviceHero: HeroData;
}
export default function ServiceHero({ serviceHero }: ServiceHeroProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const pathname = usePathname();
    const formattedPath = pathname 
        .replace("/", "")
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const values = {
            name: name,
            email: email,
            phone: phone,
            message: message,
            service: formattedPath,
        }
        try {
            const res = await fetch(`${baseURL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = await res.json();

            if (res.ok) {
                toast("Message Sent Successfully!", {
                    description: "Message Sent Successfully. We will catch you as soon a possible.",
                    action: {
                        label: "OK",
                        onClick: () => console.log("Undo"),
                    },

                });
                setName("")
                setEmail("")
                setPhone("")
                setMessage("")
            } else {
                toast.error(data.error || "Something went wrong");
            }
        } catch (err) {
            toast.error("Network error");
            console.log(err);
        }
    };

    return (
        <div className='newservice bg text-white min-h-[680px] relative !w-[100vw] overflow-x-hidden' id='hero'>
            <Image src={img1} className='absolute top-0 lg:bottom-0 left-0' alt="heroimg" />
            <Image src={img2} className='absolute bottom-0 right-0 z-[0]' alt="heroimg" />
            <div className="container flex flex-wrap lg:items-center justify-center  pad" >
                <motion.div
                    className="w-full lg:w-1/2 flex flex-col items-start text-start"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}>
                    <Link href='/contact'>
                        <button className=' flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[27px] font-[500] mt-[50px] lg:mt-0  hover:scale-[1.02] duration-500'>No Website = No Trust. Let’s Fix That.</button>
                    </Link>
                    <p className='text-[30px] lg:text-[40px] 2xl:text-[50px] font-[700] mt-[20px] w-full md:w-[70%] lg:w-full leading-14 font'>Still Running Your Business without a Proper Website?</p>
                    <p className='w-full md:w-[80%] lg:w-full mt-[10px] text-[18px] '>Without a proper website, you’re invisible to 70% of buyers who search online before making a decision. We build professional websites that put your business on the map — and in front of paying customers.</p>
                   
                </motion.div>
                <motion.div
                    className="w-full lg:w-1/2 lg:pl-[80px] flex flex-col items-start z-[20] mt-[40px] lg:mt-[0]"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}>
                    <div className='flex items-center gap-[5px] mt-[10px] '>
                        <Image src={arrowleft} className='w-[35px]' alt='icon'></Image>
                        <p className='para font-[500] text-start '>{serviceHero.formSubtitle}</p>
                        <Image src={arrowright} className='w-[35px]' alt='icon'></Image>
                    </div>
                    <p className='heading font-[700] my-[10px] text-start w-full'>{serviceHero.formTitle}</p>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <div className='w-full flex flex-col items-center sm:items-start gap-[10px] relative z-[20]'>
                            <div className='flex gap-[15px] mt-[20px] w-full relative z-[20]'>
                                <div className='w-full lg:w-1/2'>
                                    <label htmlFor="name" className='!text-start'>Name*</label>
                                    <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} required className='mt-[10px]  text-white w-full border bg-transparent py-[10px] px-[8px]  ' />
                                </div>
                                <div className='w-full lg:w-1/2'>
                                    <label htmlFor="name" className='!text-start'>Email*</label>
                                    <input type="email" placeholder='Enter Valid Email' value={email} onChange={(e) => setEmail(e.target.value)} required className='mt-[10px]  text-white w-full border bg-transparent py-[10px] px-[8px]' />
                                </div>
                            </div>
                            <div className='w-full '>
                                <label htmlFor="name">Phone*</label>
                                <input type="text" placeholder='Enter Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required className='mt-[10px]  text-white w-full border bg-transparent py-[10px] px-[8px]' />
                            </div>
                            <div className='w-full '>
                                <label htmlFor="name">Message*</label>
                                <textarea placeholder='Type Here...' value={message} onChange={(e) => setMessage(e.target.value)} required className='mt-[10px] min-h-[150px]  text-white w-full border bg-transparent py-[10px] px-[8px]'></textarea>
                            </div>
                            <button className='px-[20px] py-[10px] font-[500] bg-[#F98600] rounded-[25px] text-center hover:border hover:border-white hover:bg-transparent text-white'>{serviceHero.btnText3}</button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}