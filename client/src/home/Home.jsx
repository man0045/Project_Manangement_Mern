import Banner from "./Banner";
import BestProjects from "../Components/BestProjects";
// import BasicTransition from "./NewsLetter";
import Example from "./NewsLetter";
import PromoBanner from "./Showing";

const Home = () => {
 return(
  <div>
   <Banner/>
   <BestProjects/>
   <div className="mb-10">

   <PromoBanner/>
   </div>
   <Example/>
  </div>
 )
}

export default Home;