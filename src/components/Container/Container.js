import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleContacts = styled.h2`
  padding: 10px;
  text-transform: uppercase;
  font-size: 20px;
  color: #5c6368;
`;

const ContainerContacts = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const Container = ({ title, children }) => (
  <ContainerContacts>
    {title && <TitleContacts>{title}</TitleContacts>}
    {children}
  </ContainerContacts>
);

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
