import React from 'react';
import styled from 'styled-components';

export default function Title() {
    return(
        <SiteTitle>{"< manage-buddy >"}</SiteTitle>
    )
}

const SiteTitle = styled.h1`
  font-weight: lighter;
  font-size: 2em;
  color: #7A9E9F;
`;