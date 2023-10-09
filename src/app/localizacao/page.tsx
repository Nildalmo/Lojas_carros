import React from "react";
import Map from "./../../components/maps/page";

const Home = () => {
  const iframe =
    '<iframe src="https://maps.app.goo.gl/TKNdj6VqqHRBwXgFA"></iframe>';

  return (
    <div>
      <h1>Nossa localização</h1>
      <Map iframe={iframe} />
      <button type="submit">Retornar</button>
    </div>
  );
};

export default Home;
