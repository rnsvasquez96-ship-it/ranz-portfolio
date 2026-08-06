"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer(){


return(

<footer

className="
border-t
border-white/10
py-10
px-6
"

>


<div

className="
max-w-7xl
mx-auto
flex
flex-col
md:flex-row
justify-between
items-center
gap-5
"

>


<p

className="
text-gray-400
text-sm
"

>

© 2026 Ranz Nathaniel Vasquez. All rights reserved.

</p>





<div

className="
flex
items-center
gap-5
"

>


<a

href="https://github.com/rnsvasquez96-ship-it"

target="_blank"

className="
text-gray-400
hover:text-white
transition
"

>

<FaGithub size={22}/>

</a>




<a

href="https://linkedin.com"

target="_blank"

className="
text-gray-400
hover:text-white
transition
"

>

<FaLinkedin size={22}/>

</a>



</div>



</div>


</footer>

)

}