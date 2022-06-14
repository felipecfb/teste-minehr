import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: var(--dark-purple);
    font-size: 28px;
    margin-bottom: .5rem;
`;

export const Description = styled.span`
    color: var(--gray-3);
    font-size: 14px;
`;

export const Filter = styled.div`
    display: flex;
`;

export const FilterIcon = styled.img`
    max-width: 12px;
    margin-right: .5rem;
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