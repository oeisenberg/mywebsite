import * as React from "react";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Link} from 'react-router-dom';

const PersonalLinks = () => {
    return (
        <Box>
            <Button variant="contained" target="_blank" href="https://www.github.com/oeisenberg" endIcon={<GitHubIcon />}>
                GitHub
            </Button>

            
            <Button variant="contained" target="_blank" href="https://www.linkedin.com/in/olivereisenberg" endIcon={<LinkedInIcon />}>
                LinkedIn
            </Button>
            
        </Box>
    )
};
export default PersonalLinks;