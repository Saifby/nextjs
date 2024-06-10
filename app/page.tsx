import Head from 'next/head';
import Image from 'next/image';
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
              <Image src="/img1.jpg" alt="Background" width={400} height={300} />
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
      
    </div>
  );
}
