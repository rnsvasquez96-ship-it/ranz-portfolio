"use client";

import Reveal from "@/components/Reveal";


export default function About(){


return(

<section

id="about"

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


{/* Section Label */}

<Reveal>

<p

className="
text-indigo-400
tracking-widest
text-sm
"

>

02 / ABOUT ME

</p>

</Reveal>





{/* Heading */}

<Reveal delay={0.1}>

<h2

className="
mt-6
text-4xl
md:text-6xl
font-bold
leading-tight
"

>

Building Software.
<br/>
Designing Experiences.
<br/>
Automating Solutions.

</h2>

</Reveal>






{/* Paragraph 1 */}

<Reveal delay={0.2}>

<p

className="
mt-8
text-gray-400
text-lg
leading-relaxed
"

>

I am Ranz Nathaniel Vasquez, a Computer Engineering graduate from De La Salle Lipa Batch 2026. I have experience as a UI/UX Designer Intern at Certicode / SupSoft Tech, where I worked on creating user-centered digital experiences.

</p>

</Reveal>






{/* Paragraph 2 */}

<Reveal delay={0.3}>

<p

className="
mt-5
text-gray-400
text-lg
leading-relaxed
"

>

My interests combine software engineering, full-stack development, quality assurance, automation, and modern technology solutions. I enjoy transforming ideas into reliable applications that solve real-world problems.

</p>

</Reveal>







{/* Stats */}

<div

className="
mt-10
grid
grid-cols-1
md:grid-cols-3
gap-5
"

>



<Reveal delay={0.4}>

<div

className="
rounded-2xl
border
border-white/10
bg-white/5
p-6
"

>

<h3

className="
text-3xl
font-bold
"

>

2026

</h3>


<p

className="
text-gray-400
mt-2
"

>

Computer Engineering Graduate

</p>


</div>

</Reveal>








<Reveal delay={0.5}>

<div

className="
rounded-2xl
border
border-white/10
bg-white/5
p-6
"

>

<h3

className="
text-3xl
font-bold
"

>

1+

</h3>


<p

className="
text-gray-400
mt-2
"

>

Industry Internship

</p>


</div>

</Reveal>








<Reveal delay={0.6}>

<div

className="
rounded-2xl
border
border-white/10
bg-white/5
p-6
"

>

<h3

className="
text-3xl
font-bold
"

>

6+

</h3>


<p

className="
text-gray-400
mt-2
"

>

Engineering Projects

</p>


</div>

</Reveal>




</div>






</div>


</section>

)

}