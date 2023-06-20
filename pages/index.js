import { Box, Stack, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import Layout from '../components/Layout';
import { CourseEditModal } from '../components/FormModal';

export default function Home() {
  return (
    <Layout>
      <Stack
        sx={{
          display:{xs:'block',md:'flex'},
          height: '100%',
          padding: {md:3},
          paddingTop:{xs:"100px",md:0},
          position: 'relative',
          top: 0,
          flexDirection: { md: 'row' },
          alignItems : {md:'center'}
        }}
        justifyContent="center"
      >
        <Typography variant="h1" sx={{ width: { md: 1 / 2 }, height: 'fit' }}>
          Learning Online System
        </Typography>
        <Box sx={{width: { md: 1 / 2 },fontSize:100 ,p:10}}  >
          <img src="https://media.discordapp.net/attachments/1118014561778405488/1120025507312959508/low-code-development-concept-illustration_114360-7434.png"/>
        </Box>
      </Stack>
    </Layout>
  );
}
