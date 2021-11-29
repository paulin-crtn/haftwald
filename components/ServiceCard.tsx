/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- NEXT JS -------------------------------- */
import Image from "next/image";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Service.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

export const ServiceCard = ({
  title,
  picto,
  text,
  setShowService,
}: {
  title: string;
  picto: StaticImageData;
  text: string;
  setShowService: (arg: boolean) => void;
}) => {
  return (
    <div className={styles.serviceContainer}>
      <figure>
        <Image
          src={picto}
          alt={"pictogramme " + title}
          placeholder="blur" // Optional blur-up while loading
        />
      </figure>
      <h4>{title}</h4>
      <p>{text}</p>
      <button onClick={() => setShowService(true)}>Découvrir</button>
    </div>
  );
};
