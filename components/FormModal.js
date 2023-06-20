import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Stack,
  TextField,
  Typography,
  Switch,
  FormGroup,
  Box,
  Button,
  DialogActions,

} from '@mui/material';
import dynamic from 'next/dynamic';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import katex from 'katex';
import 'katex/dist/katex.min.css';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../pages/course';
const editorOptions = {
  videoFileInput: false,
  tabDisable: false,
  katex: katex,
  font: [
    'Noto Sans Thai Looped','Noto Sans Thai','Sarabun',
    'Arial', 'Comic Sans MS', 'Courier New', 'Impact',
    'Georgia','tahoma', 'Trebuchet MS', 'Verdana'
  ] ,
  buttonList: [
    [
      'undo',
      'redo',
      'font',
      'fontSize',
      'formatBlock',
      'paragraphStyle',
      'blockquote',
      'bold',
      'underline',
      'italic',
      'strike',
      'subscript',
      'superscript',
      'fontColor',
      'hiliteColor',
      'textStyle',
      'removeFormat',
    ],
    [
      'outdent',
      'indent',
      'align',
      'horizontalRule',
      'list',
      'lineHeight',
      'table',
    ],
    [
      'link',
      'image',
      'video',
      'audio',
      'math',
      'fullScreen',
      'showBlocks',
      'codeView',
      'preview',
      'print',
    ],
  ],
};

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
});

/*
<Dialog sx={{widows:{md:2/3}}} open={true}>
      <DialogContent>
        <SunEditor onSave={()=>{alert(editorVal)}} onChange={(val,e)=>{editorVal =val ;console.warn(editorVal);}} setOptions={editorOptions} />
      </DialogContent>
    </Dialog>
*/

export function CourseEditModal({open,setOpen,targetForm:string = ""}) {
  return (
    <Dialog fullWidth="sm" maxWidth="sm" open={open}>
      <DialogTitle>Course Editor</DialogTitle>
      <DialogContent>
        <FormGroup>
        <Box>
            <Typography component="span" ><VisibilityRoundedIcon />Visibility : </Typography>
            <Switch size="small" onChange={(e)=>{console.log(e.target.checked)}} defaultChecked />
          </Box>
          <TextField
            sx={{ mb: 2 ,mt:2}}
            fullWidth
            size="small"
            id="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            maxRows={3}
            rows={3}
            multiline
            size="small"
            id="desc"
            label="Desciption"
            variant="outlined"
          />

        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>setOpen(false)} fullWidth variant="contained" color="error" >Cancle</Button>
        <Button fullWidth variant="contained" color="success" >Save</Button>

      </DialogActions>
    </Dialog>
  );
}


export function LessonEditModal({open,setOpen,targetForm:string = ""}){
  let editorVal = '';
 
  return (
    <Dialog fullScreen sx={{margin:5}} open={open}>
      <DialogContent>
        <Typography variant="h5" >Lesson Editor</Typography>
        <FormGroup>
          <Box>
                <Typography component="span" ><VisibilityRoundedIcon />Visibility : </Typography>
                <Switch size="small" onChange={(e)=>{console.log(e.target.checked)}} defaultChecked />
          </Box>
          <TextField
              sx={{ mb: 2,mt:2 }}
              fullWidth
              size="small"
              id="name"
              label="Name"
              variant="outlined"
            />
            
            <SunEditor autoFocus height="450px"  onChange={(val,e)=>{editorVal =val ;console.warn(editorVal);}} setOptions={editorOptions} />

            
          </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>setOpen(false)} fullWidth variant="contained" color="error" >Cancle</Button>
        <Button fullWidth variant="contained" color="success" >Save</Button>
      </DialogActions>
    </Dialog>
  )
}
