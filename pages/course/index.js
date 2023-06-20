import {
  Box,
  Container,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  ThemeProvider,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  Button,
  CardMedia,
  CardActions,
} from '@mui/material';
import Navbar from '../../components/Navbar';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { Theme1 } from '../../components/Theme';
import React, { createContext, useState } from 'react';
import Layout from '../../components/Layout';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { CourseEditModal } from '../../components/FormModal';

export const ModalContext = createContext({})

const index1Content = (
  <React.Fragment>
    <Card sx={{ width: '100%' }}>
      <CardMedia
        component="img"
        sx={{ height: '200px' }}
        image="https://media.discordapp.net/attachments/1118014561778405488/1120025507312959508/low-code-development-concept-illustration_114360-7434.png"
      />
      <CardHeader title="Beta1" />
      <CardContent
        sx={{
          height: '70px',
          paddingTop: 0,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        <p className="text-ellipsis	">
          ระ-ทะ-ทู-อี่ พ่อครัวตัวจี๊ด หัวใจคับโลก (อังกฤษ: Ratatouille)
          เป็นภาพยนตร์คอมพิวเตอร์แอนิเมชันอเมริกันแนวตลกดรามา[3] ฉายเมื่อปี ค.ศ.
          2007 สร้างโดย พิกซาร์ และจัดจำหน่ายโดย วอลต์ดิสนีย์พิกเชอส์
        </p>
      </CardContent>
      <CardActions>
        <Button href="/course/1" fullWidth variant="contained">
          Enroll
        </Button>
        <Button  sx={{ml:1}} color="warning" variant="contained">
          <EditRoundedIcon/>
        </Button>
        <Button  color="error" variant="contained">
          <DeleteForeverRoundedIcon/>
        </Button>
      </CardActions>
    </Card>
  </React.Fragment>
);

export default function Course() {
  const [courseTabIndex, setCourseTabIndex] = useState(0);
  const [modal1Open,setModal1Open] = useState(false)
  return (
    <Layout>
        <Container sx={{ pt: '80px' }}>
          <Paper>
            <Typography variant="h3" sx={{ p: 2 }}>
              <SchoolRoundedIcon fontSize="inherit" />
              Course
            </Typography>
            <Tabs
              value={courseTabIndex}
              onChange={(_, val) => {
                setCourseTabIndex(val);
              }}
              indicatorColor="primary"
            >
              <Tab label="AllCourse" value={0} />
              <Tab label="MyCourse" value={1} />
            </Tabs>
          </Paper>
          <div className="grid mt-5 pb-10 grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
            {courseTabIndex === 0 ? index1Content : ''}
            {courseTabIndex === 0 ? <Button onClick={()=>{setModal1Open(true);console.log(modal1Open) }} size="large" variant="contained">
              +
            </Button> : ""}
          </div>
        </Container>
        <ModalContext.Provider value={{open:modal1Open,setOpen:setModal1Open}} >
          <CourseEditModal  />
        </ModalContext.Provider>
      </Layout>
    
  );
}
