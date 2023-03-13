import "./About_ted.css";
import ScrollButton from "../Component/ScrollButton";
import Footer from "../Component/Footer";
import Header2023 from "../Component/Header2023";

const AboutTed = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {scrollToTop()}
      <div id="particles-js">
        <Header2023 />
        <div className="about-container">
          <h1 className="head">ABOUT TED</h1>
          <img src="images/TED.jpg" alt="" className="img" />

          <p className="about-para">
            TED is a nonprofit organization devoted to Ideas Worth Spreading.
            Started as a four-day conference in California 30 years ago, TED has
            grown to support its mission with multiple initiatives. The two
            annual TED Conferences invite the world’s leading thinkers and doers
            to speak for 18 minutes or less. Many of these talks are then made
            available, free, at TED.com. TED speakers have included Bill Gates,
            Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan
            Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel
            Kahneman.
            <br />
            <br />
            The annual TED Conference takes place each spring in Vancouver,
            British Columbia. TED’s media initiatives include TED.com, where new
            TED Talks are posted daily; TED Translators, which provides
            subtitles and interactive transcripts as well as translations from
            volunteers worldwide; the educational initiative TED-Ed. TED has
            established The Audacious Project that takes a collaborative
            approach to funding ideas with the potential to create change at
            thrilling scale; TEDx, which supports individuals or groups in
            hosting local, self- organized TED-style events around the world,
            and the TED Fellows program, helping world-changing innovators from
            around the globe to amplify the impact of their remarkable projects
            and activities.
            <br />
            <br />
            Follow TED on{" "}
            <a className="prom-link" href="http://twitter.com/TEDTalks">
              Twitter
            </a>
            , or on{" "}
            <a className="prom-link" href="http://www.facebook.com/TED">
              Facebook
            </a>
            .
          </p>
        </div>
        <hr></hr>
        <div className="about-container">
          <p className="head">ABOUT TEDx</p>
          <img src="images/im.jpg" alt="not Found :(" className="img" />
          <p className="tag">x = Independently Organized Event​​</p>
          <p className="about-para">
            In the spirit of ideas worth spreading, TEDx is a program of local,
            self-organized events that bring people together to share a TED-like
            experience. At a TEDx event, TED Talks video and live speakers
            combine to spark deep discussion and connection. These local,
            self-organized events are branded TEDx, where x = independently
            organized TED event. The TED Conference provides general guidance
            for the TEDx program, but individual TEDx events are self-organized.
            (Subject to certain rules and regulations.)
          </p>
        </div>
        <hr></hr>
        <div className="about-container">
          <p className="head">ABOUT TEDxPDEU</p>
          <img
            src="images/TedxPDEU.jpg"
            alt="not Found :("
            className="img"
          />
          {/* <p className="tag">x = Independently Organized Event​​</p> */}
          <p className="about-para">
            TEDxPDEU is an independently organised community facing TEDX event.
            This is the third iteration of the event, the first two being in
            2018 and 2019. Our theme for TEDxPDEU 2022 is
            <span className="imp"> 'Charting the Uncharted'.</span>
          </p>
          <p className="about-para">
            This theme is important right now more than ever seeing as the
            number of global changes and challenges that we are amidst have led
            to the advent in various niches that were previously thought to be
            impossible. We will have speakers coming to speak for this event
            from various walks of life there to elucidate and speak in
            bite-sized 18 minute slots about their fields of expertise and
            experience.
          </p>
        </div>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
};

export default AboutTed;
