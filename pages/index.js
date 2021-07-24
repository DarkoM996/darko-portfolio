import {
  faEnvelope,
  faPencilRuler,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import styles from '../styles/index.module.scss';
import Layout from '../components/Layouts/Layout';
import Link from 'next/link';
import {
  faBehance,
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className={styles.index}>
      <Head>
        <title>Darko Mihajlovski - UI/UX Designer</title>
      </Head>

      <main>
        <div className={styles.first}>
          <Layout />
          <div className={styles.info}>
            <h1>UX/UI Designer</h1>
            <h2>I love to design for the Web and I like what I do.</h2>
            <div className={styles.iconDiv}>
              <FontAwesomeIcon icon={faUserAstronaut} className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.story}>
            <h2>Hello, I'm Darko. Nice to meet you.</h2>
            <p>
              Since beginning my journey as a freelance designer nearly 10 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </p>
          </div>
        </div>
        <div className={styles.third}>
          <div className={styles.skills}>
            <div className={styles.iconDiv}>
              <FontAwesomeIcon icon={faPencilRuler} className={styles.icon} />
            </div>
            <h2>UX Designer</h2>
            <p>
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
            <h3>Things I enjoy designing:</h3>
            <p>UX, UI, Web, Mobile, Apps, Logos</p>

            <h3>Design Tools:</h3>
            <div className={styles.tools}>
              <p>Figma</p>
              <p>Adobe XD</p>
              <p>Photoshop</p>
              <p>Ilustrator</p>
              <p>Pen & Paper</p>
              <p>Balsamiq Mockups</p>
            </div>
          </div>
        </div>
        <div className={styles.fourth}>
          <h2>My recent work</h2>
          <p>
            Here are a few design projects I've worked on recently. Want to see
            more? Email me.
          </p>
          <div className={styles.projects}>
            <div className={styles.box}>
              <p>Project Name</p>
              <a href="#">Visit website</a>
            </div>
            <div className={styles.box}>
              <p>Project Name</p>
              <a href="#">Visit website</a>
            </div>
            <div className={styles.box}>
              <p>Project Name</p>
              <a href="#">Visit website</a>
            </div>
            <div className={styles.box}>
              <p>Project Name</p>
              <a href="#">Visit website</a>
            </div>
            <div className={styles.box}>
              <p>Project Name</p>
              <a href="#">Visit website</a>
            </div>
            <div className={styles.box}>
              <p>Project Name</p>
              <a href="#">Visit website</a>
            </div>
          </div>
          <div className={styles.linkDiv}>
            <Link href="https://www.behance.net/darkomihajlo?tracking_source=search_users_recommended%7Cdarko%20mihajlovski">
              <button className={styles.link}>
                <a> See more on Behance </a>
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.fifth}>
          <h2>Testemonials</h2>
          <div className={styles.testimonial}>
            <div className={styles.box}>
              <h2>Client Name</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div className={styles.box}>
              <h2>Client Name</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sixth}>
          <h2>Contact</h2>
          <div className={styles.contact}>
            <h2>Email</h2>{' '}
            <h2
              className={styles.action}
              onClick={() =>
                window.open('mailto:darko.mihajlovski96@gmail.com')
              }
            >
              darko.mihajlovski96@gmail.com
            </h2>
            <h2>Phone</h2>{' '}
            <h2
              className={styles.action}
              onClick={() => window.open('tel:+389 70 221 727')}
            >
              +389 70 221 727
            </h2>
            <h2>LinkedIn</h2>{' '}
            <h2 className={styles.action}>
              <Link href="https://www.linkedin.com/in/darko-mihajlovski-1bb4701b7/">
                Darko Mihajlovski
              </Link>
            </h2>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.iconDiv}>
          <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          <FontAwesomeIcon className={styles.icon} icon={faBehance} />
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
        </div>
      </footer>
    </div>
  );
}
