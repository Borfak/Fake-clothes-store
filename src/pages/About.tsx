import React from "react";
import { Container } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <Container
      style={{
        maxWidth: "80ch",
        margin: "0 auto",
        padding: "0 1rem",
      }}
    >
      <h2>
        <b>About us</b>
      </h2>
      <p>
        Welcome to our clothing shop! We are passionate about fashion and
        providing you with the latest trends and styles.
      </p>
      <p>
        At our store, you'll find a wide range of clothing options for all ages
        and genders. Whether you're looking for casual wear, formal attire, or
        something in between, we've got you covered.
      </p>
      <p>
        Our team of experienced fashion experts carefully curates our collection
        to ensure that we offer high-quality and fashionable clothing items.
      </p>
      <p>
        We believe that everyone deserves to feel confident and comfortable in
        what they wear. That's why we strive to provide clothing options that
        cater to different body types and personal styles.
      </p>
      <p>
        Customer satisfaction is our top priority. We want you to have a
        pleasant shopping experience with us, so our friendly and knowledgeable
        staff is always ready to assist you with any questions or concerns.
      </p>
      <p>
        Thank you for choosing our clothing shop. We look forward to helping you
        find the perfect outfit!
      </p>
      <h2>
        <b>Meet our team</b>
      </h2>
      <div className="d-flex gap-2 mt-4 flex-md-row flex-column">
        <img
          className=" img-fluid"
          style={{ maxWidth: "20rem", borderRadius: "0.5rem" }}
          src="/imgs/me.jpg"
          alt="🇺🇦"
        />
        <div>
          <h3>
            <b>🇺🇦 Artem Boichuk</b>
          </h3>
          <p>Founder; Product Developer.</p>
          <p>
            A great frontend developer. Knows JavaScript and TypeScript like his
            native language.
          </p>
        </div>
      </div>
      <div className="d-flex gap-2 mt-4 flex-md-row flex-column">
        <img
          className=" img-fluid"
          style={{ maxWidth: "20rem", borderRadius: "0.5rem" }}
          src="/imgs/ArtemiusBoichukius.png"
          alt="🇺🇦"
        />
        <p>
          <h3>
            <b>🇬🇷 Artemius Boichukius</b>
          </h3>
          <p>Co-Founder; Software Engineer.</p>
          <p>
            A great person. Sign language tutor, Python developer. Works on
            Python integrations, blog and anything related to the backend.
          </p>
        </p>
      </div>
      <div className="d-flex gap-2 mt-4 flex-md-row flex-column">
        <img
          className=" img-fluid"
          style={{ maxWidth: "20rem", borderRadius: "0.5rem" }}
          src="/imgs/Artemiel.png"
          alt="🇺🇦"
        />
        <p>
          <h3>
            <b>🇮🇹 Artemiel Boichello</b>
          </h3>
          <p>Software Engineer; Data Scientist.</p>
          <p>
            Works on Telegram integrations and Analytics logic; <br />
            Works 10min per day, but still gets paid; <br />
            Has a hobby of mugging people in the streets.
          </p>
        </p>
      </div>
      <div className="d-flex gap-2 mt-4 flex-md-row flex-column">
        <img
          className=" img-fluid"
          style={{ maxWidth: "20rem", borderRadius: "0.5rem" }}
          src="/imgs/chingChong.png"
          alt="🇨🇳"
        />
        <p>
          <h3>
            <b>🇨🇳 Ar Boi Chuk</b>
          </h3>
          <p>Tax accountant; Calculator.</p>
          <p>
            Does not speak English; Eats bats and "rice & mice"; Ching-Chong.
          </p>
        </p>
      </div>
      <hr className="mt-5" />
      <p className="mt-2">
        If you have read this far, why not{" "}
        <a
          style={{ textDecoration: "none", color: "red" }}
          href="mailto:artemboichuk10@gmail.com"
        >
          reach out to us?
        </a>{" "}
        We would be happy to hear feedback, criticism or suggestions from you!
      </p>
    </Container>
  );
};

export {About};
