import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 0;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Graph = styled.div`
  width: 50%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  &:first-child {
    margin-right: .5rem;
  }

  &:last-child {
    margin-left: .5rem;
  }

  @media screen and (max-width: 1024px) {
    width: 100% !important;
    
    &:first-child {
    margin-bottom: .5rem;
    margin-right: 0 !important;
  }

  &:last-child {
    margin-top: .5rem;
    margin-left: 0 !important;
  }
  }

`;

export const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  color: var(--dark-purple);
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

export const Icon = styled.img`
  z-index: 1;
  margin-left: .75rem;
  cursor: pointer;
`;
