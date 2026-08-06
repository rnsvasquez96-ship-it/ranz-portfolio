"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function CustomCursor(){

const [position,setPosition] = useState({
x:0,
y:0
});


const [visible,setVisible] = useState(false);



useEffect(()=>{


const moveCursor = (e:MouseEvent)=>{

setPosition({

x:e.clientX,

y:e.clientY

});

setVisible(true);

};



window.addEventListener(
"mousemove",
moveCursor
);



return ()=>{

window.removeEventListener(
"mousemove",
moveCursor
);

};


},[]);




return (

<motion.div

animate={{

x:position.x - 15,

y:position.y - 15,

opacity:visible ? 1 : 0

}}

transition={{

type:"spring",

mass:.5,

stiffness:400,

damping:30

}}

className="
hidden
md:block
fixed
top-0
left-0
z-[999]
w-8
h-8
rounded-full
bg-indigo-500/30
border
border-indigo-400/50
backdrop-blur-md
pointer-events-none
"

>


</motion.div>

);

}