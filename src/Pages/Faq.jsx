import React, { useEffect } from "react";
import Footer from "../Component/Footer";
import Header2023 from "../Component/Header2023";
import ScrollButton from "../Component/ScrollButton";
import "./faq.css";
const FAQ = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const faqs = document.querySelectorAll(".faq");
    faqs.forEach((faq) => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });
  }, []);

  return (
    <>
      {scrollToTop()}
      <div id="particles-js">
        <Header2023 />
        <section className="sec">
          <h1 class="faq-title">FAQ's</h1>
          <h5 class="intro">
            Here are some of the most frequently asked questions about Tedx
            PDEU!!!
          </h5>
          <div class="faq">
            <div class="question">
              <h3 classsName="ques">What is TEDxPDEU?</h3>
              <svg class="arrow" width="15" hieght="10" viewBox=" 0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  stroke-width="8"
                  stroke-linecape="square"
                />
              </svg>
            </div>
            <div class="answer">
              <p className="faq-parasss">
                TEDxPDEU is an independently organised community facing TEDX
                event. This is the third iteration of the event, the first two
                being in 2018 and 2019. Our theme for TEDxPDEU 2022 is{" "}
                <span className="imp">'Charting the Uncharted'.</span>
              </p>
              <p className="faq-parasss">
                This theme is important right now more than ever seeing as the
                number of global changes and challenges that we are amidst have
                led to the advent in various niches that were previously thought
                to be impossible. We will have speakers coming to speak for this
                event from various walks of life there to elucidate and speak in
                bite-sized 18 minute slots about their fields of expertise and
                experience.
              </p>
            </div>
          </div>
          <div class="faq">
            <div class="question">
              <h3 classsName="ques">Who organizes TEDxPDEU? </h3>
              <svg class="arrow" width="15" hieght="10" viewBox=" 0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  stroke-width="8"
                  stroke-linecape="square"
                />
              </svg>
            </div>
            <div class="answer">
              <p className="faq-parasss">
                TEDxPDEU is organised by a committee of PDEU students from a
                plethora of branches including but not limited to Liberal
                Studies and School of Technology. This committee of hand-picked
                individuals works together to give shape to this event.
              </p>
            </div>
          </div>
          <div class="faq">
            <div class="question">
              <h3 classsName="ques">Who are the speakers for this year? </h3>
              <svg class="arrow" width="15" hieght="10" viewBox=" 0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  stroke-width="8"
                  stroke-linecape="square"
                />
              </svg>
            </div>
            <div class="answer">
              <p className="faq-parasss">
                Follow our social media accounts and website for updates.
                Speakers will be updated in due time.
              </p>
            </div>
          </div>

          <div class="faq">
            <div class="question">
              <h3 classsName="ques">How long will the event be? </h3>
              <svg class="arrow" width="15" hieght="10" viewBox=" 0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  stroke-width="8"
                  stroke-linecape="square"
                />
              </svg>
            </div>
            <div class="answer">
              <p className="faq-parasss">
                The event will consist of 18-minute TEDx talks given by
                approximately 10 speakers. The event will take part in two
                sessions – the morning and afternoon session with a sponsored
                lunch break in between for all participant
              </p>
            </div>
          </div>
          <div class="faq">
            <div class="question">
              <h3 classsName="ques">Where will it be held? </h3>
              <svg class="arrow" width="15" hieght="10" viewBox=" 0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  stroke-width="8"
                  stroke-linecape="square"
                />
              </svg>
            </div>
            <div class="answer">
              <p className="faq-parasss">
                TEDxPDEU will be held in the grand auditorium (B – Block) of the
                lush green 100-acre campus of PDEU, Gandhinagar.
              </p>
            </div>
          </div>
          <div class="faq">
            <div class="question">
              <h3 classsName="ques">
                Will it be an online event or an offline event?
              </h3>
              <svg class="arrow" width="15" hieght="10" viewBox=" 0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  stroke-width="8"
                  stroke-linecape="square"
                />
              </svg>
            </div>
            <div class="answer">
              <p className="faq-parasss">
                The organising committee of TEDxPDEU is pushing for an offline
                event in order to make sure that the experience of the event is
                enhanced and has its due impact; although the nature of these
                changing times may affect its offline status.
              </p>
              <p className="faq-parasss">
                Follow socials for the date, tickets and in case of any querry
                feel free to get in touch with the organizers.
              </p>
            </div>
          </div>
        </section>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
