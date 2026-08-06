import Image from "next/image";
import { projects } from "@/data/projects";


export default async function ProjectPage({

params,

}:{

params:{
slug:string
}

}){


const project =
projects.find(
(item)=>item.slug === params.slug
);



if(!project){

return <div>Project not found</div>;

}



return (

<main
className="
min-h-screen
px-6
py-32
"
>


<div
className="
max-w-5xl
mx-auto
"
>



<p
className="
text-indigo-400
"
>

{project.category}

</p>



<h1
className="
mt-5
text-5xl
font-bold
"
>

{project.title}

</h1>




<p
className="
mt-6
text-gray-400
text-xl
"
>

{project.description}

</p>





<Image

src={project.image}

alt={project.title}

width={1000}

height={600}

className="
mt-12
rounded-3xl
"

/>







<section
className="
mt-16
"
>

<h2
className="
text-3xl
font-bold
"
>

The Problem

</h2>


<p
className="
mt-4
text-gray-400
"
>

{project.problem}

</p>


</section>







<section
className="
mt-12
"
>

<h2
className="
text-3xl
font-bold
"
>

The Solution

</h2>


<p
className="
mt-4
text-gray-400
"
>

{project.solution}

</p>


</section>







<section
className="
mt-12
"
>

<h2
className="
text-3xl
font-bold
"
>

Technology Stack

</h2>



<div
className="
mt-5
flex
flex-wrap
gap-3
"
>


{
project.stack.map(skill=>(

<span

key={skill}

className="
px-4
py-2
rounded-full
bg-white/10
border
border-white/10
"

>

{skill}

</span>

))
}



</div>


</section>






</div>


</main>

)

}