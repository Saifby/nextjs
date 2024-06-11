import Head from 'next/head';
import Image from 'next/image';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
  return (
    <div className="pageContainer">
      <Head>
        <title>Inscription</title>
        <script src="path/to/your/script.js" async></script>
      </Head>
      <header>
        <div className="contain">
          <Image src="/Saif.png" alt="Logo" width={100} height={100} />
          <ul>
            <li><a href=""> Home</a></li>
            <li><a href=""> About</a></li>
            <li><a href=""> Service</a></li>
            <li><a href=""> Contact</a></li>
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
                <a href="cv.pdf"><button>CV</button></a>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className='services'>
          <div className='container'>
            <h1>My Services</h1>
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
          <div className='container'>
            <div className='contact1'>
              <h1>Contact me !</h1>
              <p>saifbenyaagoub@gmail.com</p>
              <p>+216 92 992 297</p>
            </div>
            <div className='contact2'>
              <p>Social Contact :</p>
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
              <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
              <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>

          </div>

        </div>
      
    </div>
  );
}
