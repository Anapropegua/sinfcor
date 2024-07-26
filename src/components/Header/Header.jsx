import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Wave from '../../assets/wave.png';

const Header = () => {
    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundImage: `url(${Wave})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '25% 80%',
                justifyContent: 'center',
            }}>
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Container maxWidth="md" sx={{ margin: 0 }}>
                        <Typography variant="h2" component="h1" gutterBottom>
                            Simpósio de Informática de Corrente
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>
                            O SINFCOR é um evento organizado pelo Instituto Federal do Piauí - Campus Corrente, que tem como objetivo principal promover a integração entre estudantes, professores e profissionais da área de informática.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                            <Button variant="contained" color="primary">Cadastro</Button>
                            <Button variant="outlined" color="primary">Saiba mais</Button>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
