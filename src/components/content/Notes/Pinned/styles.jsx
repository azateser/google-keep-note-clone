import styled from "styled-components";

export const PinnedWrapper = styled.div`
  margin-top: 24px;
  padding-left: 34px;

  @media only screen and (max-width: 750px) {
    padding-left: 0;
  }
`;

export const PinnedTitle = styled.div`
  padding-left: 24px;

  color: #5f6368;
  letter-spacing: 0.07272727em;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1rem;
  text-transform: uppercase;
  margin-bottom: 8px;
  @media only screen and (max-width: 750px) {
    padding-left: 0;
  }
`;

export const Container = styled.div``;
