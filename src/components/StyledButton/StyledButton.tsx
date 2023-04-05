import { NavLink } from 'react-router-dom';

import './StyledButton.scss';

interface IAnchorProps {
  type: 'anchor';
  text: string;
  to: string;
  isButtonStyle?: boolean;
  buttonType?: never;
  onClick?: never;
  isAnchorStyle?: never;
}

interface IButtonProps {
  type: 'button';
  buttonType: 'button' | 'submit' | 'reset';
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isAnchorStyle?: boolean;
  to?: never;
  isButtonStyle?: never;
}

type IStyledButtonProps = IAnchorProps | IButtonProps;

const StyledButton = ({
  type,
  buttonType,
  isAnchorStyle,
  isButtonStyle,
  text,
  to,
  onClick,
}: IStyledButtonProps) => {
  return type === 'button' ? (
    <button type={buttonType} className={isAnchorStyle ? 'anchor' : 'button'} onClick={onClick}>
      {text}
    </button>
  ) : (
    <NavLink to={to} className={isButtonStyle ? 'button' : 'anchor'}>
      {text}
    </NavLink>
  );
};

export default StyledButton;

// TODO: раскидать интерфейсы и props вернуть в заголовок!
