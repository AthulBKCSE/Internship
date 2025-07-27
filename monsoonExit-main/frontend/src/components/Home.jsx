import React from 'react';
import { 
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Grid,
  Container
} from '@mui/material';
import { Link } from 'react-router-dom';
const Home = () => {
  
  const blogs = [
    {
      id: 1,
      title: "Travel the world!!!!!",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"
  
    },
    {
      id: 2,
      title: "Art!!!!!!!!!!!!!",
      category: "Art",
      image: "https://cdn.magicdecor.in/com/2023/02/29204106/image-1686129942-3869.jpg"
  
    },
    {
      id: 3,
      title: "Food is Art!!!",
      category: "Food",
      image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        
        <Grid container spacing={4}>
          {blogs.map((blog) => (
            <Grid item key={blog.id} xs={12} sm={6} md={4}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease'
                }
              }}>

                <CardMedia
                  component="img"
                  height="200"
                  image={blog.image}
                  alt={blog.title}
                  sx={{
                    objectFit: 'cover'
                  }}
                />
                
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {blog.title}
                  </Typography>
                  <Typography color="text.secondary">
                    Category: {blog.category}
                  </Typography>
                </CardContent>
                
                <CardActions>
                  <Button
                    component={Link}
                    to={`/delete/${blog.id}`}
                    variant='contained'
                    size="small" 
                    color="secondary"
                    >
                    DELETE
                    </Button>
                  <Button 
                    component={Link}
                    to={`/update/${blog.id}`}
                    variant='contained'
                    size="small" 
                    color="secondary"
                    >
                    UPDATE
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;