// // src/components/Projects.js
// import React, { useState, useEffect } from 'react';
// import axios from '../config/axios';  // Import the custom Axios instance

// const Projects = () => {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         axios.get('/api/projects')
//             .then(response => {
//                 setProjects(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching projects:', error);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>Projects</h1>
//             <ul>
//                 {projects.map(project => (
//                     <li key={project.id}>{project.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Projects;
