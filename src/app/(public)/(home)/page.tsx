import Image from "next/image";

export default function home() {
  return (
    <section>
      <h2>Carros a Vandas </h2>

      <div className="container">
        <div>
          <a href="http://google.com">
            <Image
              src="/Toyota Corolla.png"
              alt="Toyota Corolla"
              width={400}
              height={200}
            />
            <h3>Toyota Corolla 2023 GR</h3>
            <p>Preço: R$ 149.290,00</p>
          </a>
        </div>

        <div>
          <a href="http://google.com">
            <Image src="/gol.png" alt="gol" width={300} height={200} />
            <h4>Gol quadrado</h4>
            <p>Preço: R$ R$12.999,00</p>
          </a>
        </div>
        <div>
          <a href="http://google.com">
            <Image
              src="/dodge challenger.png"
              alt="dodge challenger"
              width={300}
              height={200}
            />
            <h5>dodge challenger</h5>
            <p>Preço: R$ 96.316,00</p>
          </a>
        </div>
        <div>
          <a href="http://google.com">
            <Image src="/uno.png" alt="uno" width={400} height={200} />
            <h5>Uno way</h5>
            <p>Preço: R$ 22.900,00</p>
          </a>
        </div>

        <div>
          <a href="http://google.com">
            <Image
              src="/mustang GT King.png"
              alt="Mustang Shelby GT 500"
              width={300}
              height={200}
            />
            <h5>Mustang Shelby GT 500</h5>
            <p>Preço:R$545.000,00</p>
          </a>
        </div>

        <div>
          <a href="http://google.com">
            <Image
              src="/Posche 911 2013.png"
              alt="Posche 911 2013"
              width={300}
              height={200}
            />
            <h5>Posche 911 2013</h5>
            <p>Preço:R$ 592.490,00</p>
          </a>
        </div>
        <div>
          <a href="http://google.com">
            <Image
              src="/Dodge Ram.png"
              alt="Dodge ram 3500"
              width={300}
              height={200}
            />
            <h5>Dodge ram 3500</h5>
            <p>Preço:R$ 489.990,00</p>
          </a>
        </div>
        <div>
          <a href="http://google.com">
            <Image
              src="/Ferrari.png"
              alt="Ferrari 458 italia 4.5 v8"
              width={300}
              height={200}
            />
            <h5>Ferrari 458 italia 4.5 v8</h5>
            <p>Preço:R$1.795.000,00</p>
          </a>
        </div>
      </div>
    </section>
  );
}
