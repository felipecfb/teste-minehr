import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
`;

export const Graph = styled.div`
  width: 50%;
  background: #fff;
  margin: 0 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;
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
