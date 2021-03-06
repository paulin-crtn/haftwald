/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

/* ---------------------------------- REACT --------------------------------- */
import { useState } from "react";

/* ------------------------------- COMPONENTS ------------------------------- */
import { Header } from "../components/Header";
import { ServiceCard } from "../components/ServiceCard";
import { Service } from "../components/Service";
import { Chip } from "../components/Chip";
import { Info } from "../components/Info";
import { OrganisationCard } from "../components/OrganisationCard";
import { Commitment } from "../components/Commitment";
import { Question } from "../components/Question";
import { Footer } from "../components/Footer";
import { ModalContact } from "../components/ModalContact";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

/* ------------------------------- INTERFACES ------------------------------- */
import { IQuestion } from "../interfaces/IQuestion";

/* ---------------------------------- DATA ---------------------------------- */
import { questions } from "../data/questions";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Home.module.scss";

/* --------------------------------- IMAGES --------------------------------- */
import stack from "../public/img/homepage.png";
import picture from "../public/img/picto/picture.png";
import fire from "../public/img/picto/fire.png";
import setting from "../public/img/picto/setting.png";
import team from "../public/img/team.svg";
import videocall from "../public/img/videocall.svg";
import commitment from "../public/img/commitment.svg";
import emoji from "../public/img/emoji.png";
import hour from "../public/img/hour.svg";
import reactjs from "../public/img/techno/reactjs.svg";
import nextjs from "../public/img/techno/nextjs.svg";
import angular from "../public/img/techno/angular.svg";
import laravel from "../public/img/techno/laravel.svg";
import nodejs from "../public/img/techno/nodejs.svg";
import nestjs from "../public/img/techno/nestjs.svg";
import mysql from "../public/img/techno/mysql.svg";
import mongodb from "../public/img/techno/mongodb.svg";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
const Home: NextPage = () => {
  /* -------------------------------------------------------------------------- */
  /*                                 REACT STATE                                */
  /* -------------------------------------------------------------------------- */
  const [showModalContact, setShowModalContact] = useState<boolean>(false);
  const [showServiceDevFront, setShowServiceDevFront] =
    useState<boolean>(false);
  const [showServiceDevBack, setShowServiceDevBack] = useState<boolean>(false);
  const [showServiceDevOps, setShowServiceDevOps] = useState<boolean>(false);

  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */
  return (
    <div>
      {/* ------------------------------------------------------------------------- */
      /*                                  HTML HEAD                                 */
      /* -------------------------------------------------------------------------- */}
      <Head>
        <title>D??veloppeur Web Freelance Fullstack | Haftwald</title>
        <meta
          name="description"
          content="D??veloppement d???applications web r??alis??es sous Javascript, Typescript ou PHP : Angular, React, NextJS, NodeJS et Laravel"
        />
      </Head>

      {/* ------------------------------------------------------------------------- */
      /*                                   HEADER                                   */
      /* -------------------------------------------------------------------------- */}
      <Header />

      {/* ------------------------------------------------------------------------- */
      /*                                    MAIN                                    */
      /* -------------------------------------------------------------------------- */}
      <main className={styles.container}>
        {/* -------------------------------- HEADLINES ------------------------------- */}
        <section>
          <div className={styles.headlinesContainer}>
            <div>
              <h1>
                Conception et r??alisation de site internet et de logiciel m??tier
              </h1>
              <h2>
                Faites vous accompagner par un{" "}
                <strong>d??veloppeur web freelance</strong> pour votre{" "}
                <strong>projet web</strong>
              </h2>
              <button onClick={() => setShowModalContact(true)}>
                Prendre contact
              </button>
            </div>

            <div className={styles.stackContainer}>
              <figure>
                <Image
                  src={stack}
                  alt="stack haftwald"
                  placeholder="blur"
                  quality={100}
                />
              </figure>
            </div>
          </div>
        </section>

        {/* -------------------------------- SERVICES ------------------------------- */}
        <section
          id="services"
          className={[styles.sectionContainer, styles.servicesContainer].join(
            " "
          )}
        >
          <h3 className={styles.title}>Offres de service</h3>
          <p className={styles.subTitle}>
            Faites cr??er ou modifier votre site internet ou votre application
            web : ajout de nouvelles fonctionnalit??s, correction de bugs,
            modification des contenus ou de la pr??sentation, intervention sur la
            base de donn??es, mise ?? jour, etc.
          </p>
          <div className={[styles.wrapper, styles.servicesWrapper].join(" ")}>
            <ServiceCard
              title="Front-end"
              picto={picture}
              text="D??veloppement d???interfaces dynamiques afin d???offrir une exp??rience de navigation fluide et rapide ?? vos utilisateurs : int??gration de maquettes responsive, consommation d???API, etc."
              setShowService={setShowServiceDevFront}
            />
            <ServiceCard
              title="Back-end"
              picto={fire}
              text="D??veloppement d???API afin de vous permettre de construire des applications m??tiers ou des solutions SaaS : outil de suivi ou de gestion, interaction avec une base de donn??es, business intelligence, etc."
              setShowService={setShowServiceDevBack}
            />
            <ServiceCard
              title="DevOps"
              picto={setting}
              text="Automatisation de certains processus afin de lancer de nouvelles fonctionnalit??s plus rapidement tout en r??duisant le risque d???erreurs et de bugs : versionning, tests unitaires, pipeline CI/CD, monitoring, etc."
              setShowService={setShowServiceDevOps}
            />
          </div>
        </section>

        {/* -------------------------------- ORGANISATION ------------------------------- */}
        <section
          id="organisation"
          className={[
            styles.sectionContainer,
            styles.organisationsContainer,
          ].join(" ")}
        >
          <h3 className={styles.title}>Organisation</h3>
          <p className={styles.subTitle}>
            En fonction de la nature et de la dur??e de la mission, la prestation
            pourra s???exercer dans vos locaux ou ?? distance.
          </p>
          <div
            className={[styles.wrapper, styles.organisationsWrapper].join(" ")}
          >
            <OrganisationCard
              title="Pr??sentiel"
              img={team}
              text="Certains projets n??cessitent une pr??sence totale ou partielle sur site, auquel cas cas je peux me d??placer pour int??grer vos ??quipes directement dans vos locaux. La mobilit?? est possible sur l???ensemble du territoire."
              setShowModalContact={setShowModalContact}
            />
            <OrganisationCard
              title="Distanciel"
              img={videocall}
              text="Pour les missions de plus courte dur??e, moins complexes ou n??cessitant de collaborer avec des ??quipes d??j?? connues, le t??l??travail est une solution ?? envisager. Je suis disponible sur vos outils tout au long du projet."
              setShowModalContact={setShowModalContact}
            />
          </div>
        </section>

        {/* -------------------------------- QUESTIONS ------------------------------- */}
        <section
          id="questions"
          className={[styles.sectionContainer, styles.questionsContainer].join(
            " "
          )}
        >
          <h3 className={styles.title}>Questions courantes</h3>
          <p className={styles.subTitle}>
            Trouvez les r??ponses ?? la plupart des questions que vous pourriez
            vous poser.
          </p>
          <div className={[styles.wrapper, styles.questionsWrapper].join(" ")}>
            {questions.map((question: IQuestion, index) => (
              <Question
                key={index}
                question={question.title}
                answer={question.answer}
              />
            ))}
          </div>
          <div className={styles.cta}>
            <p>Besoin d???informations suppl??mentaires ?</p>
            <button onClick={() => setShowModalContact(true)}>
              Poser votre question
            </button>
          </div>
        </section>

        {/* -------------------------------- COMMITMENTS ------------------------------ */}
        <section
          id="commitments"
          className={[
            styles.sectionContainer,
            styles.commitmentsContainer,
          ].join(" ")}
        >
          <h3 className={styles.title}>Engagements</h3>
          <div
            className={[styles.wrapper, styles.commitmentsWrapper].join(" ")}
          >
            <div>
              <Commitment
                title="Transparence"
                text="Des ??changes r??guliers, clairs et directs afin de favoriser la bonne avanc??e du projet."
              />
              <Commitment
                title="Investissement"
                text="Un engagement, une r??activit?? et une adaptabilit?? tout au long de la mission."
              />
              <Commitment
                title="Accompagnement"
                text="Des conseils adapt??s pour vous permettre de comprendre les enjeux et faire les meilleurs choix ?? chaque ??tape."
              />
            </div>
            <div className={styles.cta}>
              <figure>
                <Image src={commitment} alt="commitment illustration" />
              </figure>
              <button onClick={() => setShowModalContact(true)}>
                Prendre contact
              </button>
            </div>
          </div>
        </section>

        {/* -------------------------------- ABOUT ------------------------------- */}
        <section
          id="about"
          className={[styles.sectionContainer, styles.aboutContainer].join(" ")}
        >
          <h3 className={styles.title}>Qui suis-je ?</h3>
          <figure className={styles.emojiContainer}>
            <Image
              src={emoji}
              alt="emoji paulin caratini"
              placeholder="blur"
              quality={100}
            />
          </figure>
          <p>
            C???est en ??changeant quotidiennement avec des{" "}
            <strong>int??grateurs et d??veloppeurs web</strong> lorsque j???occupais
            des postes de <strong>chef de projet digital</strong> au sein d???
            <strong>agences marketing</strong> que je me suis d??couvert un
            int??r??t prononc?? pour le <strong>fonctionnement technique</strong>{" "}
            des <strong>applications web</strong>.
            <br />
            <br />
            Cette curiosit?? m???a pouss?? ?? passer les certifications ????
            <strong>Techniques de d??veloppement web</strong>?? et ????
            <strong>Techniques d???int??gration web</strong>?? puis ?? rejoindre tour
            ?? tour deux start-up pour les accompagner dans la conception de
            leurs <strong>applications m??tiers</strong> r??alis??es sous{" "}
            <strong>TypeScript</strong>, respectivement dans le secteur m??dical
            et de la grande distribution.
            <br />
            <br />
            Ce sont ces exp??riences et ce parcours pluridisciplinaire qui me
            permettent aujourd???hui de proposer mes comp??tences ?? des
            organisations ?? la recherche d???un{" "}
            <strong>d??veloppeur web freelance</strong>. Que vous cherchiez ??
            vous faire conseiller sur un projet en cours ou ?? venir, ?? faire
            concevoir votre <strong>application web</strong> ou bien ??{" "}
            <strong>renforcer vos ??quipes</strong>, je vous invite ?? me
            contacter afin que nous puissions ??changer.
          </p>
          <button onClick={() => setShowModalContact(true)}>
            Prendre contact
          </button>
        </section>
      </main>

      {/* ------------------------------------------------------------------------- */
      /*                                   FOOTER                                   */
      /* -------------------------------------------------------------------------- */}
      <Footer />

      {/* ------------------------------------------------------------------------- */
      /*                            SCROLL TO TOP BUTTON                            */
      /* -------------------------------------------------------------------------- */}
      <ScrollToTopButton />

      {/* ------------------------------------------------------------------------- */
      /*                                MODAL CONTACT                               */
      /* -------------------------------------------------------------------------- */}
      {showModalContact && (
        <ModalContact setShowModalContact={setShowModalContact} />
      )}

      {/* ------------------------------------------------------------------------- */
      /*                              SERVICE FRONT-END                             */
      /* -------------------------------------------------------------------------- */}
      {showServiceDevFront && (
        <Service
          title="D??veloppement Front-end"
          picto={picture}
          setShowService={setShowServiceDevFront}
          setShowModalContact={setShowModalContact}
        >
          <div className={styles.serviceContainer}>
            <p>
              Le <strong>d??veloppement front-end</strong> a beaucoup ??volu?? au
              cours des derni??res ann??es. D???abord exclusivement concentr?? sur l???
              <strong>int??gration de maquettes graphiques</strong> en HTML et
              CSS il a ensuite pris en charge la gestion des{" "}
              <strong>int??ractions avec les utilisateurs</strong> par le biais
              de Javascript. Cela a donn?? naissance ?? un certain nombre
              d???outils, chacun permettant de r??pondre ?? un{" "}
              <strong>besoin m??tier sp??cifique</strong>.
            </p>

            <h4>Langages et outils de d??veloppement</h4>

            <p>
              Haftwald d??veloppe aussi bien des{" "}
              <strong>Single Page Application</strong> (SPA) dont le rendu
              s???effectue <strong>c??t?? client</strong> (Client Side Rendering)
              que des applications dont le rendu s???effectue{" "}
              <strong>c??t?? serveur</strong> (Server Side Rendering ou Static
              Site Generation) afin de proposer la{" "}
              <strong>solution la plus adapt??e et performante</strong>.
            </p>

            <h5>
              <strong>Typescript, Javascript</strong> : React, NextJS, Angular
            </h5>

            <div className={styles.pictoContainer}>
              <figure>
                <Image src={reactjs} alt="picto librairie react" />
              </figure>
              <figure className={styles.pictoXs}>
                <Image src={nextjs} alt="picto framework nextjs" />
              </figure>
              <figure>
                <Image src={angular} alt="picto angular 2+" />
              </figure>
            </div>

            <h4>Maquettes graphiques</h4>

            <p>
              Les maquettes graphiques permettent de d??finir en amont l???
              <strong>interface</strong> du site. C???est une phase indispensable
              avant de commencer la cr??ation ou la refonte d???un site web.
            </p>

            <p>
              En effet, en plus d???appliquer la <strong>charte graphique</strong>{" "}
              de votre organisation (couleurs, typographies), la r??alisation de{" "}
              <strong>maquettes fonctionnelles</strong> oblige ?? se poser un
              certain nombre de questions sur les ??l??ments qui vont composer les
              pages (texte, image, ic??ne, bouton, boite de dialogue, etc.) ainsi
              que la mani??re dont ces ??l??ments seront agenc??s entre eux.
            </p>

            <p>
              Ces choix impacteront directement l???
              <strong>ergonomie</strong> du site et donc sa{" "}
              <strong>facilit?? de compr??hension et d???utilisation</strong>.
              L???objectif est de{" "}
              <strong>construire un parcours fluide et coh??rent</strong> afin de
              maximiser l???<strong>exp??rience utilisateur</strong>.
            </p>

            <Info>
              En fonction de l???envergure du projet cette prestation pourra ??tre
              r??alis??e par un <strong>webdesigner</strong> de notre r??seau.
            </Info>
            <Info>
              Dans certains cas et afin de diminuer le co??t final il parfois
              possible d???acheter des <strong>maquettes pr??te ?? l???emploi</strong>{" "}
              via une plateforme sp??cialis??e.
            </Info>

            <h4>R??f??rencement naturel</h4>

            <p>
              Le r??f??rencement naturel, aussi connu sous l???acronyme SEO pour{" "}
              <strong>Search Engine Optimization</strong>, permet ?? votre site
              d???apparaitre dans les r??sultats des{" "}
              <strong>moteurs de recherche</strong> comme Google, Yahoo! ou
              Bing.
            </p>

            <p>
              La position dans les moteurs de recherche d??pend de plusieurs
              facteurs, autant <strong>techniques</strong> que{" "}
              <strong>r??dactionnels</strong>. Prestataire et client ont donc
              tous les deux un r??le cl?? dans la r??ussite du r??f??rencement
              naturel d???un site.
            </p>

            <Info>
              En fonction de vos besoins il est possible de faire r??diger vos
              contenus par un <strong>r??dacteur web</strong> de notre r??seau.
            </Info>
          </div>
        </Service>
      )}

      {/* ------------------------------------------------------------------------- */
      /*                              SERVICE BACK-END                              */
      /* -------------------------------------------------------------------------- */}
      {showServiceDevBack && (
        <Service
          title="D??veloppement back-end"
          picto={fire}
          setShowService={setShowServiceDevBack}
          setShowModalContact={setShowModalContact}
        >
          <div className={styles.serviceContainer}>
            <p>
              Aujourd???hui les <strong>applications monolitiques</strong> tendent
              ?? laisser la place ?? des{" "}
              <strong>architectures plus modulaires</strong>. Sans
              n??cessairement d??couper le projet en{" "}
              <strong>microservices</strong>, l???approche dominante est de{" "}
              <strong>s??parer le front-end du back-end</strong> en utilisant des{" "}
              <strong>API</strong> (Application Programming Interface). Cela
              offre de <strong>meilleures performances</strong>, une plus{" "}
              <strong>grande ??volutivit??</strong> et la possibilit?? ?? d???autres
              applications de{" "}
              <strong>communiquer avec le logiciel d??velopp??</strong>.
            </p>

            <h4>Langages et outils de d??veloppement</h4>

            <p>
              Haftwald d??veloppe des <strong>applications web</strong> (site
              internet statique ou dynamqiue, logiciel m??tier, plateforme SaaS)
              dans le respect des <strong>bonnes pratiques</strong> de
              l???industrie : principes SOLID, fonctions pures, d??couplage...
              autant de <strong>concepts fondamentaux</strong> pour assurer une{" "}
              <strong>architecture logicielle solide et ??volutive</strong>.
            </p>

            <h5>
              <strong>PHP</strong> : Laravel
            </h5>

            <div className={styles.pictoContainer}>
              <figure className={styles.pictoXs}>
                <Image src={laravel} alt="picto framework laravel" />
              </figure>
            </div>

            <h5>
              <strong>Typescript</strong> : NodeJS & NestJS
            </h5>

            <Chip icon={hour}>Mont??e en comp??tences en cours</Chip>

            <div className={styles.pictoContainer}>
              <figure>
                <Image src={nodejs} alt="picto framework nodejs" />
              </figure>
              <figure>
                <Image src={nestjs} alt="picto framework nestjs" />
              </figure>
            </div>

            <h5>
              <strong>Base de donn??es</strong> : MySQL, MongoDB
            </h5>

            <div className={styles.pictoContainer}>
              <figure>
                <Image src={mysql} alt="picto mysql database" />
              </figure>
              <figure>
                <Image src={mongodb} alt="picto mongodb database" />
              </figure>
            </div>

            <h4>Outils d???analyse</h4>

            <p>
              En fonction du type de site d??velopp??, il sera possible
              d???installer un ou plusieurs outils de{" "}
              <strong>suivi statistiques</strong> (Google Analytics, Facebook
              Pixel???) afin de pouvoir disposer d???informations concernant la{" "}
              <strong>fr??quentation</strong> du site, le <strong>profil</strong>{" "}
              et l???
              <strong>origine des visiteurs</strong>, le{" "}
              <strong>taux de conversion</strong>, etc. Ces outils pourront vous
              aider dans votre <strong>strat??gie de marketing digital</strong>.
            </p>
          </div>
        </Service>
      )}

      {/* ------------------------------------------------------------------------- */
      /*                                   DEVOPS                                   */
      /* -------------------------------------------------------------------------- */}
      {showServiceDevOps && (
        <Service
          title="DevOps"
          picto={setting}
          setShowService={setShowServiceDevOps}
          setShowModalContact={setShowModalContact}
        >
          <div className={styles.serviceContainer}>
            <p>
              Le DevOps est une <strong>approche organisationnelle</strong>{" "}
              cherchant ?? <strong>combiner les ??quipes</strong> de
              d??veloppements et op??rationnels afin d???
              <strong>
                augmenter la vitesse, la qualit?? et l???efficience
              </strong>{" "}
              du d??veloppement d???un logiciel. Cette approche se traduit par des{" "}
              <strong>m??thodes et des outils communs</strong> : m??thodologie
              Agile, int??gration et d??veloppement continue, automatisation, etc.
            </p>

            <h4>Code source et contr??le de version</h4>

            <p>
              Le code source produit, <strong>performant</strong>,{" "}
              <strong>comment??</strong> et <strong>??volutif</strong>, est
              disponible sur un{" "}
              <strong>service d???h??bergement open source</strong> comme GitHub ou
              BitBucket. Cela permettra de <strong>modifier le site</strong>{" "}
              facilement (corrections, ajout de nouvelles fonctionnalit??s, mise
              ?? jour, etc.), de{" "}
              <strong>collaborer avec d???autres d??veloppeurs</strong> et
              d???adopter une approche d???<strong>int??gration continue</strong>.
            </p>

            <h4>Tests unitaires</h4>

            <p>
              Les tests unitaires permettent de <strong>tester le code</strong>{" "}
              afin de s???assurer qu???il fait correctement ce qu???on lui demande en
              toute situation. Surtout, les tests permettent de{" "}
              <strong>d??tecter d?????ventuels probl??mes ou bugs en amont</strong>,
              avant la mise en production, et{" "}
              <strong>alertent en cas d???introduction d???une r??gression</strong>{" "}
              lors d???un nouveau d??veloppement. Bien qu???il soit possible d???opter
              pour une <strong>approche TDD</strong> (Test Driven Development),
              le simple fait de disposer de <strong>tests automatis??s</strong>{" "}
              pour les <strong>fonctions critiques</strong> est d??j?? une
              excellente pratique.
            </p>

            <h4>H??bergement</h4>

            <Chip icon={hour}>Mont??e en comp??tences en cours</Chip>

            <p>
              H??berger une application web n??cessite le plus souvent de{" "}
              <strong>louer des serveurs</strong> aupr??s d???un prestataire
              sp??cialis??. Selon le type d???application le recours ?? un{" "}
              <strong>h??bergement dans le cloud</strong> pourra s???av??rer une
              solution efficace. En effet ce type d???h??bergement apporte un
              certain nombre d???avantages, dont notamment :
            </p>

            <ul>
              <li>
                Possibilit?? d???
                <strong>adapter rapidement</strong> ?? la hausse ou ?? la baisse{" "}
                <strong>le nombre de serveurs</strong> en fonction des besoins
              </li>
              <li>
                Configurations pr??tes ?? l???emploi, permettant une{" "}
                <strong>mise en production rapide</strong>
              </li>
              <li>
                Facturation en fonction de l???utilisation (pay as you go) pouvant
                entra??ner une <strong>r??duction des co??ts</strong>
              </li>
            </ul>
          </div>
        </Service>
      )}
    </div>
  );
};

export default Home;
