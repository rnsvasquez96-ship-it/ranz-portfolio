"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Loader(){

const [loading,setLoading] = useState(true);


useEffect(()=>{


const timer = setTimeout(()=>{

setLoading(false);

},1800);


return ()=>clearTimeout(timer);


},[]);



if(!loading) return null;



return (

<motion.div

initial={{
opacity:1
}}

animate={{
opacity:0
}}

transition={{
delay:1.5,
duration:.5
}}

className="
fixed
inset-0
z-[1000]
flex
items-center
justify-center
bg-black
"

>


<div
className="
text-center
"
>


<motion.h1

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
text-5xl
md:text-7xl
font-bold
"
>

RNV

</motion.h1>



<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:.5
}}

className="
mt-5
text-gray-400
"
>

Computer Engineer • Software Developer

</motion.p>




<motion.div

initial={{
width:0
}}

animate={{
width:"100%"
}}

transition={{
duration:1.2
}}

className="
mt-8
h-[2px]
bg-indigo-500
"

>

</motion.div>



</div>



</motion.div>

);

}