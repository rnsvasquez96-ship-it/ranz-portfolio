"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";


const contacts = [

{
title:"Email",
value:"your.email@gmail.com",
link:"mailto:your.email@gmail.com",
icon:Mail
},


{
title:"GitHub",
value:"github.com/rnsvasquez96-ship-it",
link:"https://github.com/rnsvasquez96-ship-it",
icon:FaGithub
},


{
title:"LinkedIn",
value:"linkedin.com/in/your-profile",
link:"https://linkedin.com",
icon:FaLinkedin
},


{
title:"Resume",
value:"Download CV",
link:"/resume.pdf",
icon:FileText
}

];



export default function Contact(){


return(

<section

id="contact"

className="
py-32
px-6
"

>


<div

className="
max-w-5xl
mx-auto
text-center
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

06 / CONTACT

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

Let's Build Something Together

</motion.h2>







<motion.p

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true
}}

className="
mt-6
text-gray-400
text-lg
max-w-2xl
mx-auto
"

>

I am open to opportunities in Software Engineering, Full-Stack Development, QA Engineering, UI/UX Design, Automation Engineering, and IT Support.

</motion.p>







<div

className="
mt-12
grid
md:grid-cols-2
gap-6
"

>


{
contacts.map((item,index)=>{


const Icon=item.icon;


return(

<motion.a

key={item.title}

href={item.link}

target={
item.title==="Resume"
?undefined
:"_blank"
}

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

transition={{
delay:index*.1
}}

whileHover={{
y:-5
}}

className="
flex
items-center
gap-5
rounded-3xl
border
border-white/10
bg-white/5
p-6
text-left
hover:bg-white/10
transition
"

>


<div

className="
p-3
rounded-xl
bg-indigo-500/20
"

>

<Icon size={24}/>

</div>



<div>

<h3

className="
font-bold
"

>

{item.title}

</h3>


<p

className="
text-gray-400
text-sm
"

>

{item.value}

</p>


</div>



</motion.a>


)

})
}


</div>




</div>


</section>

)

}