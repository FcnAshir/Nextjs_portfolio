import Link from 'next/link'
import React from 'react'


const hero = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  text-yellow-600">I,m Syed NoorAlam
        <br /> 
        <br className="hidden lg:inline-block"/>Fronted Developer 
      </h1>
      <p className="mb-8 leading-relaxed"> Recently I Complete My Inter and Enrolled Governor House Program Before in this program i have not programing Back even i Am not able to see the code and many other things,but i Enrolled this  program i learn  alot of thing and learn the importance of Generative Ai and Codding and and continously leaning in this program as a result i have 9 mounths of codding baack ground and learn Very Pupolar Language called Typescript,Html, Css and Next Js and gain a mind of creatical thinking about programing and inshallah our next quater we are learning Ai and Phython i am very impress for the working and see the project of phython and i feel very good and i will try my best to achieve our next quater because its my hobby to learnnew things and also a new things of Ai so that,s why im this program able to many students to achieve our goals and me are present in this student and inshallah me and many students of Governor house achieving our Goals .</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"><Link href={"/contact"}>Hire me</Link></button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Check project below!</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-32">
      <img className="object-cover object-center rounded-sm h-[690px] w-[500px] " alt="hero" src="image/ash.jpg"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default hero