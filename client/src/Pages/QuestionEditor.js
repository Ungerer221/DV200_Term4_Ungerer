import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

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
                    <TextField fullWidth required id="title" label="Add a title" variant="standard" />
                    <TextField fullWidth required id="content" label="Add Content" multiline rows={12} variant="standard" />
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
                    <Button component="label" variant="outlined">
                        Upload Image
                        <VisuallyHiddenInput type="file" />
                    </Button>
                </Box>

            </Grid>
        </>
    )
}

export default QuestionEditor;
