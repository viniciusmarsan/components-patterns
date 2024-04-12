import { AlertStyle } from "./style";
import Lexend from "../../atoms/Lexend";
import IconAlert from "../../../assets/icons/alert.svg";
import IconInfo from "../../../assets/icons/info.svg";
import IconSuccess from "../../../assets/icons/success.svg";
import IconWarning from "../../../assets/icons/warning.svg";

export default function Alert({
  title,
  subtitle,
  type,
  status,
  filledBackground,
}) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "alert":
        return IconAlert;
      case "info":
        return IconInfo;
      case "success":
        return IconSuccess;
      case "warning":
        return IconWarning;
      default:
        return IconInfo;
    }
  };

  return (
    <AlertStyle status={status}>
      <img src={getStatusIcon(status)} alt="Ícone de alerta" />
      <div>
        <Lexend text={title} size="24px" weight={700} color="#061C3D" />
        <Lexend text={subtitle} size="20px" weight={500} color="#838E9E" />
      </div>
    </AlertStyle>
  );
}
