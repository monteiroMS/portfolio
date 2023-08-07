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
            <span>
              <p>Frameworks</p>

              <span className={styles.techContainer}>
                {techs.frameworks.front.map((tech) => (
                  <Technology key={tech.name} tech={tech} />
                ))}
              </span>
            </span>

            <span>
              <p>Testes</p>

              <span className={styles.techContainer}>
                {techs.tests.front.map((tech) => (
                  <Technology key={tech.name} tech={tech} />
                ))}
              </span>
            </span>
          </span>
        </span>

        <span>
          <h2>Back-end</h2>

          <span className={styles.content}>
            <span>
              <p>Frameworks</p>

              <span className={styles.techContainer}>
                {techs.frameworks.back.map((tech) => (
                  <Technology key={tech.name} tech={tech} />
                ))}
              </span>
            </span>

            <span>
              <p>Testes</p>

              <span className={styles.techContainer}>
                {techs.tests.back.map((tech) => (
                  <Technology key={tech.name} tech={tech} />
                ))}
              </span>
            </span>
          </span>
        </span>
      </span>
    </main>
  );
}

export default Technologies;
