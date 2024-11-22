import Cards from '@/app/_components/BlogsCards/Cards'
import Image from 'next/image'
import React from 'react'
const data = [
    {
        "title": "The Future of AI: Trends and Predictions",
        "shortDescription": "Learn how the fashion industry is embracing sustainability and the impact of eco-friendly choices on the environment.",
        "image": "/blog/blog1.webp",
        "link": "/blog/detail"
    },
    {
        "title": "10 Tips for Better Remote Work Productivity",
        "shortDescription": "Learn how the fashion industry is embracing sustainability and the impact of eco-friendly choices on the environment.",
        "image": "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        "link": "/blog/detail"
    },
    {
        "title": "The Rise of Sustainable Fashion",
        "shortDescription": "Learn how the fashion industry is embracing sustainability and the impact of eco-friendly choices on the environment.",
        "image": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww",
        "link": "/blog/detail"
    },
    {
        "title": "Beginner's Guide to Investing in Cryptocurrency",
        "shortDescription": "Learn how the fashion industry is embracing sustainability and the impact of eco-friendly choices on the environment.",
        "image": "https://images.unsplash.com/photo-1589914760168-3214edc58460?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwdmlicmFudHxlbnwwfHwwfHx8MA%3D%3D",
        "link": "/blog/detail"
    },
    {
        "title": "Top 5 Travel Destinations for 2024",
        "shortDescription": "Learn how the fashion industry is embracing sustainability and the impact of eco-friendly choices on the environment.",
        "image": "https://images.unsplash.com/photo-1581105321670-445a7609b541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwdmlicmFudHxlbnwwfHwwfHx8MA%3D%3D",
        "link": "/blog/detail"
    },
    {
        "title": "The Rise of Sustainable Fashion",
        "shortDescription": "Learn how the fashion industry is embracing sustainability and the impact of eco-friendly choices on the environment.",
        "image": "https://images.unsplash.com/photo-1648658596371-a4a3e829ca86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjB2aWJyYW50fGVufDB8fDB8fHww",
        "link": "/blog/detail"
    },
    {
        "title": "Beginner's Guide to Investing in Cryptocurrency",
        "shortDescription": "Learn how the fashion industry is embracing sustainability and the impact of eco-friendly choices on the environment.",
        "image": "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
        "link": "/blog/detail"
    },
    {
        "title": "Top 5 Travel Destinations for 2024",
        "shortDescription": "Learn how the fashion industry is embracing sustainability and the impact of eco-friendly choices on the environment.",
        "image": "https://plus.unsplash.com/premium_photo-1683120972279-87efe2ba252f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
        "link": "/blog/detail"
    },
    {
        "title": "The Rise of Sustainable Fashion",
        "shortDescription": "Learn how the fashion industry is embracing sustainability and the impact of eco-friendly choices on the environment.",
        "image": "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
        "link": "/blog/detail"
    }
]

const Section2 = () => {
    return (
        <div className="relative z-[10] w-screen mb-12">
            <div className="z-10 pt-[5%]">
                <div className="xs:w-[90%] lg:w-[80%] m-auto h-full overflow-hidden z-10 ">

                    <div className='flex justify-center  flex-wrap space-x-4'>
                        {data.map((blog, index) => (
                            <Cards
                                key={index}
                                title={blog.title}
                                shortDescription={blog.shortDescription}
                                image={blog.image}
                                link={blog.link}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </div>


    )
}

export default Section2