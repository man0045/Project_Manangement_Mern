import Banner from "./Banner";
import BestProjects from "../Components/BestProjects";
// import BasicTransition from "./NewsLetter";
import Example from "./NewsLetter";
import PromoBanner from "./Showing";
import Review from "./Review";

const Home = () => {
 return(
  <div>
   <Banner/>
   <BestProjects/>
   <div className="mb-10">

   <PromoBanner/>
   </div>
   <Review/>
   <Example/>

  </div>
 )
}

export default Home;