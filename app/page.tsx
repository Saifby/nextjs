import Head from 'next/head';
import Image from 'next/image';
import styles from './style.module.css'; // Assuming you have a CSS module or global CSS file

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="style.css" />
        <title>Inscription</title>
      </Head>
      <form action="">
        <div id="d1">
          <p>
            <Image src="/im1.png" alt="Inscription" width={50} height={50} />
            Inscription
          </p>
        </div>
        <table>
          <tbody>
            <tr>
              <td><label>Entrer votre prénom :</label></td>
              <td><input type="text" id="c1" /><br /></td>
            </tr>
            <tr>
              <td><label>Votre classe :</label></td>
              <td>
                <select id="c2">
                  <option value="Seconde 1">Seconde 1</option>
                  <option value="Seconde 2">Seconde 2</option>
                  <option value="Seconde 3">Seconde 3</option>
                  <option value="Seconde 4">Seconde 4</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>votre E-mail :</label></td>
              <td><input type="email" id="c3" /></td>
            </tr>
            <tr>
              <td><label>Votre mot de passe :</label></td>
              <td><input type="password" id="c4" /></td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" className="submit" id="sub" value="S'INSCRIRE" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
