import {
  AlertStyle,
  TextLink,
  ButtonsAction,
  StyledCloseButton,
} from "./style";
import Lexend from "../../atoms/Lexend";
import IconError from "../../../assets/icons/error.svg";
import IconInfo from "../../../assets/icons/info.svg";
import IconSuccess from "../../../assets/icons/success.svg";
import IconWarning from "../../../assets/icons/warning.svg";
import IconClose from "../../../assets/icons/close.svg";

export default function Alert({
  title,
  subtitle,
  type,
  status,
  filledBackground,
  linkText,
  linkRedirect,
  textMainButton,
  textSecondaryButton,
  actionMainButton,
  actionSecondaryButton,
  hasIconClose,
}) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "error":
        return IconError;
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

  const getStatusColor = (status) => {
    switch (status) {
      case "error":
        return "#E54545";
      case "info":
        return "#0B63E5";
      case "success":
        return "#0F9918";
      case "warning":
        return "#FF8800";
      default:
        return "#838E9E";
    }
  };

  return (
    <AlertStyle statusColor={getStatusColor(status)}>
      <StyledCloseButton src={IconClose} alt="Ícone de fechar" />
      <img src={getStatusIcon(status)} alt="Ícone de erro" />
      <div>
        <Lexend text={title} size="20px" weight={700} color="#061C3D" />
        <TextLink>
          <Lexend text={subtitle} size="16px" weight={400} color="#838E9E" />
          {linkText && linkRedirect && (
            <Lexend
              text={linkText}
              size="16px"
              weight={600}
              color={getStatusColor(status)}
            />
          )}
        </TextLink>
        <ButtonsAction>
          <div>botao1</div>
          <div>botao2</div>
        </ButtonsAction>
      </div>
    </AlertStyle>
  );
}
