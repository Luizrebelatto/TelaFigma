import React from 'react';
import { Wrapper, Circle, Icon } from './styles';

import { BsTag, BsPieChart, BsGraphUp, BsCreditCard, BsQuestionCircle } from "react-icons/bs"
import { IoCashOutline, IoSettingsOutline } from 'react-icons/io5'
import { FaHandshake, FaReceipt } from 'react-icons/fa'

export default function Nav() {
    return (
        <Wrapper>
            <Circle>
                <BsTag size={26} color='#172765' />
            </Circle>

            <Icon>
                <BsPieChart size={26} color='#172765' />
            </Icon>

            <Icon>
                <BsGraphUp size={26} color='#172765' />
            </Icon>

            <Icon>
                <IoCashOutline size={26} color='#172765' />
            </Icon>

            <Icon>
                <FaHandshake size={26} color='#172765' />
            </Icon>

            <Icon>
                <BsTag size={26} color='#172765' />
            </Icon>

            <Icon>
                <BsCreditCard size={26} color='#172765' />
            </Icon>

            <Icon>
                <FaReceipt size={26} color='#172765' />
            </Icon>

            <Icon>
                <IoSettingsOutline size={26} color='#172765' />
            </Icon>

            <Icon>
                <BsQuestionCircle size={26} color='#172765' />
            </Icon>

        </Wrapper>
    );
}