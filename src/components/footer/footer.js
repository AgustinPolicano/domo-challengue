import imgHome from "../../assets/imgs/img-body.png";
import huellaIcon from "../../assets/imgs/logo-huella.png";
import telofonoIcon from "../../assets/imgs/icon-telofono.png";
import "./footer.css";
import { ReactComponent as Icon } from "../../assets/imgs/arrow_outward_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const mailTo = () => {
    window.location.href = "policanoagus@gmail.com";
  };

  return (
    <section className="footer-container footer-content">
      <div>
        <h4 className="text-title-footer">Contacto</h4>
        <div className="footer-contact">
          <a
            href="https://www.linkedin.com/in/agustin-policano/"
            target="_blank"
          >
            <FontAwesomeIcon
              className="icon-brand"
              color="white"
              icon={faLinkedin}
            />
          </a>
          <a href="mailto:policanoagus@gmail.com">
            <FontAwesomeIcon
              className="icon-brand"
              color="white"
              icon={faGoogle}
            />
          </a>
          <a
            href="https://github.com/AgustinPolicano?tab=repositories"
            target="_blank"
          >
            <FontAwesomeIcon
              className="icon-brand"
              color="white"
              icon={faGithub}
            />
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-title-footer">Sobre el proyecto</h4>
        <p className="subtitle-text-footer">
          Para realizar este maquetado use React 18.3.1. Use principalmente
          flexbox para alinear los contenedores. Photoshop para obtener las
          imagenes de la imagen original cortando partes de la misma. Y un poco
          de Javascript para hacer la navbar en celular.
        </p>
      </div>
    </section>
  );
}

export default Footer;
