import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { RiContactsFill } from "react-icons/ri";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />
      <div className="contact__content">
        <h3 className="contact__content__header-text">Let's Talk</h3>
        <div className="contact__content__form">
          <div className="contact__content__form__controlsWrapper">
            <div className="nameWrapper">
              <input required name="name" className="inputName" type="text" />
              <label htmlFor="name" className="namelabel">
                Name
              </label>
            </div>
            <div className="emailWrapper">
              <input name="email" className="inputEmail" type="text" />
              <label htmlFor="email" className="emaillabel">
                Email
              </label>
            </div>
            <div className="descriptionWrapper">
              <textarea
                name="description"
                className="inputDescription"
                type="text"
                rows={"5"}
                style={{ resize: "nonw" }}
              />
              <label htmlFor="description" className="descriptionlabel">
                Description
              </label>
            </div>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
