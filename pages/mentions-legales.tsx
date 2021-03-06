/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import type { NextPage } from "next";
import Head from "next/head";

/* ---------------------------------- REACT --------------------------------- */
import { useState } from "react";

/* ------------------------------- COMPONENTS ------------------------------- */
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ModalContact } from "../components/ModalContact";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Legal.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
const MentionsLegales: NextPage = () => {
  /* -------------------------------------------------------------------------- */
  /*                                 REACT STATE                                */
  /* -------------------------------------------------------------------------- */
  const [showModalContact, setShowModalContact] = useState<boolean>(false);
  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */
  return (
    <div>
      {/* ------------------------------------------------------------------------- */
      /*                                  HTML HEAD                                 */
      /* -------------------------------------------------------------------------- */}
      <Head>
        <title>Mentions l??gales | Haftwald</title>
        <meta
          name="description"
          content="Prenez connaissance des mentions l??gales du site internet de Haftwald, d??veloppeur web freelance React, NextJS, Angular et Laravel."
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
        <div className={styles.pageTitle}>
          <h1>Mentions l??gales</h1>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.layout}>
            <nav>
              <ol>
                <li>
                  <a href="#editor">??diteur</a>
                </li>
                <li>
                  <a href="#host">H??bergement</a>
                </li>
                <li>
                  <a href="#cgu">Conditions d???utilisation</a>
                </li>
                <li>
                  <a href="#description">Description des services fournis</a>
                </li>
                <li>
                  <a href="#property">
                    Propri??t?? intellectuelle et contrefa??on
                  </a>
                </li>
                <li>
                  <a href="#responsability">
                    Responsabilit?? et limitation de responsabilit??
                  </a>
                </li>
                <li>
                  <a href="#law">Lois applicables</a>
                </li>
                <li>
                  <a href="#credit">Cr??dits</a>
                </li>
              </ol>
            </nav>
            <section>
              <p>
                Conform??ment aux dispositions des articles 6-III et 19 de la Loi
                n?? 2004-575 du 21 juin 2004 pour la Confiance dans l?????conomie
                num??rique, dite L.C.E.N., nous portons ?? la connaissance des
                utilisateurs et visiteurs du site haftwald.com les informations
                suivantes.
              </p>

              <h2 id="editor">1. ??diteur</h2>
              <p>
                Le site haftwald.com est la propri??t?? exclusive de Paulin
                CARATINI, agissant ??galement sous le nom commercial ?? Haftwald
                ??, qui l?????dite.
              </p>
              <p>
                Haftwald est une micro-entreprise immatricul??e sous le num??ro
                SIRET 819 156 910 00021.
              </p>
              <button onClick={() => setShowModalContact(true)}>
                Contacter l?????diteur
              </button>

              <h2 id="host">2. H??bergement</h2>
              <p>
                Le site haftwald.com est h??berg?? par Vercel dont le si??ge
                sociale est situ?? :
              </p>
              <p>
                1046 Kearny St.
                <br />
                San Francisco (HQ)
                <br /> CA United States
              </p>
              <button>
                <a
                  href="https://vercel.com/contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contacter l???h??bergeur
                </a>
              </button>

              <h2 id="cgu">3. Conditions d???utilisation</h2>
              <p>
                L???utilisation du pr??sent site implique l???acceptation pleine et
                enti??re des conditions g??n??rales d???utilisation d??crites
                ci-apr??s. Ces conditions d???utilisation sont susceptibles d?????tre
                modifi??es ou compl??t??es ?? tout moment.
              </p>

              <h2 id="description">4. Description des services fournis</h2>
              <p>
                Le site haftwald.com a pour objet de fournir des informations
                concernant l???ensemble des activit??s de la soci??t??.{" "}
              </p>
              <p>
                Le propri??taire du site s???efforce de fournir des informations
                aussi pr??cises que possible. Toutefois, il ne pourra ??tre tenu
                responsable des omissions, des inexactitudes et des carences
                dans la mise ?? jour, qu???elles soient de son fait ou du fait des
                tiers partenaires qui lui fournissent ces informations.{" "}
              </p>
              <p>
                Toutes les informations propos??es sur le site haftwald.com sont
                donn??es ?? titre indicatif, sont non exhaustives, et sont
                susceptibles d?????voluer. Elles sont donn??es sous r??serve de
                modifications ayant ??t?? apport??es depuis leur mise en ligne.
              </p>

              <h2 id="property">5. Propri??t?? intellectuelle et contrefa??on</h2>
              <p>
                L?????diteur du site haftwald.com est propri??taire des droits de
                propri??t?? intellectuelle ou d??tient les droits d???usage sur tous
                les ??l??ments accessibles sur le site, notamment les textes,
                images, graphismes, logo, ic??nes, sons, etc.{" "}
              </p>
              <p>
                Toute reproduction, repr??sentation, modification, publication,
                adaptation totale ou partielle des ??l??ments du site, quel que
                soit le moyen ou le proc??d?? utilis??, est interdite, sauf
                autorisation ??crite pr??alable.{" "}
              </p>
              <p>
                Toute exploitation non autoris??e du site ou de l???un quelconque
                de ces ??l??ments qu???il contient sera consid??r??e comme
                constitutive d???une contrefa??on et poursuivie conform??ment aux
                dispositions des articles L.335-2 et suivants du Code de
                Propri??t?? Intellectuelle.
              </p>

              <h2 id="responsability">
                6. Responsabilit?? et limitation de responsabilit??
              </h2>
              <p>
                En aucun cas l?????diteur n???entend repr??senter ou garantir le fait
                que le site haftwald.com est fonctionnel, est sans erreur ou
                qu???il sera possible d???y acc??der sans interruption ou qu???aucun
                virus ou autre ??l??ment contaminant ou destructeur ne sera
                transmis ou qu???aucun dommage ne sera occasionn?? ?? votre syst??me
                informatique. Il est de votre responsabilit?? de prendre les
                pr??cautions requises ou de vous renseigner aupr??s d???un
                consultant en informatique.
              </p>
              <p>
                Le site haftwald.com peut contenir des liens vers d???autres
                sites, qui sont hors du contr??le de l?????diteur. Nous n???avons
                aucun contr??le sur la nature, le contenu et la disponibilit?? de
                ces sites. L???ajout de ces liens n???implique pas n??cessairement
                une recommandation ni une approbation des avis qui y sont
                exprim??s.
              </p>
              <p>
                Le propri??taire du site autorise les liens hypertextes vers
                l???une des pages de ce site, ?? condition que ceux-ci ouvrent une
                nouvelle fen??tre et soient pr??sent??s de mani??re non ??quivoque
                afin d?????viter tout risque de confusion entre le site citant et
                le propri??taire du site ainsi que toute pr??sentation
                tendancieuse, ou contraire aux lois en vigueur. Le propri??taire
                du site se r??serve le droit de demander la suppression d???un lien
                s???il estime que le site source ne respecte pas les r??gles ainsi
                d??finies.
              </p>
              <p>
                Il vous est strictement interdit d???introduire dans le site
                haftwald.com ou ?? partir de celui-ci, de fa??on volontaire ou
                autrement, des informations ou des ??l??ments qui pourraient nuire
                au fonctionnement de ce site internet ou ?? ses utilisateurs.
              </p>

              <h2 id="law">7. Lois applicables</h2>
              <p>
                Les termes et conditions d???acc??s et d???utilisation de ce site
                Internet sont r??gis par les lois fran??aises. Vous acceptez
                d?????tre li??s par ces lois et de vous en remettre ?? la comp??tence
                des tribunaux fran??ais en ce qui a trait ?? l???interpr??tation ou ??
                l???application des termes et conditions d???utilisation du pr??sent
                site internet.
              </p>

              <h2 id="credit">8. Cr??dits</h2>
              <p>
                <a
                  href="https://www.flaticon.com/fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Flaticon
                </a>
              </p>
            </section>
          </div>
        </div>
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
        <div className={styles.modalContainer}>
          <ModalContact setShowModalContact={setShowModalContact} />
        </div>
      )}
    </div>
  );
};

export default MentionsLegales;
