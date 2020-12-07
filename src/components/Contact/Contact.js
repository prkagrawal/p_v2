const ContactStyles = () => {
  return (
    <style jsx={"true"}>{`
      .container-contact {
        background-color: var(--bg);
      }
    `}</style>
  );
};

const Contact = () => {
  return (
    <div className={"container-contact"}>
      <h3>Contact</h3>
      <ContactStyles />
    </div>
  );
};

export default Contact;
