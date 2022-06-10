import React from "react";
import * as S from "./styles";

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
                    Filtrar
                </S.FilterButton>
            </S.Filter>
        </S.Container>
    );
};