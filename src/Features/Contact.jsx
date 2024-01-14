import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, } from "react-icons/fa6";
import { MdMail, MdPhone } from "react-icons/md";

const Contact = () => {

 const myEmail = 'EngrJMEsquivel@outlook.com';
 const handleMail = () => {
  const mailToLink = `mailto:${myEmail}`;
  window.location.href = mailToLink;
 };

 const myNumber = '+12253959708';
 const handleCall = () => {
  const telToLink = `mailto:${myNumber}`;
  window.location.href = telToLink;
 };

 return (
  <div id="contact" className="  bg-blue-600 text-slate-100 p-4 lg:text-2xl">
   <div className="">

    <div className=" font-bold text-2xl pb-8">
     <p>Reliable energy, limitless potential</p>
    </div>

    <div className=" md:grid md:grid-cols-[2fr_1fr]">



     <div className=" pb-12">
      <div className=" font-bold text-lg">
       Our Offices
      </div>

      <div className=" text-sm grid grid-cols-2 justify-between gap-8">
       <div className="">
        <div className=" font-bold">
         London
        </div>

        <ul>
         <li>Esquivel EcoPetrol Energy UK Ltd</li>
         <li>4th Floor</li>
         <li>50 Pall Mall</li>
         <li>London SW1Y 5JH</li>
         <li>United Kingdom</li>
        </ul>

       </div>

       <div className="">
        <div className=" font-bold">
         USA
        </div>

        <ul>
         <li>Esquivel EcoPetrol Energy US Ltd</li>
         <li>4th Floor</li>
         <li>50 Pall Mall</li>
         <li>London SW1Y 5JH</li>
         <li>United Kingdom</li>
        </ul>

       </div>

      </div>


     </div>

     <div className="">
      <p className=" font-bold text-lg">Keep in touch</p>
      <span className=" flex gap-4 text-2xl py-4">

       <FaFacebook />

       <a href="http://www.linkedin.com/in/esquivel-ecopetro-3615592aa" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
       </a>

       <FaTwitter />

       <FaInstagram />

       <MdMail onClick={handleMail} />

       <MdPhone onClick={handleCall} />
      </span>
      <p className=" text-sm">We us social media as part of our commitment to transparency & <br /> to provide timely information to our customers and stakeholders</p>
     </div>
    </div>
   </div>

  </div>
 );
};

export default Contact;