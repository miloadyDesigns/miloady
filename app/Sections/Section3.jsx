'use client'

import { Tabs } from "@chakra-ui/react"
import { Suspense, useRef, useState } from "react";
import Portfolio from "../portfolio";
const websites = [
    {
        id: 1,
        title: "Air-Pro Systems",
        description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924145/images/tw4br9whpm5u7s3rfznl.png",
        link: "/portfolio/website-design" // Add this if you want the "Learn More" to link to another page
    },
    {
        id: 2,
        title: "Art-e-Gallery",
        description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924146/images/wo8fwzyarbanrd4khwdw.png",
        link: "/portfolio/mobile-app-design"
    },
    // {
    //   id: 3,
    //   title: "Catseyepest",
    //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924146/images/yo1dkz4v7hzdj95sncsy.png",
    //   link: "/portfolio/ui-ux-design"
    // },
    // {
    //   id: 4,
    //   title: "Closet Candy",
    //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924147/images/fiqpugv8jhrq3hyzvdv6.png ",
    //   link: "/portfolio/ui-ux-design"
    // },
    {
        id: 5,
        title: "New Songs Of Praise",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924150/images/tqjaftzw3ggzajasz2wq.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 6,
        title: "Ora Juice Skincare",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924150/images/iig4cv50lltupqxrejh5.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 7,
        title: "Diva Dolls Boutique",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924153/images/psborcdgeup3f4qdnzvb.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 8,
        title: "Denterprises",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924153/images/qmbiyqgxfsz2e8fzcy2i.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 9,
        title: "Page Production",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/PAGE-PROD.png",
        link: "/portfolio/ui-ux-design"
    }
];
const logos = [
    {
        id: 1,
        title: "Kodak Movement LLC",
        description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start",
        image: "/portfolio/1.png",
        link: "/portfolio/website-design" // Add this if you want the "Learn More" to link to another page
    },
    {
        id: 2,
        title: "Six Figure Club",
        description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start.",
        image: "/portfolio/3.png",
        link: "/portfolio/mobile-app-design"
    },
    {
        id: 3,
        title: "Yes I'm a Pot Head",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/4.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 4,
        title: "Vollmer Design Studio",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/6.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 5,
        title: "Pixel Brain Designs",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/5.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 6,
        title: "KRW Electric",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/11.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 7,
        title: "Diva Dolls Boutique",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/14.png",
        link: "/portfolio/ui-ux-design"
    },
    // {
    //   id: 8,
    //   title: "Weslers threads",
    //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730987929/portfolio/hrjbtn7yyrypmhr1omsf.png",
    //   link: "/portfolio/ui-ux-design"
    // },
    {
        id: 9,
        title: "Big Manny",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/15.png",
        link: "/portfolio/ui-ux-design"
    },

    {
        id: 11,
        title: "Original Manny Lager",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/8.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 12,
        title: "Mantastic",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/9.png",
        link: "/portfolio/ui-ux-design"
    },
    // {
    //   id: 13,
    //   title: "Estero",
    //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730987928/portfolio/encp9zl6wowdzbaxfbfa.png",
    //   link: "/portfolio/ui-ux-design"
    // },
    // {
    //   id: 14,
    //   title: "Icon Sportz",
    //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730987928/portfolio/wbdbbj0wey98x39k5qce.png",
    //   link: "/portfolio/ui-ux-design"
    // },
    // {
    //   id: 15,
    //   title: "PROSEPERITY TRADING",
    //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730987929/portfolio/rynarhb7d1lnrvbruoac.png",
    //   link: "/portfolio/ui-ux-design"
    // },
    // {
    //   id: 16,
    //   title: "KRW",
    //   description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
    //   image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730987927/portfolio/qd9etbo8cq7att1vmtle.png",
    //   link: "/portfolio/ui-ux-design"
    // }
];
const mobileApps = [
    {
        id: 1,
        title: "Fresha",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia porro alias autem nemo ipsam tenetur excepturi omnis, inventore, consequuntur!",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924149/images/kkxac88yaqc25ykpzvrv.png",
        link: "/portfolio/website-design" // Add this if you want the "Learn More" to link to another page
    },
    {
        id: 2,
        title: "Bunzers",
        description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924149/images/dgorzlnuzbxp5whandey.png",
        link: "/portfolio/mobile-app-design"
    },
    {
        id: 3,
        title: "Plano Salon",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924151/images/m12pvcpztczjfmugpr6u.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 4,
        title: "Brake Time",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "https://res.cloudinary.com/dz8sirg5s/image/upload/v1730924146/images/effuhfdvk5dlybkqlpgf.png",
        link: "/portfolio/ui-ux-design"
    }
];
const socialMedia = [
    {
        id: 1,
        title: "Diva Dolls",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia porro alias autem nemo ipsam tenetur excepturi omnis, inventore, consequuntur!",
        image: "/portfolio/Div-Dolls.png",
        link: "/portfolio/website-design" // Add this if you want the "Learn More" to link to another page
    },
    {
        id: 2,
        title: "Cedar Cove RV Resort",
        description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start.",
        image: "/portfolio/Cedar.png",
        link: "/portfolio/mobile-app-design"
    },
    {
        id: 3,
        title: "Pretty XO",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/Pretty-XO.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 4,
        title: "Denterprises",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/Denterprices.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 5,
        title: "Ora Juice Skincare",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/Orajuice.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 6,
        title: "Prosperity Trading",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/Trading.png",
        link: "/portfolio/ui-ux-design"
    },

];
const branding = [
    {
        id: 1,
        title: "Shift Juices and Food",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia porro alias autem nemo ipsam tenetur excepturi omnis, inventore, consequuntur!",
        image: "/portfolio/branding/branding1.png",
        link: "/portfolio/website-design" // Add this if you want the "Learn More" to link to another page
    },
    // {
    //   id: 2,
    //   title: "Quality1 Enterprises",
    //   description: "Our mobile app designs are user-centered, focusing on great user experiences and beautiful, intuitive interfaces that engage users from the start.",
    //   image: "/portfolio/branding/branding2.png",
    //   link: "/portfolio/mobile-app-design"
    // },
    {
        id: 3,
        title: "Icon One Sportz Management",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/branding/branding3.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 4,
        title: "Expert Valet",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/branding/branding4.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 5,
        title: "Dugans Pet Shop",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/branding/branding5.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 6,
        title: "Lotus Psychotherapy Services",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/branding/branding6.png",
        link: "/portfolio/ui-ux-design"
    },
    {
        id: 7,
        title: "Pezzano Law Group, LLC",
        description: "We specialize in creating seamless user interfaces and great user experiences. Our design is focused on usability, aesthetics, and functionality.",
        image: "/portfolio/branding/branding7.png",
        link: "/portfolio/ui-ux-design"
    },
];

