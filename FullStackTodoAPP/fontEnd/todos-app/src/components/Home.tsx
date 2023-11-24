import React from 'react';
import './Home.css';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Task from "../asserts/istockphoto-1249855237-612x612.jpg";
import Edit from "../asserts/edit.jpg";
import Delete from "../asserts/delete.png";
import Date from '../asserts/date.png';

const features =[
  {
    title:"ADD NEW TASKS EASILY",
    description: " Streamline Your Day with Effortless Task Management Create, organize, and prioritize your tasks seamlessly. Our intuitive 'Add New Tasks' feature makes it easy to enter your to-do items. Stay productive and stay on top of your responsibilities with our user-friendly task entry system.",
    image:Task
  },
  {
    title:"EDIT AND UPDATE TASK DETAILS",
    description: " Stay in control of your tasks with our easy-to-use 'Edit and Update' feature. Whether you need to make changes, adjust due dates, or refine task descriptions, our intuitive interface simplifies task management. Keep your to-do list accurate and up-to-date with just a few clicks.",
    image:Edit
  },
  {
    title:"DELETE COMPLETED  TASKS WITH A SINGLE CLICK",
    description: "Our 'Delete Completed Tasks' feature empowers you to declutter your to-do list effortlessly. Say goodbye to completed tasks with just one click, keeping your workspace clean and your focus sharp. Experience hassle-free task management and stay organized effortlessly.",
    image:Delete
  },
  {
    title:"SET DUE DATES AND  PRIORITIES",
    description:"Stay Organized and Stay on Track Never miss a deadline again with our 'Set Due Dates and Priorities' tool. Easily assign due dates and prioritize tasks to ensure you're focusing on what matters most. Take control of your schedule and manage your responsibilities efficiently, all in one place.",
    image:Date
  }




]
const HomePage: React.FC = () => {
  return (
    <div className='main-Container' id='footer'>
      
      <Container sx={{ marginTop: '10rem' ,marginBottom:'10rem',textAlign:'center'}} >
            <Typography variant="h4" gutterBottom sx={{fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1.7rem',
              color: '#1976d9',
              textDecoration: 'none',}}>
            WELCOME TO OUR TODOLIST APP
            </Typography>
            <Typography variant="h6" gutterBottom style={{maxWidth:'700px',justifyContent:'center'}} sx={{paddingLeft:{xs:'2%',md:'19%',fontFamily: 'monospace',
              fontWeight: 100,
              letterSpacing: '.1.6rem',
              color: 'black',}}}>
            Your ultimate task management solution. 
          Whether you're at home, at work, or on the go, our app helps you stay organized and productive.
            </Typography>
      </Container>
      {features.map((feature,index:number) => 
        <>
         {index %2 == 0    && <div>
          
          <h4 className='feature-title'>{feature.title}</h4>
          <div className='feature-container'>
            
          <div className="description-container">
              <h6 className='feature-description'>{feature.description}</h6>
          </div>
          <div className='image-container'>
            <img src={feature.image} alt="" className="feature-image" />
          </div>
        </div>
        </div>}
        {index %2 != 0    && <div>
          
          <h4 className='feature-title'>{feature.title}</h4>
          <div className='feature-container feature-container-2'>
          <div className='image-container'>
            <img src={feature.image} alt="" className="feature-image" />
          </div>
          <div className="description-container">
              <h6 className='feature-description'>{feature.description}</h6>
          </div>
          
        </div>
        </div>}
        
        </>
       
      )}
      
     
    </div>
  );
};

export default HomePage;