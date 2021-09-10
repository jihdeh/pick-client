import FrequentlyAccessed from "../component/FrequentlyAccessed";
import UrlGeneratorForm from "../component/UrlGeneratorForm";

function Home() {
  return (
    <div>
      <h2 className="center">URL SHORTNIZER</h2>
      <UrlGeneratorForm />
      <FrequentlyAccessed />
    </div>
  );
}

export default Home;
