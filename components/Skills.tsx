"use client";

import Reveal from "@/components/Reveal";


const skillGroups = [

{
title:"Frontend Development",

skills:[
"React",
"Next.js",
"TypeScript",
"Tailwind CSS",
"HTML5",
"CSS3",
"JavaScript"
]

},


{
title:"Backend Development",

skills:[
"Node.js",
"Express.js",
"PostgreSQL",
"Prisma ORM",
"REST API",
"Firebase"
]

},


{
title:"QA & Testing",

skills:[
"Manual Testing",
"Test Cases",
"Bug Reporting",
"Software Testing",
"Automation Testing",
"Quality Assurance"
]

},


{
title:"AI & Automation",

skills:[
"Python",
"Pandas",
"OpenPyXL",
"Workflow Automation",
"AI Tools",
"Process Optimization"
]

},


{
title:"UI/UX Design",

skills:[
"Figma",
"Wireframing",
"Prototyping",
"User Research",
"Design Systems",
"Responsive Design"
]

},


{
title:"Computer Engineering",

skills:[
"Arduino",
"Embedded Systems",
"RFID",
"IoT",
"Microcontrollers",
"Hardware Integration"
]

}

];



export default function Skills(){


return(

<section

id="skills"

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



<Reveal>

<p

className="
text-indigo-400
tracking-widest
text-sm
"

>

04 / SKILLS

</p>


</Reveal>





<Reveal delay={0.1}>

<h2

className="
mt-6
text-4xl
md:text-6xl
font-bold
"

>

Technical Skills

</h2>

</Reveal>







<div

className="
mt-16
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-8
"

>


{

skillGroups.map((group,index)=>(


<Reveal

key={group.title}

delay={index * 0.1}

>


<div

className="
group
rounded-3xl
border
border-white/10
bg-white/5
p-8
hover:bg-white/10
transition
"

>


<h3

className="
text-2xl
font-bold
"

>

{group.title}

</h3>





<div

className="
mt-6
flex
flex-wrap
gap-3
"

>


{

group.skills.map(skill=>(


<span

key={skill}

className="
px-3
py-2
rounded-full
bg-white/10
border
border-white/10
text-sm
text-gray-300
hover:text-white
transition
"

>

{skill}

</span>


))

}


</div>



</div>


</Reveal>


))

}



</div>



</div>


</section>

)

}