"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";


const projects = [

{
title:"PickleRank",
category:"Full-Stack Development",
description:
"A tournament and ranking platform designed to manage players, matches, rankings, and competitive statistics.",
stack:[
"Next.js",
"TypeScript",
"PostgreSQL",
"Prisma",
"Node.js"
],
color:"from-green-400 to-emerald-600",
github:"#",
demo:"#"
},


{
title:"Smart Excel Report Generator",
category:"AI & Automation Engineering",
description:
"An automated reporting system that processes spreadsheet data and generates organized business reports.",
stack:[
"Python",
"Pandas",
"OpenPyXL",
"Automation"
],
color:"from-blue-400 to-cyan-600",
github:"#",
demo:"#"
},


{
title:"Employee Leave Automation",
category:"Business Process Automation",
description:
"A workflow automation system that simplifies employee leave requests, approvals, and tracking.",
stack:[
"Python",
"Automation",
"Database",
"Workflow"
],
color:"from-purple-400 to-indigo-600",
github:"#",
demo:"#"
},


{
title:"Velora Banking App",
category:"UI/UX Design",
description:
"A modern mobile banking experience focused on intuitive navigation, usability, and clean interface design.",
stack:[
"Figma",
"Prototype",
"UI Design",
"UX Research"
],
color:"from-pink-400 to-purple-600",
github:"#",
demo:"#"
},


{
title:"Brew Haven",
category:"Frontend Development",
description:
"A responsive coffee shop website featuring modern design, animations, and mobile optimization.",
stack:[
"HTML",
"CSS",
"JavaScript",
"Responsive Design"
],
color:"from-orange-400 to-red-600",
github:"#",
demo:"#"
},


{
title:"TAP-JEEP",
category:"Computer Engineering Project",
description:
"A smart transportation system using RFID, GPS, and mobile technologies for modern fare collection.",
stack:[
"Arduino",
"RFID",
"Flutter",
"Firebase"
],
color:"from-yellow-400 to-orange-600",
github:"#",
demo:"#"
}

];



export default function Projects(){

return(

<section
id="projects"
className="
py-32
px-6
"
>


<div
className="
max-w-7xl
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

03 / PROJECTS

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

Featured Work

</motion.h2>






<div
className="
mt-16
grid
md:grid-cols-2
gap-8
"
>


{
projects.map((project,index)=>(


<motion.div

key={project.title}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.1
}}

whileHover={{
y:-10
}}

className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
p-8
"
>



<div

className={`
absolute
inset-0
opacity-0
group-hover:opacity-20
transition
bg-gradient-to-br
${project.color}
`}

/>




<div
className="
relative
z-10
"
>


<p
className="
text-sm
text-indigo-400
"
>

{project.category}

</p>



<h3
className="
mt-4
text-3xl
font-bold
"
>

{project.title}

</h3>




<p
className="
mt-5
text-gray-400
leading-relaxed
"
>

{project.description}

</p>





<div
className="
mt-6
flex
flex-wrap
gap-2
"
>


{
project.stack.map(skill=>(

<span

key={skill}

className="
px-3
py-1
rounded-full
text-xs
bg-white/10
border
border-white/10
text-gray-300
"
>

{skill}

</span>

))
}


</div>






<div
className="
mt-8
flex
gap-4
"
>


<a

href={project.github}

className="
flex
items-center
gap-2
text-sm
text-gray-300
hover:text-white
"
>

<Code2 size={16}/>

Code

</a>





<a

href={project.demo}

className="
flex
items-center
gap-2
text-sm
text-gray-300
hover:text-white
"
>

<ExternalLink size={16}/>

Demo

</a>



</div>



</div>



</motion.div>


))
}


</div>



</div>


</section>

)

}