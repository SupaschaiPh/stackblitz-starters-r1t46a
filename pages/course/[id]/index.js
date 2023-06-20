import {
  Container,
  Grid,
  Paper,
  Typography,
  Alert,
  Button,
  Divider,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import NotificationImportantRoundedIcon from '@mui/icons-material/NotificationImportantRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';


export default function Course() {
  const router = useRouter();
  const courseId = router.query.id;
  return (
    <Layout>
      <Container sx={{ pt: '80px',pb:5}}>

        <Paper sx={{pb:2,mb:2}}>
          <Box>
            <Typography variant="h3" sx={{ p: 2}}>
              <SchoolRoundedIcon fontSize="inherit" />
              Course
            </Typography>
            <Divider sx={{mb:2}} />
          </Box>
        </Paper>
          
          <Grid container columns={2} spacing={2}>
            <Grid item xs={2} md={1}>
              <Paper>
                <Alert icon={false} severity="info">
                  <Typography variant="h2" sx={{ fontWeight: 900 }}>
                    <MenuBookRoundedIcon sx={{ fontSize: '90px' }} />
                    Lesson
                  </Typography>
                  <Typography variant="h6" marginTop={2} marginBottom={1}>
                    10 lessons
                  </Typography>
                  <Button href={"./"+courseId+"/lesson"} color="info" variant="contained">
                    Enter
                  </Button>
                </Alert>
              </Paper>
            </Grid>
            <Grid item xs={2} md={1}>
              <Paper>
                <Alert icon={false} severity="success">
                  <Typography variant="h2" sx={{ fontWeight: 900 }}>
                    <LaptopRoundedIcon sx={{ fontSize: '90px' }} />
                    Problem
                  </Typography>
                  <Typography variant="h6" marginTop={2} marginBottom={1}>
                    10 Problem
                  </Typography>
                  <Button href={"./"+courseId+"/problem"} color="success" variant="contained">
                    Enter
                  </Button>
                </Alert>
              </Paper>
            </Grid>
            <Grid item xs={2} md={1}>
              <Paper>
                <Alert icon={false} severity="error">
                  <Typography variant="h2" sx={{ fontWeight: 900 }}>
                    <ListAltRoundedIcon sx={{ fontSize: '90px' }} />
                    Quiz
                  </Typography>
                  <Typography variant="h6" marginTop={2} marginBottom={1}>
                    10 quizs
                  </Typography>
                  <Button href={"./"+courseId+"/quiz"}  color="error" variant="contained">
                    Enter
                  </Button>
                </Alert>
              </Paper>
            </Grid>
            <Grid item xs={2} md={1}>
              <Paper>
                <Alert icon={false} severity="warning">
                  <Typography variant="h2" sx={{ fontWeight: 900 }}>
                    <GroupsRoundedIcon sx={{ fontSize: '90px' }} />
                    User
                  </Typography>
                  <Typography variant="h6" marginTop={2} marginBottom={1}>
                    10 user
                  </Typography>
                  <Button href={"./"+courseId+"/user"} color="warning" variant="contained">
                    Enter
                  </Button>
                </Alert>
              </Paper>
            </Grid>
          </Grid>

        <Grid container spacing={2} columns={3} marginTop={3}>
          <Grid item md={2} xs={3}  >
            <Paper sx={{padding:2}}>
            <Typography variant="h5" >
                <EmojiEventsRoundedIcon/> Top Score
              </Typography>
              <Table size="small" sx={{mt:2}} >
                <TableHead sx={{bgcolor:"#eee"}} >
                  <TableRow>
                    <TableCell>UID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Lastname</TableCell>
                    <TableCell>Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                      <TableCell>66001</TableCell>
                      <TableCell>Admin</TableCell>
                      <TableCell>101</TableCell>
                      <TableCell>100</TableCell>

                  </TableRow>
                  <TableRow>
                      <TableCell>66001</TableCell>
                      <TableCell>Admin</TableCell>
                      <TableCell>101</TableCell>
                      <TableCell>100</TableCell>

                  </TableRow><TableRow>
                      <TableCell>66001</TableCell>
                      <TableCell>Admin</TableCell>
                      <TableCell>101</TableCell>
                      <TableCell>100</TableCell>

                  </TableRow><TableRow>
                      <TableCell>66001</TableCell>
                      <TableCell>Admin</TableCell>
                      <TableCell>101</TableCell>
                      <TableCell>100</TableCell>

                  </TableRow><TableRow>
                      <TableCell>66001</TableCell>
                      <TableCell>Admin</TableCell>
                      <TableCell>101</TableCell>
                      <TableCell>100</TableCell>

                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item md={1} xs={3} >
            <Paper sx={{padding:2,height:"100%"}}>
              <Typography variant="h5" >
                <NotificationImportantRoundedIcon/> ประกาศ
              </Typography>
              <Divider sx={{mb:2,mt:2}} />
              <Alert severity="warning" >ปั้นงาน</Alert>
            </Paper>
          </Grid>
        </Grid>

      </Container>
    </Layout>
  );
}
