"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


const techStack = [
  {
    name: "Full-Stack Development",
    position: "top-4 left-0 sm:top-10 sm:left-0",
  },
  {
    name: "React / Next.js",
    position: "top-16 right-0 sm:top-24 sm:right-0",
  },
  {
    name: "QA Automation",
    position: "bottom-24 left-0 sm:bottom-32 sm:left-0",
  },
  {
    name: "Python Automation",
    position: "bottom-5 right-5 sm:bottom-10 sm:right-10",
  },
  {
    name: "UI/UX Design",
    position: "top-1/2 right-0 sm:right-[-40px]",
  },
];


export default function Hero() {


return (

<section

id="home"

className="
min-h-screen
flex
items-center
relative
overflow-hidden
px-6
pt-24
"

>


{/* Background Grid */}

<div

className="
absolute
inset-0
bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
bg-[size:60px_60px]
"

/>




{/* Glow */}

<motion.div

animate={{
scale:[1,1.2,1]
}}

transition={{
duration:8,
repeat:Infinity
}}

className="
absolute
top-20
right-0
sm:right-20
w-[300px]
h-[300px]
sm:w-[500px]
sm:h-[500px]
bg-indigo-600/20
rounded-full
blur-[140px]
"

/>




<div

className="
relative
z-10
max-w-7xl
mx-auto
w-full
grid
grid-cols-1
lg:grid-cols-2
gap-12
lg:gap-16
items-center
"

>


{/* LEFT */}


<div>


<motion.p

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

className="
text-gray-400
text-lg
"

>

Hello, I'm

</motion.p>





<motion.h1

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="
mt-4
text-4xl
sm:text-5xl
md:text-7xl
font-bold
leading-tight
tracking-tight
"

>

Ranz Nathaniel

<br/>

<span

className="
bg-gradient-to-r
from-white
via-gray-300
to-gray-500
bg-clip-text
text-transparent
"

>

Vasquez

</span>

</motion.h1>





<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:1
}}

className="
mt-6
text-gray-400
text-lg
"

>

Computer Engineering Graduate

<br/>

Batch 2026

</motion.p>






<div

className="
mt-8
text-xl
sm:text-2xl
md:text-3xl
text-indigo-400
font-medium
"

>


<TypeAnimation

sequence={[

"Software Engineer",
2000,

"Full-Stack Developer",
2000,

"QA Engineer & Software Tester",
2000,

"UI/UX Designer",
2000,

"Automation Engineer",
2000,

"IT Support Specialist",
2000

]}

speed={50}

repeat={Infinity}

/>


</div>






<p

className="
mt-6
max-w-xl
text-gray-400
leading-relaxed
"

>

Building modern applications,
reliable software systems,
automation solutions,
and user-centered digital experiences.

</p>







<div

className="
flex
flex-col
sm:flex-row
gap-5
mt-10
"

>


<motion.button

whileHover={{
scale:1.05
}}

whileTap={{
scale:.95
}}

className="
px-8
py-3
rounded-full
bg-white
text-black
font-medium
"

>

View Projects

</motion.button>





<motion.a

href="/resume.pdf"

download

whileHover={{
scale:1.05
}}

whileTap={{
scale:.95
}}

className="
px-8
py-3
rounded-full
border
border-white/20
hover:bg-white/10
text-center
"

>

Download Resume

</motion.a>


</div>



</div>







{/* IMAGE */}



<div

className="
relative
flex
justify-center
mt-10
lg:mt-0
"

>




<div

className="
absolute
w-[280px]
h-[280px]
sm:w-[400px]
sm:h-[400px]
bg-cyan-500/30
blur-[120px]
rounded-full
"

/>





<motion.div

animate={{
rotate:360
}}

transition={{
duration:20,
repeat:Infinity,
ease:"linear"
}}

className="
absolute
w-[260px]
h-[360px]
sm:w-[340px]
sm:h-[450px]
rounded-[2rem]
bg-gradient-to-r
from-indigo-500
via-cyan-400
to-purple-500
blur-sm
"

/>







<div

className="
relative
w-[250px]
h-[340px]
sm:w-[320px]
sm:h-[430px]
rounded-[2rem]
overflow-hidden
border
border-white/20
"

>


<Image

src="/images/profile.png"

alt="Ranz Nathaniel Vasquez"

fill

priority

sizes="(max-width:640px) 250px,320px"

className="
object-cover
"

/>


</div>






{
techStack.map((tech,index)=>(


<motion.div

key={tech.name}

animate={{
y:[0,-15,0]
}}

transition={{
duration:3,
repeat:Infinity,
delay:index*.4
}}

className={`
hidden
sm:block
absolute
${tech.position}
px-4
py-2
rounded-full
bg-white/10
backdrop-blur-xl
border
border-white/20
text-sm
text-white
whitespace-nowrap
`}

>

{tech.name}

</motion.div>


))
}





</div>





</div>


</section>

)

}