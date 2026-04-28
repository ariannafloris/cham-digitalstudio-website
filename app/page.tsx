import Image from "next/image";
import Link from "next/link";
import { Card, CardSwap } from "../components/CardSwap";
import logo from "../public/assets/logo.png";
import styles from "./page.module.css";

const services = [
  {
    title: "Branding e identità visiva",
    subtitle: "Creiamo insieme l’identità del tuo progetto",
    eyebrow: "Identity",
    accent: "pink",
    size: "stack",
    description:
      "Il servizio è pensato per essere semplice, efficace e adatto a ogni supporto, dalle etichette al packaging, fino ai profili social.",
  },
  {
    title: "Gestione Social Media",
    subtitle: "Pacchetti per tutte le esigenze",
    eyebrow: "Social",
    accent: "orange",
    size: "large",
    description:
      "Pacchetto Basic\nIdeato per chi vuole mantenere una presenza online ordinata e continua, senza approfondire la parte strategica.\n\nPacchetto Growth\nPensato per far crescere il profilo con contenuti più mirati, frequenti e aumentare visibilità e coinvolgimento degli utenti.\n\nPacchetto Pro\nPerfetto per una gestione totale e strategica del profilo. Pensato per raggiungere risultati concreti, con attenzione costante alla community di utenti.",
  },
  {
    title: "Shooting foto e video",
    subtitle: "Shooting e editing o montaggio",
    eyebrow: "Production",
    accent: "mixed",
    size: "stack",
    description:
      "Cerchiamo di mettervi a vostro agio, raccontando al meglio il brand, con foto e video dedicati",
  },
  {
    title: "Servizi On-Demand",
    subtitle: "Servizi Extra",
    eyebrow: "Extra",
    accent: "neutral",
    size: "stack",
    description:
      "Gestione campagne ADV, Strategia Social Iniziale, Setup Account, Creazione contenuti Una Tantum",
  },
];


export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <header className={styles.navbar}>
          <Link href="/" className={styles.brand}>
            Cham Digital Studio
          </Link>

          <nav className={styles.navLinks} aria-label="Primary">
            <a href="#services">Servizi</a>
            <a href="#projects">Progetti</a>
            <a href="#contact">Contatti</a>
          </nav>

          <a className={styles.navCta} href="#contact">
            Lavoriamo insieme
          </a>
        </header>

        <div className={styles.heroBody}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>
              Trattiamo il tuo brand con la stessa cura con cui trattiamo il
              nostro: <span>senza scorciatoie</span>
            </h1>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">
                Lavoriamo insieme
              </a>
              <a className={styles.secondaryButton} href="#projects">
                Guarda i lavori
              </a>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.heroLogoWrap}>
              <Image
                src={logo}
                alt=""
                fill
                className={styles.heroLogo}
                sizes="(max-width: 760px) 90vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.kicker}></span>
          <h2>Cosa facciamo</h2>
        </div>

        <div className={styles.servicesBento}>
          {services.map((service) => (
            <article
              key={service.title}
              className={`${styles.serviceCard} ${styles[`serviceCard${service.size.charAt(0).toUpperCase()}${service.size.slice(1)}`]}`}
              data-accent={service.accent}
            >
              <div className={styles.serviceCardGlow} aria-hidden="true" />
              <div className={styles.serviceCardTop}>
                <span className={styles.serviceEyebrow}>{service.eyebrow}</span>
                <span className={styles.cardIndex}>{service.subtitle}</span>
              </div>
              <div className={styles.serviceCardVisual} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <div className={styles.sectionSplit}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Selection</span>
            <h2>I nostri progetti</h2>
          </div>
        </div>

        <div className={styles.projectSwapWrap}>
          <CardSwap
            width="100%"
            height="100%"
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
            skewAmount={6}
          >
            <Card>
              <div className={styles.projectMediaSlot}>
                <span>Spazio per immagine o video</span>
              </div>
              <div className={styles.projectCardBody}>
                <h3>Eden Mieli di Sardegna</h3>
              </div>
            </Card>
            <Card>
              <div className={styles.projectMediaSlot}>
                <span>Spazio per immagine o video</span>
              </div>
              <div className={styles.projectCardBody}>
                <h3>Pizzeria Lo Spicchio</h3>
              </div>
            </Card>
            <Card>
              <div className={styles.projectMediaSlot}>
                <span>Spazio per immagine o video</span>
              </div>
              <div className={styles.projectCardBody}>
                <h3>Rearcode</h3>
              </div>
            </Card>
            <Card>
              <div className={styles.projectMediaSlot}>
                <span>Spazio per immagine o video</span>
              </div>
              <div className={styles.projectCardBody}>
                <h3>Golf 7 GTI</h3>
              </div>
            </Card>
          </CardSwap>
        </div>
      </section>

      <section
        id="contact"
        className={`${styles.section} ${styles.contactSection}`}
      >
        <div className={styles.contactCopy}>
          <span className={styles.kicker}>Lavoriamo insieme</span>
          <h2>
            Pronto a fare il <span>prossimo passo?</span>
          </h2>
          <p>
            Contattaci per raccontarci la tua idea, noi ti ascoltiamo e
            cerchiamo di capire se possiamo lavorare insieme. È gratuito!
          </p>

          <div className={styles.contactLinks}>
            <a href="mailto:cham.digitalstudio@gmail.com">
              cham.digitalstudio@gmail.com
            </a>
            <a href="tel:+393483234432">+39 348 323 4432</a>
          </div>
        </div>

        <div className={styles.contactPanel}>
          <div className={styles.formRow}>
            <span>Nome completo</span>
            <span>Maria Rossi</span>
          </div>
          <div className={styles.formRow}>
            <span>Email</span>
            <span>maria@example.com</span>
          </div>
          <div className={styles.formRow}>
            <span>Messaggio</span>
            <span>Raccontami la tua idea...</span>
          </div>
          <a className={styles.primaryButton} href="mailto:hello@chamstudio.it">
            Invia messaggio
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogoWrap}>
          <Image
            src={logo}
            alt=""
            width={200}
            height={72}
            className={styles.footerLogo}
            sizes="200px"
          />
        </div>

        <div>
          <strong>Social</strong>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>TikTok</p>
        </div>

        <div>
          <strong>Location</strong>
          <p>Iglesias (SU)</p>
          <p>Disponibili anche fuori Sardegna</p>
        </div>
      </footer>
    </main>
  );
}
