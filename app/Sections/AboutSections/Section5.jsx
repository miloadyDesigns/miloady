import React from 'react'

const Section5 = () => {
    return (
        <div className="relative z-[1] xs:mb-[10%] lg:mb-[5%]">
            <div className="xs:w-[90%] lg:w-[80%] m-auto">
                <div className='w-full pt-[10%] flex xs:flex-col lg:flex-row justify-between'>

                    <div className='xs:w-[100%] lg:w-[40%] p-2'>
                        <h2 className='font-pp text-white mb-4 xs:text-sm lg:text-sm xl:text-xl'>A C H I E V M E N T S</h2>
                        <h1 className='text-white xs:text-[32px] lg:text-[42px] xl:text-[52px] leading-none font-roboto'>
                            We’ve won 50 awards in the last year
                        </h1>
                    </div>
                    <div className='xs:w-[100%] lg:w-[50%] xs:mt-4 lg:mt-0 p-2'>
                        <p className='text-white xs:text-sm lg:text-[18px] xl:text-lg'>
                            Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <p className='text-white pt-6 xs:text-sm lg:text-[18px] xl:text-lg'>

                            Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table ">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Awards</th>
                                <th>Type</th>
                                <th>Project</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="alert" role="alert">
                                <th scope="row">01</th>
                                <td>Site of the day</td>
                                <td>Readability</td>
                                <td>Techo World</td>
                                <td>
                                    2017
                                </td>

                            </tr>
                            <tr class="alert" role="alert">
                                <th scope="row">02</th>
                                <td>Motion Graphics</td>
                                <td>Animation</td>
                                <td>Motion Lab</td>
                                <td>
                                    2018
                                </td>

                            </tr>
                            <tr class="alert" role="alert">
                                <th scope="row">03</th>
                                <td>Full Stack</td>
                                <td>Development</td>
                                <td>E-Commmerce</td>
                                <td>
                                    2021
                                </td>

                            </tr>
                            <tr class="alert" role="alert">
                                <th scope="row">04</th>
                                <td>Mobile App</td>
                                <td>Development</td>
                                <td>Fresha</td>
                                <td>
                                    2023
                                </td>

                            </tr>
                            <tr class="alert" role="alert">
                                <th scope="row">05</th>
                                <td>Site of the day</td>
                                <td>Readability</td>
                                <td>Techo World</td>
                                <td>
                                    2024
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    )
}

export default Section5