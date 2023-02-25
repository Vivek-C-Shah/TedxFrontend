import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import "./Timer.css";
import { Link } from "react-router-dom";

const Timer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  // const scrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const date = new Date("March 26, 2023 9:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = date - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="timer-container">
      <section className="timer">
        <div className="countdown-desc-box">
          <h2 className="countdown-h2">
          STORIES BEHIND<span className="smalli"> STORIES</span>
          </h2>
        </div>
        <p className="countdown-desc">Let the countdown begin!!</p>

        <div className="countdown-timer">
          <section>
            <p className="timer-number">{timerDays}</p>
            <p>Days</p>
          </section>
          <span className="colon">:</span>
          <section>
            <p className="timer-number">{timerHours}</p>
            <p>Hours</p>
          </section>
          <span className="colon">:</span>
          <section>
            <p className="timer-number">{timerMinutes}</p>
            <p>Minutes</p>
          </section>
          <span className="colon">:</span>
          <section>
            <p className="timer-number">{timerSeconds}</p>
            <p>Seconds</p>
          </section>
        </div>
        <div className="details">
          <span className="detail">
            <FontAwesomeIcon
              style={{ color: "red" }}
              icon={faCalendar}
            ></FontAwesomeIcon>{" "}
            26th March 2023
          </span>
          <span className="detail">
            <FontAwesomeIcon
              style={{ color: "red" }}
              icon={faUser}
            ></FontAwesomeIcon>{" "}
            10 Speakers
          </span>
          <span className="detail">
            <FontAwesomeIcon
              style={{ color: "red" }}
              icon={faAddressCard}
            ></FontAwesomeIcon>{" "}
            PDEU, Gandhinagar
          </span>
        </div>
        <Link
          to={"/payment"}
        >
          <button className='payment__button'>Book Now</button>
        </Link>
      </section>
    </section>
  );
};

export default Timer;
