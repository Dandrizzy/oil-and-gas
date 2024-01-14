import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Invest = () => {
 return (
  <div id="investors" className=" p-4 grid gap-8 md:grid-cols-2 ">
   <img src="daniel.JPG" alt="invest" />
   <div className="">
    <h1 className=" text-blue-600 font-semibold text-4xl pb-20">Why invest</h1>
    <p>With the world&apos;s increasing energy needs, Esquivel EcoPetrol have the potential for long-term growth. Investing in companies with strong fundamentals, effective management, and a forward-looking approach to technology and sustainability can position your portfolio for potential capital appreciation.</p>
    <p className=" text-2xl text-blue-600 font-semibold pb-8 pt-16">Investor Relations enquires</p>
    <p className=" pb-4">
     For  all Investor Relations enquiries please get in touch using the details below:
    </p>
    <ul className=" pb-8 [&>*]:hover:cursor-pointer">
     <li className=" flex items-center gap-4 font-semibold underline text-blue-500"><FaPhone className=" text-slate-800" /> +2233 2233 3333</li>
     <li className=" flex items-center gap-4 font-semibold underline text-blue-500"><MdMail className=" text-slate-800" /> email@email.com</li>
    </ul>
   </div>
  </div>
 );
};

export default Invest;