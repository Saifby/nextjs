import Head from 'next/head';
import Image from 'next/image';
import '../styles/globals.css'; 

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
            <li><a href=""> Portfolio</a></li>
            <li><a href=""> Contact</a></li>
          </ul>
        </div>
        <div className="headtext">
          <h1>Hi, I&apos;m Saif</h1>
          <Image src="/giphy.gif" alt="Animated GIF" width={300} height={200} />
        </div>
        <div id="about">
          <div className="contain">
            <div className="row">
              <div className="col1">
                <h1>About Me</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
