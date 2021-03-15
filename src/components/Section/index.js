import React from 'react';

import { Wrapper, Container, Circle, CircleDetails, Text, Description, Value, Content } from './styles'
import { BsPlusCircle, BsEyeSlash } from "react-icons/bs"

export default function Section() {
    return (
        <Wrapper>
            <Container>


                <Circle>
                    <BsPlusCircle size={26} color='#172765' />
                </Circle>

                <Content>
                    <CircleDetails color={'linear-gradient(89.96deg, #622EE5 0.06%, #172765 99.94%)'}>
                        <Text>P</Text>
                    </CircleDetails>

                    <div>
                        <div>
                            <Description>Principal</Description>
                            <BsEyeSlash size={12} color='#172765' />
                        </div>
                        <Value>R$10.000,00</Value>
                    </div>
                </Content>

                <Content>
                    <CircleDetails color={'linear-gradient(135deg, #778899 0%, #172765 100%)'}>
                        <Text>A</Text>
                    </CircleDetails>

                    <div>
                        <div>
                            <Description>Aluguel</Description>
                            <BsEyeSlash size={12} color='#172765' />
                        </div>
                        <Value>R$1.600,00</Value>
                    </div>
                </Content>

                <Content>
                    <CircleDetails color={'linear-gradient(135deg, #FF354E 0%, #172765 100%)'}>
                        <Text>A</Text>
                    </CircleDetails>

                    <div>
                        <div>
                            <Description>Alimentação</Description>
                            <BsEyeSlash size={12} color='#172765' />
                        </div>
                        <Value>R$450,00</Value>
                    </div>
                </Content>








            </Container>
        </Wrapper>
    );
}