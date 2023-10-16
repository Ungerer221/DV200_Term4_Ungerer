import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, unstable_toUnitless } from "@mui/material";
// import { useRouteId } from "react-router/dist/lib/hooks";
// import { TabContent } from "react-bootstrap";
import Axios from 'axios';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function QuestionEditor() {
    
    const today = new Date();
    const formatDate = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();
    const [Image, setImage] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const getImage = (e) => {
        let imageFile = e.target.files[0];
        console.log(imageFile);
        setImage(imageFile);

        let reader = new FileReader();
        reader.onload = () => {
            let output = document.getElementById('preview');
            output.src = reader.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    

    const addQuestion = (e) => {
        const payload = new FormData()

        let data = {
        id: '111',
        title: title,
        text: content,
        date: formatDate,
        comments: '',
        }

        payload.append('data', JSON.stringify(data));
        payload.append('image', Image);

        Axios.post('http://localhost:5000/api/addquestion', payload);
        console.log(payload)

    }




    return (
        <>
            {/* <Box sx={{width: 200}} alignItems="center">
                <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={3} component="form" noValidate autoComplete="off" >
                    
                        <TextField fullWidth required id="title" label="Add a title" />
                        <TextField fullWidth required id="title" label="Add a title" />
                    
                </Stack>
            </Box> */}
            <Grid container spacing={4} sx={{
                maxWidth: 500, marginTop: 10, marginLeft: "auto", marginRight: "auto", '--Grid-borderWidth': '2px',
                borderTop: 'var(--Grid-borderWidth) solid',
                borderLeft: 'var(--Grid-borderWidth) solid',
                borderRight: 'var(--Grid-borderWidth) solid',
                borderBottom: 'var(--Grid-borderWidth) solid',
                borderRadius: 4,
                borderColor: '#FF3F00'
            }}>
                <Grid xs={12} >
                    <Typography variant="h4" sx={{color: '#FF3F00'}} > Ask a Question </Typography>
                    <TextField fullWidth required id="title" label="Add a title" variant="standard" onChange={(e) => setTitle(e.target.value)} />
                    <TextField fullWidth required id="content" label="Add Content" multiline rows={12} variant="standard" onChange={(e) => setContent(e.target.value)} />
                </Grid>
            </Grid>

            <Grid container sx={{
                maxWidth: 200, marginTop: '14px', marginLeft: "auto", marginRight: "auto", padding: '10px', '--Grid-borderWidth': '2px',
                borderTop: 'var(--Grid-borderWidth) solid',
                borderTopColor: '#FFFF',
                borderLeft: 'var(--Grid-borderWidth) solid',
                borderRight: 'var(--Grid-borderWidth) solid',
                borderBottom: 'var(--Grid-borderWidth) solid',
                borderLeftColor: '#FF3F00',
                borderRightColor: '#FF3F00',
                borderBottomColor: '#FF3F00',
                borderRadius: 1
            }}>
                <Box justifyContent={'center'} sx={{margin:"auto"}}>
                    <Button component="label" variant="outlined" sx={{color: '#FF3F00', borderColor: '#FF3F00'}} >
                        Upload Image
                        <VisuallyHiddenInput type="file" onChange={getImage} />
                    </Button>
                    <img id="preview" style={{width: 100, height: 100}} alt="preview" />
                </Box>
            </Grid>
            <Button variant="contained" sx={{marginTop: '15px'}} onClick={addQuestion} > Done </Button>
        </>
    )
}

export default QuestionEditor;
