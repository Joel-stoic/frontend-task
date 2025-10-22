import React, { useRef, useState } from 'react';
import { FaUserDoctor, FaChartLine } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CiUser, CiDollar } from "react-icons/ci";
import { TiTick } from "react-icons/ti";

const cards = [
    {
        title: "EHR",
        description: "At the heart of Tebra’s platform is a cloud-based EHR that streamlines clinical documentation, helping you chart faster and more accurately. With AI Note Assist, your notes practically write themselves, freeing you up to focus on patient care.",
        icon: <FaUserDoctor className='text-3xl' />,
        image: "/src/assets/person1-removebg-preview.png",
        features: ["AI Note Assist", "Faster Charting", "Cloud-based"],
    },
    {
        title: "Patient Experience",
        description: "Modern tools to simplify booking, intake, communication, and feedback...",
        icon: <CiUser className='text-3xl' />,
        image: "/src/assets/art-4.webp",
        features: ["Online Intake", "Reminders", "Feedback"],
    },
    {
        title: "Medical Practice Marketing",
        description: "Attract new patients and grow your practice with marketing tools...",
        icon: <FaChartLine className='text-3xl' />,
        image: "/src/assets/person1-removebg-preview.png",
        features: ["Custom Website", "Review Response", "Google Sync"],
    },
    {
        title: "Billing and Payments",
        description: "Simplified medical billing, insurance claims processing, and payments...",
        icon: <FaRegMoneyBillAlt className='text-3xl' />,
        image: "/src/assets/art-4.webp",
        features: ["Claims Processing", "Patient Payments", "Denial Reduction"],
    },
    {
        title: "Billing Companies",
        description: "Get more clients, collect more revenue, and run efficiently...",
        icon: <CiDollar className='text-3xl' />,
        image: "/src/assets/person1-removebg-preview.png",
        features: ["Revenue Tracking", "Client Management", "Fast Reports"],
    },
];

// Define a list of mild Tailwind background colors
const backgroundColors = [
    "bg-blue-50",
    "bg-green-50",
    "bg-yellow-50",
    "bg-pink-50",
    "bg-indigo-50",
];

const CardSection = () => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="w-full py-10 bg-gray-50">
            <h2 className="text-2xl font-semibold text-center mb-6">
                Software solutions powering your practice
            </h2>

            <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="flex gap-6 overflow-x-auto px-6 cursor-grab active:cursor-grabbing scroll-smooth select-none  "
                style={{ scrollbarWidth: "none" }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        // Increased width here:
                        className={`min-w-[400px] max-w-md ${backgroundColors[index % backgroundColors.length]} rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden min-h-[500px] flex flex-col`}
                    >
                        <div className="p-6 flex-grow">
                            <div className="text-3xl mb-3 text-teal-600">{card.icon}</div>
                            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{card.title}</h3>
                            <p className="text-gray-600 text-base leading-relaxed">{card.description}</p>
                        </div>

                        <div className="w-full mt-auto relative group">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-contain transition-filter duration-300 group-hover:blur-sm"
                            />
                            <div className="flex ">
                            <ul className="absolute inset-0 flex flex-col justify-center items-start bg-opacity-50 text-green-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 space-y-2 text-center gap-4">
                                
                                {card.features.map((feature, i) => (
                                    
                                    <li key={i} className="text-sm font-bold">
                                        <div className="flex">
                                             <TiTick className="text-green-600" />
                                        {feature}
                                        </div>
                                         
                                        
                                    </li>
                                
                                ))}
                                <button className='bg-orange-400 p-4 rounded-full'>Learn More</button>
                            </ul>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSection;
