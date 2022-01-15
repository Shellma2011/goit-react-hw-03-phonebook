import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  padding: 20px;
  text-transform: uppercase;
  font-size: 24px;
  color: #5c6368;
`;

const SectionPhonebook = styled.section`
  text-align: center;
  width: 400px;
  margin: 30px auto;

  border: 1px solid grey;
  border-radius: 2%;

  background: white;
  box-shadow: -1px 15px 30px -12px black;
  z-index: 9999;
`;

export default function Section({ title, children }) {
  return (
    <SectionPhonebook>
      {title && <Title>{title}</Title>}
      {children}
    </SectionPhonebook>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
