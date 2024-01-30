import Image from "next/image";

export default function home() {
  return (
    <section>
      <div className="container">
        <div>
          <a href="https://www.toyota.com.br/modelos/corolla">
            <Image
              src="/corolla.png"
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
            <Image src="/gol.png" alt="gol" width={400} height={200} />
            <h4>Gol quadrado</h4>
            <p>Preço: R$ R$12.999,00</p>
          </a>
        </div>
        <div>
          <a href="https://pr.olx.com.br/regiao-de-curitiba-e-paranagua/autos-e-pecas/carros-vans-e-utilitarios/dodge-charger-1970-1239763548?lis=listing_2020">
            <Image
              src="/dodge challenger.png"
              alt="dodge challenger"
              width={400}
              height={200}
            />
            <h5>dodge challenger</h5>
            <p>Preço: R$ 96.316,00</p>
          </a>
        </div>
        <div>
          <a href="https://www.webmotors.com.br/comprar/fiat/uno/14-way-8v-flex-4p-manual/4-portas/2011-2012/50267522?pos=g50267522g:&np=1">
            <Image src="/uno.png" alt="uno" width={400} height={200} />
            <h5>Uno way</h5>
            <p>Preço: R$ 22.900,00</p>
          </a>
        </div>

        <div>
          <a href="https://directimports.com.br/importacao/ford-mustang-shelby-gt500/">
            <Image
              src="/mustang GT King.png"
              alt="Mustang Shelby GT 500"
              width={400}
              height={200}
            />
            <h5>Mustang Shelby GT 500</h5>
            <p>Preço:R$545.000,00</p>
          </a>
        </div>

        <div>
          <a href="https://www.webmotors.com.br/comprar/porsche/911/38-carrera-s-coupe-6-cilindros-24v-gasolina-2p-automatico/2-portas/2012-2013/44436262?pos=j44436262a:&np=1">
            <Image
              src="/Posche 911 2013.png"
              alt="Posche 911 2013"
              width={400}
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
              width={400}
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
              width={400}
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
