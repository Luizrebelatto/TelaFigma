import React from 'react'

import {
    Wrapper, Imagem, Container, Divider, Count, CountTitle,
    Details, Detail, Balance, Card, Div, Value, Icons, Chat,
    Calendar, Notification, Circle, Search, Input
} from './styles'
import img1 from '../../images/logos.svg'
import { BsChevronDown, BsEyeSlash, BsChatSquareDots, BsCalendar } from "react-icons/bs"
import { MdFilterNone, MdNotificationsNone } from "react-icons/md"


export default function Header() {
    return (
        <Wrapper>
            <Container>
                <Card>
                    <Imagem src={img1} alt="logo" />
                    <Divider></Divider>
                    <Count>
                        <CountTitle>Conta Corrente</CountTitle>
                        <BsChevronDown color='#172765' size={15} />

                        <div>
                            <Details>Ag. 00005-1</Details>
                            <Detail>C.C 0000000000000000020-1</Detail>
                            <MdFilterNone color='#172765' size={15} />
                        </div>
                    </Count>

                    <Balance>
                        <CountTitle>Saldo</CountTitle>
                        <BsEyeSlash color='#172765' size={15} />
                        <div>
                            <Value>R$40.000,00</Value>
                        </div>
                    </Balance>
                </Card>

                <Div>

                </Div>

                <Icons>
                    <Search>
                        <Input type="search" placeholder="Pesquisar" />
                    </Search>
                    <Chat>
                        <BsChatSquareDots color='#172765' size={20} />
                    </Chat>

                    <Calendar>
                        <BsCalendar color='#172765' size={20} />
                    </Calendar>

                    <Notification>
                        <MdNotificationsNone color='#172765' size={20} />
                    </Notification>

                    <Circle></Circle>
                </Icons>

            </Container>
        </Wrapper>
    )
}