import Appbar from "./components/Appbar";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Items from "./components/Items";
import SeasonSpecials from "./components/SeasonSpecials";

function App() {
  return (
    <>
      <Appbar />
      <Filters />
      <Items />
      <SeasonSpecials/>
      <Footer />
    </>
  );
}

export default App;
