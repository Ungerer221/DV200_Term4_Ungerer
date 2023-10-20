import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, unstable_toUnitless } from "@mui/material";
import Axios from 'axios';
import Alert from '@mui/material/Alert';

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
    const formatDate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const [Image, setImage] = useState();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [titleAlert, setTitleAlert] = useState(false);
    const [contentAlert, setContentAlert] = useState(false);

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

        if (title === '' && content === '') {
            setTitleAlert(true);
            setContentAlert(true);
        } else if (content === '') {
            setContentAlert(true);
            setTitleAlert(false);
        } else if (title === '') {
            setTitleAlert(true);
            setContentAlert(false);
        } else if (title && content) {
            setTitleAlert(false);
            setContentAlert(false);

            const payload = new FormData()
            let data = {
                id: '652d15bff515d55a85c47a7d', // replace with actual ID input (from session/localstorage?)
                title: title,
                text: content,
                date: formatDate,
                comments: '',
            }
            payload.append('data', JSON.stringify(data));
            payload.append('image', Image);

            Axios.post('http://localhost:5002/api/addquestion', payload)
                .then(
                    (response) => {
                        console.log(response.statusText);
                    },
                    (error) => {
                        console.log(error);

                    }
                )
            console.log(payload)
        }
    }

    if (!sessionStorage.getItem('token')) {
        
        window.location = "/Signin";

    } else {
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
                        <Typography variant="h4" sx={{ color: '#FF3F00' }} > Ask a Question </Typography>
                        <TextField fullWidth required id="title" label="Add a title" variant="standard" onChange={(e) => setTitle(e.target.value)} />
                        {titleAlert && <Alert severity="error"> Add a Title </Alert>}
                        <TextField fullWidth required id="content" label="Add Content" multiline rows={12} variant="standard" onChange={(e) => setContent(e.target.value)} />
                        {contentAlert && <Alert severity="error"> Add Content </Alert>}
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
                    <Box justifyContent={'center'} sx={{ margin: "auto" }}>
                        <Button component="label" variant="outlined" sx={{ color: '#FF3F00', borderColor: '#FF3F00' }} >
                            Upload Image
                            <VisuallyHiddenInput type="file" onChange={getImage} />
                        </Button>
                        <img id="preview" style={{ width: 100, height: 100, marginTop: 20 }} alt=" " />
                    </Box>
                </Grid>
                <Button variant="contained" sx={{ marginTop: '15px' }} onClick={addQuestion} > Done </Button>
            </>
        )
    }
}

export default QuestionEditor;
