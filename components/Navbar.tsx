"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";


const links = [
  {
    name:"Home",
    href:"#home"
  },
  {
    name:"About",
    href:"#about"
  },
  {
    name:"Projects",
    href:"#projects"
  },
  {
    name:"Skills",
    href:"#skills"
  },
  {
    name:"Experience",
    href:"#experience"
  },
  {
    name:"Contact",
    href:"#contact"
  }
];



export default function Navbar(){


const [open,setOpen] = useState(false);



return(

<header

className="
fixed
top-0
left-0
right-0
z-50
backdrop-blur-xl
bg-black/30
border-b
border-white/10
"

>


<nav

className="
max-w-7xl
mx-auto
px-6
py-5
flex
items-center
justify-between
"

>


{/* Logo */}

<a

href="#home"

className="
text-xl
font-bold
"

>

RNV<span className="text-indigo-400">.</span>

</a>





{/* Desktop Menu */}


<div

className="
hidden
md:flex
items-center
gap-8
"

>


{
links.map(link=>(


<a

key={link.name}

href={link.href}

className="
text-gray-300
hover:text-white
transition
text-sm
"

>

{link.name}

</a>


))
}


</div>





{/* Mobile Button */}


<button

onClick={()=>setOpen(!open)}

className="
md:hidden
text-white
"

>

{
open
?
<X size={28}/>
:
<Menu size={28}/>
}

</button>



</nav>






{/* Mobile Menu */}



<motion.div

initial={{
height:0,
opacity:0
}}

animate={{

height:open?"auto":0,

opacity:open?1:0

}}

className="
md:hidden
overflow-hidden
bg-black/80
"

>


<div

className="
flex
flex-col
px-6
pb-6
gap-5
"

>


{
links.map(link=>(


<a

key={link.name}

href={link.href}

onClick={()=>setOpen(false)}

className="
text-gray-300
hover:text-white
transition
"

>

{link.name}

</a>


))
}


</div>


</motion.div>



</header>


)

}