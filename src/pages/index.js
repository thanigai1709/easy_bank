import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// feature icons
import Icon1 from "../images/icon-online.svg"
import Icon2 from "../images/icon-budgeting.svg"
import Icon3 from "../images/icon-onboarding.svg"
import Icon4 from "../images/icon-api.svg"

// article images
import article1 from "../images/image-currency.jpg"
import article2 from "../images/image-restaurant.jpg"
import article3 from "../images/image-plane.jpg"
import article4 from "../images/image-confetti.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <div className="container">
        <div className="hero__image"></div>
        <div className="hero__text container--pall">
          <h1
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            Next generation digital banking
          </h1>
          <p
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            <Link className="cta-btn">Request Invite</Link>
          </div>
        </div>
      </div>
    </section>
    <section className="feature">
      <div className="container container--pall">
        <div className="feature__text">
          <h2
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            Why choose Easybank?
          </h2>
          <p
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="feature__row">
          <div
            className="feature__item"
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            <div className="feature__icon">
              <img src={Icon1} alt="banking"></img>
            </div>
            <div class="feature__title">Online Banking</div>
            <div class="feature__description">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </div>
          </div>
          <div
            className="feature__item"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            <div className="feature__icon">
              <img src={Icon2} alt="banking"></img>
            </div>
            <div class="feature__title">Simple Budgeting</div>
            <div class="feature__description">
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </div>
          </div>
          <div
            className="feature__item"
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            <div className="feature__icon">
              <img src={Icon3} alt="banking"></img>
            </div>
            <div class="feature__title">Fast Onboarding</div>
            <div class="feature__description">
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </div>
          </div>
          <div
            className="feature__item"
            data-sal="slide-up"
            data-sal-delay="700"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            <div className="feature__icon">
              <img src={Icon4} alt="banking"></img>
            </div>
            <div class="feature__title">Open API</div>
            <div class="feature__description">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="article">
      <div className="container container--pall">
        <div className="article__title">
          <h2
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            Latest Articles
          </h2>
        </div>
        <div class="article__grid container">
          <a
            href="#"
            class="article__item"
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            <div
              class="article__image"
              style={{
                backgroundImage: `url(${article1})`,
              }}
            ></div>
            <div class="article__text">
              <div class="article__author">By Claire Robinson</div>
              <div class="article__title">
                Receive money in any currency with no fees
              </div>
              <div class="article__description">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </div>
            </div>
          </a>
          <a
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="800"
            href="#"
            class="article__item"
          >
            <div
              class="article__image"
              style={{
                backgroundImage: `url(${article2})`,
              }}
            ></div>
            <div class="article__text">
              <div class="article__author">By Wilson Hutton</div>
              <div class="article__title">
                Treat yourself without worrying about money
              </div>
              <div class="article__description">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </div>
            </div>
          </a>
          <a
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="800"
            href="#"
            class="article__item"
          >
            <div
              class="article__image"
              style={{
                backgroundImage: `url(${article3})`,
              }}
            ></div>
            <div class="article__text">
              <div class="article__author">By Wilson Hutton</div>
              <div class="article__title">
                Take your Easybank card wherever you go
              </div>
              <div class="article__description">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </div>
            </div>
          </a>
          <a
            data-sal="slide-up"
            data-sal-delay="700"
            data-sal-easing="ease"
            data-sal-duration="800"
            href="#"
            class="article__item"
          >
            <div
              class="article__image"
              style={{
                backgroundImage: `url(${article4})`,
              }}
            ></div>
            <div class="article__text">
              <div class="article__author">By Claire Robinson</div>
              <div class="article__title">
                Our invite-only Beta accounts are now live!
              </div>
              <div class="article__description">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site …
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
