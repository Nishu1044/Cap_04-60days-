
// import React from 'react';

// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//     </div>
//   );
// };

// export default Contact;


import React from 'react';
import './Contact.css'; // Assuming you move the styles to a separate CSS file

const Contact = () => {
  return (
    <div style={{ paddingLeft: '70px', paddingRight: '70px', textAlign: 'center' }}>
      <div style={{ marginTop: '130px' }}>
        <h1>Contact Us</h1>
        <p className="p1">
          We know that choosing the right institute or a career path can be a difficult and tiring process, and that's why we're here for you. Contact us to ask any questions, we'll respond over email as soon as possible!
        </p>
      </div>
      <div style={{ marginBottom: '120px', marginTop: '50px' }}>
        <img src="https://www.masaischool.com/images/contact/mail.svg" alt="mail-img" width="100" height="100" />
        <p className="p2">Write to us at</p>
        <a className="a1" href="mailto:admissions@masaischool.com">admissions@masaischool.com</a><br />
      </div>
      <hr />
      <div>
        <div style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', float: 'right', width: '11.875px', marginRight: '90%', paddingRight: '8.5%' }}>
            <img src="./heading.svg" alt="heading-img" width="11.88" height="11.88" />
          </div>
          <p className="p3">
            In case of any queries you may have about Masai, we organise a Q&A session every Tuesday & Friday, 5 - 6 PM. Register below and join the link on time to get your doubts cleared by our Admissions Counselling Team.
          </p>
        </div>
        <a className="a2" href="https://bit.ly/2WFSXUe">click here to register</a>
      </div>
    </div>
  );
}

export default Contact;
