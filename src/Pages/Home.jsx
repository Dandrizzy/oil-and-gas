import Intro from "../Features/Intro";
import Tech from "../Features/Tech";
import Contact from "../Features/Contact";
import Message from "../Features/Message";
import Quote from "../Features/Quote";
import Purpose from "../Features/Purpose";
import Invest from "../Features/Invest";
import InvestorInfo from "../Features/InvestorInfo";

const Home = () => {
 return (
  <>
   <Intro />
   <Tech />

   <Message />
   <Quote />
   <Invest />
   <InvestorInfo />
   <Purpose />
   <Contact />

  </>
 );
};

export default Home;