import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container container-video">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/KMWx15H0SFs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
            <a href="./gigs?cat=Technology">
              <img
                src="https://www.svgrepo.com/show/530225/cell-phone.svg"
                alt=""
              />
              </a>
              <div className="line"></div>
              <span>Technology</span>
            </div>
            <div className="item">
            <a href="./gigs?cat=Business">
              <img
                src="https://www.svgrepo.com/show/530241/tips.svg"
                alt=""
              />
              </a>
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
            <a href="./gigs?cat=Social Environment">
              <img
                src="https://www.svgrepo.com/show/317499/people-love-together-national-culture-paris.svg"
                alt=""
              />
              </a>
              <div className="line"></div>
              <span>Social Environment</span>
            </div>
            <div className="item">
            <a href="./gigs?cat=Graphic Design">
              <img
              src="https://www.svgrepo.com/show/263115/graphic-design-illustration.svg"
                alt=""
              />
              </a>
              <div className="line"></div>
              <span>Graphic Design</span>
            </div>
            <div className="item">
            <a href="./gigs?cat=Video & Film">
              <img
              src="https://www.svgrepo.com/show/477035/film.svg"
                alt=""
              />
              </a>
              <div className="line"></div>
              <span>Video & Film</span>
            </div>
            <div className="item">
            <a href="./gigs?cat=Financial">
              <img
              src="https://www.svgrepo.com/show/499830/reward.svg"
                alt=""
              />
              </a>
              <div className="line"></div>
              <span>Financial</span>
            </div>
            <div className="item">
            <a href="./gigs?cat=Software Development">
              <img
                src="./public\img\software.png"
                alt=""
              />
              </a>
              <div className="line"></div>
              <span>Software Development</span>
            </div>
            <div className="item">
            <a href="./gigs?cat=Data Analyst">
              <img
                src="https://www.svgrepo.com/show/499835/data-report.svg"
                alt=""
              />
              </a>
              <div className="line"></div>
              <span>Data Analyst</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              RealIdeas <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore RealIdeas Business</button>
          </div>
          <div className="item">
            <img
              src="./public\img\features_dark_bener.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} tp={card.link} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
