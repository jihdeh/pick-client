import React from "react";
import FrequentlyAccessed from "../component/FrequentlyAccessed";
import UrlGeneratorForm from "../component/UrlGeneratorForm";

function Home() {
  return (
    <div>
      <UrlGeneratorForm />
      <FrequentlyAccessed />
    </div>
  );
}

export default Home;
