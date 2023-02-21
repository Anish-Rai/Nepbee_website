import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import ServiceList from '../components/ServiceList'
import Portfolio from '../components/Portfolio'
import Teams from '../components/Teams'
import Testimonial from '../components/Testimonial'
import ContactUs from '../components/ContactUs'
import ToolsAndTechnology from '../components/ToolsAndTechnology'

export default function Home() {
  const inputs = [
    {
      id:1,
      name:"name",
      errorMessage:"name should contain atleast 3 characters and shouldn't include any special character!",
      type:"text",
      label:"Full Name",
      placeholder:'e.g John Doe',
      pattern: "(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})",
      required:true,
    },
    {
      id:2,
      name:"email",
      errorMessage:"invalid email address!! check if it contains @ and is in correct format for e.g example@example.com",
      type:"email",
      label:"Email",
      placeholder:"e.g example@example.com",
      required:true,
      pattern: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    },
    
  ]

  const seoList = [
    "website development",
    "website development nepal",
    "app development",
    "mobile app development",
    "desktop app developemt",
    "app and website",
    "seo",
    "digital marketing",
    "graphic designing",
    "content writing",
    "web application",
    "desktop application",
    "how to make website",
    "build website",
    "wordpress website",
    "blogging website",
    "logo design",
    "kathmandu website",
    "lalitpur website",
    "custom logo design",
    "business logo design",
    "create website",
    "responsive web design",
    "web solution",
    "ui/ux design",
    "landing page design",
  ]
  return (
    <>
      <Head>
        <title>Nepbee</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <meta name="description" content={`${seoList}`} />
      </Head>
      <main>
        <Hero />
        <About />
        <ServiceList />
        <Portfolio />
        <Teams />
        <Testimonial />
        <ToolsAndTechnology />
        <ContactUs />
        {/* <Contact inputs={inputs} /> */}
        
      </main>
    </>
  )
}
