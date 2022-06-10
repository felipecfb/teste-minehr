import React from "react";
import * as S from "./styles";

import filterIcon from '../../assets/filterIcon.svg';

export default function Header() {
    return (
        <S.Container>
            <S.TextContainer>
                <S.Title>
                    Dashboard
                </S.Title>
                <S.Description>
                    Desafio Técnico Frontend
                </S.Description>
            </S.TextContainer>
            <S.Filter>
                <S.FilterButton>
                    <S.FilterIcon src={filterIcon} />
                    Filtrar
                </S.FilterButton>
            </S.Filter>
        </S.Container>
    );
};