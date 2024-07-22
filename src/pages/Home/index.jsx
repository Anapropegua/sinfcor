import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Presentation from "../../components/Presentation";
import WaveComponent from "../../components/Wave";
import NavBarComponent from "../../components/Navbar";
import {SinficorLogo} from "../../components/Logos";
import TimerComponent from "../../components/Timer";

const HomePage = () => {
    return (
        <Layout>
            <Container height="70vh">
                <Presentation/>
                <WaveComponent>
                    <NavBarComponent/>
                    <SinficorLogo/>
                </WaveComponent>
            </Container>
            <Container padding="1rem">
                <TimerComponent/>
            </Container>
            <Container bg="blue">
                <h1>Home</h1>
            </Container>
        </Layout>
    );
}

export default HomePage;