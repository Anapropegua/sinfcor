import {TimerContainer, TimerItem, TimerItemTitle, TimerItemValue} from './styles'
import Cronometro from "../Cronometro";

const TimerComponent = () => {

    const date = new Date('2024-08-15T07:00:00');

    return (
        <TimerContainer>
            <TimerItem>
                <TimerItemTitle>Tempo</TimerItemTitle>
                <TimerItemValue>
                    <Cronometro targetDate={date}/>
                </TimerItemValue>
            </TimerItem>
            <TimerItem>
                <TimerItemTitle>Local</TimerItemTitle>
                <TimerItemValue>
                    IFPI - Campus Corrente
                </TimerItemValue>
            </TimerItem>
            <TimerItem>
                <TimerItemTitle>Datas</TimerItemTitle>
                <TimerItemValue>
                    15 a 17 de Agosto
                </TimerItemValue>
            </TimerItem>
        </TimerContainer>
    );
}

export default TimerComponent;