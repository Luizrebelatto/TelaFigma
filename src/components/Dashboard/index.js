import React from 'react';

import {
    Wrapper, Text, Icon, DivTitle, BalanceDate, Details, Content,
    Texto, Data, DetailsDate, BalanceValue, Value
} from './styles'

import { BsPieChart } from "react-icons/bs"
import { BiShareAlt } from 'react-icons/bi'
import { RiFileDownloadLine } from 'react-icons/ri'
import { BsChevronDown } from "react-icons/bs"
import { IoRefreshOutline } from 'react-icons/io5'
import { BiCheckShield } from 'react-icons/bi'

export default function Dashboard() {
    return (
        <Wrapper>
            <DivTitle>
                <Text>Saldo Bancário</Text>
                <Icon>
                    <BsPieChart size={26} color='#172765' />
                </Icon>

                <Icon>
                    <RiFileDownloadLine size={26} color='#172765' />
                </Icon>

                <Icon>
                    <BiShareAlt size={26} color='#172765' />
                </Icon>
            </DivTitle>

            <BalanceDate>
                <Content>
                    <Details>
                        <Texto>Data do saldo</Texto>
                        <Data>07/12/21</Data>
                    </Details>
                    <BsChevronDown color='#172765' size={20} />
                </Content>
            </BalanceDate>

            <DetailsDate>Saldo Atualizado às 16:18</DetailsDate>
            <IoRefreshOutline color='#172765' size={20} />

            <BalanceValue>
                <Content>
                    <BiCheckShield color='#172765' size={20} />
                    <Details>
                        <Texto>Saldo disponível</Texto>
                        <Value>R$40.000,00</Value>
                    </Details>
                    <BsChevronDown color='#172765' size={20} />
                </Content>
            </BalanceValue>

        </Wrapper>
    );
}