import { FaCalendar, FaFileInvoiceDollar, FaLaptop, FaPercent } from "react-icons/fa6";
import { MdPhoneAndroid } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";

const InvestorInfo = () => {
 return (
  <div className=" text-slate-50 p-4 bg-blue-600">
   <h1 className=" text-2xl pb-8 font-semibold">Investor information</h1>
   <p>
    Esquivel EcoPetrol   delivered a robust performance in 2020, within the guidance we set, despite the unprecedented shocks of the covid-19 pandemic
   </p>

   <div className=" sm:grid-cols-2 grid">
    <div className=" py-8">
     <FaLaptop className=" text-6xl text-blue-900" />
     <p className=" text-2xl font-semibold">Result and Presentation</p>
    </div>

    <div className=" py-8">
     <TfiAnnouncement className=" -rotate-12 text-6xl text-blue-900" />
     <p className=" text-2xl font-semibold">Regulatory announcement</p>
    </div>

    <div className=" py-8">
     <MdPhoneAndroid className=" text-6xl text-blue-900" />
     <p className=" text-2xl font-semibold">Share price information and tools</p>
    </div>

    <div className=" py-8">
     <FaFileInvoiceDollar className=" text-6xl text-blue-900" />
     <p className=" text-2xl font-semibold">Bond information and credit rating</p>
    </div>

    <div className=" py-8">
     <FaPercent className=" text-6xl text-blue-900" />
     <p className=" text-2xl font-semibold">Dividend information</p>
    </div>

    <div className=" py-8">
     <FaCalendar className=" text-6xl text-blue-900" />
     <p className=" text-2xl font-semibold">Financial calendar</p>
    </div>
   </div>



  </div>
 );
};

export default InvestorInfo;