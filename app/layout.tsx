import type { Metadata } from "next";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import PageTransition from "@/components/PageTransition";


export const metadata: Metadata = {

  title:
    "Ranz Nathaniel Vasquez | Software Engineer | Full-Stack Developer",

  description:
    "Ranz Nathaniel Vasquez is a Computer Engineering graduate specializing in Software Engineering, Full-Stack Development, QA Engineering, UI/UX Design, and AI Automation.",


  keywords:[
    "Ranz Nathaniel Vasquez",
    "Software Engineer",
    "Full-Stack Developer",
    "QA Engineer",
    "Software Tester",
    "UI/UX Designer",
    "Automation Engineer",
    "IT Support",
    "Computer Engineering Graduate",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer"
  ],


  authors:[
    {
      name:"Ranz Nathaniel Vasquez"
    }
  ],


  creator:
    "Ranz Nathaniel Vasquez",


  openGraph:{

    title:
      "Ranz Nathaniel Vasquez | Software Engineer Portfolio",

    description:
      "Computer Engineering graduate building full-stack applications, automation solutions, and user-centered digital experiences.",

    type:"website",

  },


  icons:{
    icon:"/favicon.ico"
  }

};



export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (

<html lang="en">

<body>

<Loader />

<CustomCursor />

<SmoothScroll>

<PageTransition>

{children}

</PageTransition>

</SmoothScroll>

</body>

</html>

);

}