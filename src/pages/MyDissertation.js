import "./App.css";
import Menu from "./components/Menu";
import PersonalLinks from "./components/PersonalLinks";
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';

const MyDissertation = () => {
  return (
    <div>
      <header className="App-header">
        <Menu />
      </header>
      <body className="App-body">
        <div>
          <h2>Abstract</h2> {/* Give class defintion for a section - lgrey background w margin? */}
          Within Formula One, data gathered from Computational Fluid Dynamics (CFD) does not always correspond to the telemetry collected on the racetrack, where a higher correlation between the sources allows for CFD to carry more weight resulting in successful aerodynamic packages. To improve correlation, Formula One teams use wind tunnels with a scale model of their car to reproduce conditionsin both CFD and the racetrack. This paper focuses on the visualisation of data measured from the tunnel using Particle Image Velocimetry. Flow visualisation has undergone lots of research and this document explores the current state of the art and applies vortex extraction and visualisation techniques to a time-dependent data set, provided by Scuderia Toro Rosso, to allow for a meaningful interpretation of data.
        </div>

        <div> {/* Give class defintion for a section - lgrey background w margin? */}
          The process led to the revelation of two visualisation techniques using annimation to collapse temporal data into two dimensions. The two visualisation techniques presented are Parallel Annimations and Contextual Plots which can be combined to form a three dimensional Parrallel Contextual Annimation.
        </div>
        
        {/* To Do: Import some images and detials to this page. */}
      
      </body>
      <footer className="App-footer">
        <Button sx={{m: 2}} variant="contained" target="_blank" href="https://github.com/oeisenberg/Extraction-and-Visualisation-of-Vortices-from-Instantaneous-Particle-Image-Velocimetry/blob/main/eisenberg-ohe-dissertation-2020-05.pdf" endIcon={<ArticleIcon />}>
                Dissertation
        </Button>
        <PersonalLinks />
      </footer>
    </div>
  );
};
export default MyDissertation;
