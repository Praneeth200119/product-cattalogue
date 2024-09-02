/*import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Default to empty string for the default option
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!role) {
      setError('Please select a role.');
      return;
    }

    try {
      console.log("Registering user...");

      const response = await axios.post(
        'http://localhost:8000/api/v1/registerUser',
        { username, password, role },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.success) {
        alert('Registration successful!');
        setUsername('');
        setPassword('');
        setRole(''); // Reset to default option
        navigate('/users')
      } else {
        console.log("An error occurred during registration");
        setError('Registration failed: ' + response.data.message);
      }
    } catch (error) {
      console.log("Error occurred during registration:", error.message);
      setError('An error occurred: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="" disabled>Select Role</option> 
         /* <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Register</button>
      
    </form>
  );

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      alignItems="flex-start"
      width="100%"
      sx={{
        maxWidth: { xs: '100%', md: 'auto' },
        marginTop: '20px'
      }}
    >
      <Box
            display="flex"
            flexDirection="column"
            flex={1}
            justifyContent="center"
            px={4}
            py={2}
            borderRadius={1}
            border="1px solid"
            bgcolor="neutral.800"
            borderColor="neutral.800"
            width="100%"
            sx={{
              px: { xs: 2, md: 4 },
              bgcolor: 'rgba(38,38,38,0.5)', // Equivalent to bg-opacity-50
            }}
          >
            <Typography variant="h6" color="white">
              Username
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              mt={2}
              width="100%"
            >
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ backgroundColor: "black", color: "white" }} />
            </Box>
          </Box>
  
          <Box
            display="flex"
            flexDirection="column"
            flex={1}
            justifyContent="center"
            px={4}
            py={2}
            borderRadius={1}
            border="1px solid"
            bgcolor="neutral.800"
            borderColor="neutral.800"
            width="50%"
            sx={{
              px: { xs: 2, md: 4 },
              bgcolor: 'rgba(38,38,38,0.5)', // Equivalent to bg-opacity-50
            }}
          >
            <Typography variant="h6" color="white">
              Password
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              mt={2}
              width="100%"
            >
              <input type="text" value={paasword}
            onChange={(e) => setPassword(e.target.value)}
             style={{backgroundColor:'black' ,color:'white'}}/>
            </Box>
          </Box>
        </Box>
    
  
  );
};

export default Register;*/

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!role) {
      setError('Please select a role.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/registerUser',
        { username, password, role },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.success) {
        alert('Registration successful!');
        setUsername('');
        setPassword('');
        setRole('');
        navigate('/users');
      } else {
        setError('Registration failed: ' + response.data.message);
      }
    } catch (error) {
      setError('An error occurred: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        alignItems="flex-start"
        width="300px"
        sx={{
          maxWidth: { xs: '100%', md: 'auto' },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          justifyContent="center"
          px={4}
          py={2}
          borderRadius={1}
          border="1px solid"
          bgcolor="neutral.800"
          borderColor="neutral.800"
          width="100%"
          sx={{
            px: { xs: 2, md: 4 },
            bgcolor: 'rgba(38,38,38,0.5)',
          }}
        >
          <Typography variant="h6" color="white">
            Username
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={2}
            width="100%"
          >
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        alignItems="flex-start"
        width="300px"
        sx={{
          maxWidth: { xs: '100%', md: 'auto' },
          marginTop: '20px',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          justifyContent="center"
          px={4}
          py={2}
          borderRadius={1}
          border="1px solid"
          bgcolor="neutral.800"
          borderColor="neutral.800"
          width="100%"
          sx={{
            px: { xs: 2, md: 4 },
            bgcolor: 'rgba(38,38,38,0.5)',
          }}
        >
          <Typography variant="h6" color="white">
            Password
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={2}
            width="100%"
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        alignItems="flex-start"
        width="300px"
        sx={{
          maxWidth: { xs: '100%', md: 'auto' },
          marginTop: '20px',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          justifyContent="center"
          px={4}
          py={2}
          borderRadius={1}
          border="1px solid"
          bgcolor="neutral.800"
          borderColor="neutral.800"
          width="100%"
          sx={{
            px: { xs: 2, md: 4 },
            bgcolor: 'rgba(38,38,38,0.5)',
          }}
        >
          <Typography variant="h6" color="white">
            Role
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={2}
            width="100%"
          >
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{ backgroundColor: 'black', color: 'white' }}
            >
              <option value="" disabled>Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </Box>
        </Box>
      </Box>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button
        type="submit"
        style={{ marginTop: '20px', backgroundColor: 'greenyellow' }}
      >
        Register
      </button>
    </form>
  );
};

export default Register;

