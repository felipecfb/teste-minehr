import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: var(--dark-purple);
    font-size: 28px;
`;

export const Description = styled.span`
    color: var(--gray-3);
    font-size: 14px;
`;

export const Filter = styled.div`
    display: flex;
`;

export const FilterButton = styled.button`
    padding: .5rem 1rem;
    border-radius: 10px;
    color: var(--gray);
    background: var(--dark-purple);
    border: none;
    font-weight: 600;
    font-size: 14px;
`;