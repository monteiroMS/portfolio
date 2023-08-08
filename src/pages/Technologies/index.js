import techs from "../../helpers/techs";
import Technology from "./Technology";
import styles from "./styles.module.css";

function Technologies() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Tecnologias</h1>
      <span className={styles.contentContainer}>
        <span>
          <h2>Linguagens de programação</h2>

          <span className={styles.techContainer}>
            {techs.programmingLanguages.map((tech) => (
              <Technology key={tech.name} tech={tech} />
            ))}
          </span>
        </span>

        <span>
          <h2>Front-end</h2>

          <span className={styles.content}>
            <span className={styles.techContainer}>
              {techs.frontend.map((tech) => (
                <Technology key={tech.name} tech={tech} />
              ))}
            </span>
          </span>
        </span>

        <span>
          <h2>Back-end</h2>

          <span className={styles.content}>
            <span className={styles.techContainer}>
              {techs.backend.map((tech) => (
                <Technology key={tech.name} tech={tech} />
              ))}
            </span>
          </span>
        </span>
      </span>
    </main>
  );
}

export default Technologies;
