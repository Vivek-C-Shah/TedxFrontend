import "./About.css";
import ScrollButton from "../Component/ScrollButton";

const About = () => {
  return (
    <>
      <div id="particles-js">
        <div className="about-container">
          <h1 className="head">ABOUT TED</h1>
          <img src="images/TED.jpg" alt="" className="img" />

          <p className="about-para">
            TED is a nonprofit organization devoted to Ideas Worth Spreading.
            Started as a four-day conference in California 30 years ago, TED has
            grown to support its mission with multiple initiatives. The two annual
            TED Conferences invite the world’s leading thinkers and doers to speak
            for 18 minutes or less. Many of these talks are then made available,
            free, at TED.com. TED speakers have included Bill Gates, Jane Goodall,
            Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe
            Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
            <br />
            <br />
            The annual TED Conference takes place each spring in Vancouver,
            British Columbia. TED’s media initiatives include TED.com, where new
            TED Talks are posted daily; TED Translators, which provides subtitles
            and interactive transcripts as well as translations from volunteers
            worldwide; the educational initiative TED-Ed. TED has established The
            Audacious Project that takes a collaborative approach to funding ideas
            with the potential to create change at thrilling scale; TEDx, which
            supports individuals or groups in hosting local, self- organized
            TED-style events around the world, and the TED Fellows program,
            helping world-changing innovators from around the globe to amplify the
            impact of their remarkable projects and activities.
            <br></br>
            <br></br>
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
        <ScrollButton />
      </div>
    </>
  );
};

export default About;
