import Head from 'next/head';
import Image from 'next/image';
import styles from './style.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="style.css" />
        <title>Inscription</title>
      </Head>
      <body>
        <header>
          <div className="contain">
            <Image src="/Saif.png" alt="Logo" width={100} height={100} />
            <ul>
              <li><a href=""> Home</a></li>
              <li><a href=""> About</a></li>
              <li><a href=""> Portfolio</a></li>
              <li><a href=""> Contact</a></li>
            </ul>
          </div>
          <div className="headtext">
            <h1>Hi, I'm Saif</h1>
            <Image src="/giphy.gif" alt="Animated GIF" width={300} height={200} />
          </div>
          <div id="about">
            <div className="contain">
              <div className="row">
                <div className="col1">
                  <Image src="/bg.jpg" alt="Background" width={400} height={300} />
                </div>
                <div className="col2">
                  <h1>About Me s</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
      </body>
    </>
  );
}
