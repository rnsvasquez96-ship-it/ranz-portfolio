"use client";

import { motion } from "framer-motion";


const timeline = [

  {
    year: "2026",
    title: "Computer Engineering Graduate",
    company: "De La Salle Lipa",
    description:
      "Graduated with a Bachelor of Science in Computer Engineering. Developed skills in software development, UI/UX design, automation, embedded systems, and technology solutions.",
  },


  {
    year: "2025 - 2026",
    title: "UI/UX Designer Intern",
    company: "Certicode / SupSoft Tech",
    description:
      "Designed user interfaces, created prototypes, improved user experiences, and collaborated in developing digital solutions using user-centered design principles.",
  },


  {
    year: "2025",
    title: "Software Development Projects",
    company: "Academic & Personal Projects",
    description:
      "Built full-stack applications, responsive websites, automation tools, and software solutions using modern development technologies.",
  },


  {
    year: "2025",
    title: "TAP-JEEP Capstone Project",
    company: "Computer Engineering Research Project",
    description:
      "Developed a smart transportation system integrating RFID, GPS, mobile application technology, and Firebase for automated fare collection.",
  },


  {
    year: "2024 - Present",
    title: "Continuous Technology Growth",
    company: "Software Engineering • QA • Automation • UI/UX",
    description:
      "Continuously improving skills in software engineering, quality assurance, automation, and user experience design through projects and hands-on learning.",
  },

];



export default function Experience(){


return(

<section
id="experience"
className="
py-32
px-6
"
>


<div
className="
max-w-5xl
mx-auto
"
>


<motion.p

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
text-indigo-400
tracking-widest
text-sm
"
>

05 / JOURNEY

</motion.p>





<motion.h2

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
mt-6
text-4xl
md:text-6xl
font-bold
"
>

My Experience

</motion.h2>







<div
className="
relative
mt-16
"
>


{/* Timeline Line */}

<div

className="
absolute
left-4
top-0
bottom-0
w-px
bg-white/20
"

/>





{
timeline.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.15
}}

className="
relative
pl-12
pb-16
"

>


{/* Dot */}

<div

className="
absolute
left-0
top-2
w-8
h-8
rounded-full
bg-indigo-500
border-4
border-black
"

/>





<div

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
"

>


<p

className="
text-indigo-400
font-medium
"

>

{item.year}

</p>





<h3

className="
mt-3
text-2xl
font-bold
"

>

{item.title}

</h3>





<p

className="
mt-2
text-gray-300
"

>

{item.company}

</p>





<p

className="
mt-4
text-gray-400
leading-relaxed
"

>

{item.description}

</p>



</div>



</motion.div>


))
}





</div>



</div>


</section>

)

}