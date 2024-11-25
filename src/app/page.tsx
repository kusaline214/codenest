import About from "./components/About";
import Business from "./components/Business";
import Career from "./components/Career";
import Greeting from "./components/Greeting";
import Infomation from "./components/Infomation";
import Mv from "./components/Mv";

export default function Home() {
  return (
    <>
      <Mv />
      <About />
      <Business />
      <Greeting />
      <Infomation />
      <Career />
    </>
  );
}
