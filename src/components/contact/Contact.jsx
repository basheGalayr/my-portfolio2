import styles from "./contact.module.css";
function Contact() {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>Contact Me</h2>
      <p className={styles.description}>
        If you have a project in mind or just want to say hello, feel free to
        reach out! I'm always open to new opportunities and collaborations.
      </p>

      <div className={styles.contactInfo}>
        <p> Email: basheabdullahi12@gmail.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Location: Your City, Your Country</p>
      </div>

      <div className={styles.socialLinks}>
        <a
          href='https://linkedin.com/in/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com//Bile33'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
      </div>

      <form className={styles.contactForm}>
        <input type='text' placeholder='Your Name' required />
        <input type='email' placeholder='Your Email' required />
        <textarea placeholder='Your Message' required rows='5'></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
