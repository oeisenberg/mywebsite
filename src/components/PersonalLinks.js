import * as React from "react";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const PersonalLinks = () => {
    return (
        <Box sx={{mt: 10}} display="flex" alignItems="center" justifyContent="center">
            <Button sx={{m: 2}} variant="contained" target="_blank" href="https://www.github.com/oeisenberg" endIcon={<GitHubIcon />}>
                GitHub
            </Button>

            
            <Button sx={{m: 2}} variant="contained" target="_blank" href="https://www.linkedin.com/in/olivereisenberg" endIcon={<LinkedInIcon />}>
                LinkedIn
            </Button>
            
        </Box>
    )
};
export default PersonalLinks;