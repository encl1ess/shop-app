import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { InfoCard } from "../components/InfoCard";
import { ArrowIcon, Button, IconButton } from "../UIKit";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RightArrow from "../static/images/icons/right-arrow.svg";
import LeftArrow from "../static/images/icons/left-arrow.svg";
import { Service } from "../services/service";
import { Link, useParams } from "react-router-dom";
import { setProducts, setTotal } from "../reducers/productsReducer";
import { store } from "../reducers";
import { useDispatch, useSelector } from "react-redux";
function HomePage() {
  // const [cards, setCards] = useState([]);


  // const cards = useSelector(()=> store.getState().products.products);
  return (
    <section className="home-page">
      <section className="section-1">
      <Header counter={2} />
        <div className="section-1__body">
          <div className="section-1__title">
            <p>Upscale Your Home</p>
            <p>With Natural Stone</p>
          </div>
          <div className="section-1__descr">
            We help you to choose suitable pavers for your home and invite you
            to shop in our store.
          </div>
          <Link to ="/shop/">
            <Button
              className="green"
              content="Shop Now"
              height="54px"
              width="196px"
            />
          </Link>
        </div>
      </section>
      <section className="section-2">
        <InfoCard
          item={{
            header: "pavers",
            title: "Ashford, Belgium, Manhattan Plank, Trevista 80 Smooth",
            body: "Interlocking pavers are known by many names including patio stones, garden paver, interlocking stone, segmental pavers.  Whatever it is called, these products are incredibly versatile in their use.",
          }}
        />
        <InfoCard
          button
          className="green"
          item={{
            header: "walls",
            title:
              "Soho Wall, Ikon Wall, Hazelton Wall, Garden Lock, Antico Stacker",
            body: "A single dimensional stone with maximum versatility, the Antico® Stacker is ideal for almost any outdoor application including outdoor kitchens, garden walls, barbeques and decorative columns.",
          }}
        />
        <InfoCard
          item={{
            header: "slabs",
            title: "Avari, Tresca, Balsam, OpusBW300, Richmond 50, Flagstone",
            body: "Combining the warm, classic look of natural stone walkways with the modern edges of machined tile, the Flagstone™ slab blends seamlessly into your oasis. The subtle texture awakens in low light.",
          }}
        />
      </section>
      <section className="section-3">
        <div className="info-card">
          <img
            className="card-img"
            src={require("./../static/images/products/full/product2.png")}
          ></img>
          <div className="card-header">Design Gallery</div>
          <div className="card-body">
            Being inspired to come up with an idea that you love and work for
            you should not be a difficult or hard task, it should be fun and
            enjoyable. There you can see our design gallery to getting inspired.
          </div>
        </div>

        <div className="info-card">
          <img
            className="card-img"
            src={require("./../static/images/products/full/product4.png")}
          ></img>
          <div className="card-header">Supplier catalogs</div>
          <div className="card-body">
            Our curated products work together to help you achieve a landscape
            that is thoughtfully and creatively built for living, working and
            playing. There you can see some of our supplier catalogs.
          </div>
          <IconButton
            size={50}
            customBorder={"1px solid #2B2B2B"}
            icon={<ArrowIcon />}
          />
        </div>
      </section>
      <section className="section-4">
        <div className="info-card">
          <div className="card-header">Find a Dealer</div>
          <div className="card-body">
            Our dealers located throughout Ontario, Quebec, and North-East
            Michigan can help you visualize your stone solution and pair the
            right tiles for your project to build a customized solution.
          </div>
        </div>
        <Button content="Get in touch" />
      </section>
      <section className="section-5">
        <header>
          <div className="upper-title">Trending Products</div>
          <Link to="/shop"><Button content="See All" /></Link>
        </header>
        <div className="wrapper">
          {useSelector(()=> store.getState().products.products).map((card:any) => (card.trending &&
              <ProductCard item={card} key={card.id} />
          ))}
        </div>
      </section>
      <section className="section-6">
        <div className="wrapper">
          <InfoCard
            item={{
              header: "who we are",
              title:
                "Best Way is about endurance: products that last, styles that last, and as a family-owned and operated business since 1965",
              body: "Best Way Stone Limited provides a transferable lifetime guarantee on the structural integrity of it's Interlocking Paving Stone products for residential use. All Best Way Stone® products are manufactured to meet and exceed their respective North American standards set forth by both the CSA and ASTM. This guarantee provides assurances to the individual who has chosen Best Way Stone® as their source for Interlocking Paving Stones.",
            }}
          />
          <Button content="Read More" />
        </div>
        <img src={require("./../static/images/other/who.png")}></img>
      </section>
      <section className="section-7">
        <div className="card">
          <div className="card-body">
            We have been a customer of BWS for 10 years and we are very happy
            with their services. Our property always looks bright, colourful,
            and clean. BWS has great customer service and pricing. It has been a
            pleasure working with them over the years!
            <div className="signature">
              Alex Regelman <br />
              Co-founder, Colabrio
            </div>
            <footer>
              {" "}
              <IconButton icon={LeftArrow} />
              <IconButton icon={RightArrow} />
            </footer>
          </div>
        </div>
      </section>
      <section className="section-8">
        <div className="wrapper">
          <header>
            <div className="upper-title"> contacts </div>
            <div className="form-title">Get in Touch</div>
          </header>
          <footer className="copyright">
            <div className="contact">info@mail.com</div>
            <div className="address">
              8821 Weston Rd. Woodbridge, ON L4L 0K9
            </div>
          </footer>
        </div>
        <form>
          <input required placeholder="Mail" name="email" type="email" />
          <input required placeholder="Name" name="name" type="text" />
          <textarea
            required
            placeholder="Message"
            name="message"
            className="message"
          />
          <Button content="Submit" className="white" />
        </form>
      </section>
      <Footer />
    </section>
  );
}

export { HomePage };
