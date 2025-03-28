import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Education from "./Components/Education/Education";
import Skill from "./Components/Skill/Skill";
import Experience from "./Components/Experience/Experience";

import Clients from "./Components/Clients/Clients";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import FAQSection from "./Components/Faqs/Faqs";
import BlogPage from "./Components/Blog/Blog";

const page = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Education />
      <Skill />
      <Experience />

      <Clients />
      <Contact />
      <FAQSection/>
      <BlogPage/>
      <Footer />
    </div>
  );
};

export default page;

//     import React from 'react'

// const Experience = () => {
//   return (
//     <div>
//       Experience
//       Experience
//     </div>
//   )
// }

// export default Experience
//
