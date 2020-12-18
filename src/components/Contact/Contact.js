const ContactStyles = () => {
  return (
    <style jsx={"true"}>{`
      .contact-container {
        margin: 10px auto;
        padding: 50px 10px;
        width: 100%;
        max-width: 650px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #eee;
      }
      .contact-form {
        width: 100%;
        padding: 20px;
      }
      .formgroup {
        width: 100%;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
      }
      .form-input {
        padding: 8px 15px;
        font-size: 1.5 rem;
        outline: none;
        width: 100%;
      }
      .formgroup label {
        font-size: 1rem;
        font-weight: 500;
        align: left;
      }
      .formgroup textarea {
        padding: 8px 15px;
        font-size: 1.5 rem;
        outline: none;
        width: 100%;
        height: 15rem
        resize: vertical;
      }
      .form-sub {
        background-color: #333;
        font-size: 1rem;
        padding: 8px 12px;
        color: #fff;
        outline: none;
        border: none;
      }
    `}</style>
  );
};

const Contact = () => {
  return (
    <div className={"container-contact"}>
      <h3>Contact</h3>
      <form className={"contact-form"} onSubmit={(e) => onSubmit(e)}>
        <div className={"formgroup"}>
          <label>Name</label>
          <input
            className={"form-input"}
            type="text"
            placeholder="John Doe"
            name="name"
            required
          />
        </div>
        <div className={"formgroup"}>
          <label>Email</label>
          <input
            className={"form-input"}
            type="email"
            placeholder="example@gmail.com"
            name="email"
            required
          />
        </div>
        <div className={"formgroup"}>
          <label>Message</label>
          <textarea
            className={"form-input"}
            type="text"
            placeholder="What do you want to talk about..."
            name="message"
            required
          />
        </div>
        <div className={"formgroup"}>
          <button className={"form-sub"} type="submit">
            Submit
          </button>
        </div>
      </form>
      <ContactStyles />
    </div>
  );
};

export default Contact;