const Section3 = () => {
    const [selectedItem, setSelectedItem] = useState('Websites')
    const sliderRef = useRef()
    const selectedItemHandler = (selectedItem) => {
        setSelectedItem(selectedItem)
    }
    return (
        <div className="relative  section_three  xs:mb-[10%] lg:mb-[5%]">
            <section className="w-full z-10">
                <div className="portfolioSection text-white xs:ml-[8%] lg:ml-[7%] 2xl:ml-[8%] xl:ml-[7%]  lg:w-[50%] 2xl:w-[30%] xs:w-[90%]">
                    <p className="text-[#999696] font-text pl-2 xs:text-[14px] md:text-[16px] lg:text-lg mt-2">Empowering the world through our technlogies</p>
                    <h3 className="text-while font-pp lg:text-[55px] xl:text-[66px] xs:text-[38px] md:text-[46px] -mt-2">Our Portfolio</h3>
                    <p className="text-white p-1 font-text xs:text-[14px] md:hidden">Explore our diverse portfolio showcasing innovative projects and successful collaborations across various industries. See how we bring creative ideas to life with precision and excellence.</p>
                </div>

                <div className="w-full">
                    <div className="flex gap-3 justify-start items-center pl-4 sm:pl-[8%] overflow-x-auto scrollbar-hide">
                        <div onClick={() => selectedItemHandler('Graphics')} className="p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-300 text-white whitespace-nowrap">
                            Graphics
                        </div>
                        <div onClick={() => selectedItemHandler('Websites')} className="p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-300 text-white whitespace-nowrap">
                            Websites
                        </div>
                        <div onClick={() => selectedItemHandler('Mobile Apps')} className="p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-300 text-white whitespace-nowrap">
                            Mobile Apps
                        </div>
                        <div onClick={() => selectedItemHandler('Social Media')} className="p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-300 text-white whitespace-nowrap">
                            Social Media
                        </div>
                        <div onClick={() => selectedItemHandler('Branding')} className="p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-300 text-white whitespace-nowrap">
                            Branding
                        </div>
                    </div>
                    <div className="mt-2">
                        {selectedItem == 'Graphics' &&
                            <Portfolio data={logos} ref={sliderRef} />
                        }
                        {selectedItem == 'Websites' &&
                            <Portfolio data={websites} ref={sliderRef} />
                        }
                        {selectedItem == 'Mobile Apps' &&
                            <Portfolio data={mobileApps} ref={sliderRef} />
                        }
                        {selectedItem == 'Social Media' &&
                            <Portfolio data={socialMedia} ref={sliderRef} />
                        }
                        {selectedItem == 'Branding' &&
                            <Portfolio data={branding} ref={sliderRef} />
                        }
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Section3
