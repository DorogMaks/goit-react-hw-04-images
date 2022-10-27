import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';
import { ButtonContainer, ButtonStyled } from './Button.styled';

export const Button = ({ onLoadMoreBtn, status }) => (
  <ButtonContainer>
    {status === 'pending' ? (
      <Loader />
    ) : (
      <ButtonStyled onClick={onLoadMoreBtn}>Load more</ButtonStyled>
    )}
  </ButtonContainer>
);

Button.propTypes = {
  onLoadMoreBtn: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};
