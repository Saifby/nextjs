import Head from 'next/head';
import Image from 'next/image';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;

import styles from './style.module.css';


export default function Home() {
  return (
    <div className="pageContainer">
      <Head>
        <title>Inscription</title>
      </Head>
      <header>
        <div className="contain">
          <Image src="/Saif.png" alt="Logo" width={100} height={100} />
          <ul>
            <li><a href="#header"> Home</a></li>
            <li><a href="#about"> About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#cont"> Contact</a></li>
          </ul>
        </div>
        </header>
        <div className="headtext">
          <h1>Hi, I&apos;m Saif  <img src="bg.jpg" alt="" /></h1><br />
        </div>
        <div id="about">
          <div className="contain">
            <div className="row">
              <div className="col1">
              <Image src="/4707122.jpg" alt="Background" width={400} height={300} />
              </div>
              <div className="col2">
              <h1>About Me</h1>
                <p>20-year-old programmer fueled by passion and curiosity. Driven by a thirst for knowledge, I immerse myself in the world of coding, constantly seeking to learn and innovate.  </p>
              <div className='titles'>
                <a href="cv.pdf"><button>Download CV</button></a>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className='service'>
          <div className='container'>
            <h1 id="service">My Services</h1>
            <div className='listservice'>
              <div>
                <h2>FrontEnd</h2>
                <p>qdhqsdhqdjdqdsqkdmqsdmqsdqmds</p>
                <a href="cv.pdf">Learn more</a>
              </div>
              <div>
                <h2>BackEnd</h2>
                <p>dqsdlshkjsdhdkndlsnflsdnf</p>
                <a href="cv.pdf">Learn more</a>
              </div>
              <div>
                <h2>Programming</h2>
                <p>dqsdlshkjsdhdkndlsnflsdnf</p>
                <a href="cv.pdf">Learn more</a>
              </div>

            </div>
          </div>
        </div>
        <div className='contact'>
          <div className='container'id='cont'>
            <div className='contact1'>
              <h1>Contact me </h1>
              <p><FontAwesomeIcon icon={faEnvelope} size="2x" style={{color:'#46d190',}}className='icon'/>saifbenyaagoub@gmail.com</p>
              <p><FontAwesomeIcon icon={faPhone} size="2x"style={{color:'#46d190',}} className='icon' />+216 92 992 297</p>
            </div>
            <div className='contact2'>
              <h1>Social Contact :</h1>
              <a href="https://www.facebook.com/saif.benyagoub/" className='socialicon'>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
               </a>
                <a href="https://www.instagram.com/saifbenyaagoub/" className='socialicon'>
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                 </a>
                <a href="https://github.com/Saifby" className='socialicon'>
               <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>

          </div>

        </div>
      
    </div>
  );
}
