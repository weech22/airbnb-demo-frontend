import React from 'react';
import styled from 'styled-components';
import SocialLink from './SocialLink';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';

const SocialBlock = styled.div`
  display: flex;
`;

const Social = () => (
  <SocialBlock>
    <SocialLink img={facebook} alt="" />
    <SocialLink img={twitter} alt="" />
    <SocialLink img={instagram} alt="" />
  </SocialBlock>
);

export default Social;
