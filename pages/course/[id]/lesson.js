import {
  Container,
  Grid,
  Paper,
  Typography,
  Alert,
  Button,
  Divider,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardHeader,
  CardContent,
  Stack,
  CardActions,
  Switch,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
export default function Course() {
  const router = useRouter();
  const courseId = router.query.id;
  return (
    <Layout>
      <Container sx={{ pt: '80px',pb:5}}>
        <Box>
            <Typography variant="h3" sx={{ p: 2}}>
              <SchoolRoundedIcon fontSize="inherit" />
              Lesson
            </Typography>
            <Divider sx={{mb:2}} />
          </Box>
        <Grid container columns={3} spacing={2} >
          <Grid item xs={3} md={1}>
            <Paper sx={{position:'sticky',top:80}}>
              <Box padding>
                <Typography variant="h5" >
                  <BookmarkRoundedIcon/> Guide
                </Typography>
                <List >
                  <ListItemButton href="#lesson1">
                    <ListItemIcon >
                      <FiberManualRecordRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText><Typography> บทที่1</Typography></ListItemText>
                  </ListItemButton>
                  <ListItemButton href="#lesson2">
                    <ListItemIcon >
                      <FiberManualRecordRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText  ><Typography>บทที่1</Typography></ListItemText>
                  </ListItemButton>
                </List>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={3} md={2}>
            <Stack spacing={2}>
              <Card id="lesson1" >
                <CardHeader sx={{backgroundColor:"#1a237e",color:"#fff"}} title="บทที่1" />
                <Divider/>
                <CardContent>
                <Typography> วิกิพีเดียภาษาไทย คือรุ่นภาษาไทยของวิกิพีเดีย เว็บไซต์สารานุกรมออนไลน์เนื้อหาเสรีและเปิดให้ทุกคนสามารถแก้ไขได้ เว็บไซต์ดำเนินการโดยมูลนิธิวิกิมีเดียและเปิดใช้งานเมื่อวันที่ 25 ธันวาคม 2546 ในเดือนมิถุนายน 2566 วิกิพีเดียภาษาไทยมี 156,852 บทความ เป็นวิกิพีเดียขนาดใหญ่สุดอันดับที่ 56[1]</Typography>
                <iframe  src="https://www.youtube.com/embed/KFKMEiuCY6M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </CardContent>
                <CardActions>
                  <Button fullWidth color="warning" variant="contained" ><EditRoundedIcon/></Button>
                  <Button fullWidth color="error" variant="contained" ><DeleteForeverRoundedIcon/></Button>
                  
                </CardActions>

              </Card>

              <Card id="lesson2" >
                <CardHeader sx={{backgroundColor:"#1a237e",color:"#fff"}} title="บทที่2" />
                <Divider/>
                <CardContent>
                <Typography> วิกิพีเดียภาษาไทย คือรุ่นภาษาไทยของวิกิพีเดีย เว็บไซต์สารานุกรมออนไลน์เนื้อหาเสรีและเปิดให้ทุกคนสามารถแก้ไขได้ เว็บไซต์ดำเนินการโดยมูลนิธิวิกิมีเดียและเปิดใช้งานเมื่อวันที่ 25 ธันวาคม 2546 ในเดือนมิถุนายน 2566 วิกิพีเดียภาษาไทยมี 156,852 บทความ เป็นวิกิพีเดียขนาดใหญ่สุดอันดับที่ 56[1]</Typography> 
                <iframe  src="https://www.youtube.com/embed/KFKMEiuCY6M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </CardContent>

              </Card>

              <Button fullWidth color="info" variant="contained" ><AddCircleOutlineRoundedIcon/></Button>
              
            </Stack>
          </Grid>
        </Grid>

      </Container>
    </Layout>
  );
}
