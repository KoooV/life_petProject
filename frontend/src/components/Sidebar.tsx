import { Home, Message, People, Notifications, Favorite } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography, Stack } from '@mui/material';

const SIDEBAR_WIDTH = 240;

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Messages', href: '/messages', icon: Message },
  { name: 'Friends', href: '/friends', icon: People },
  { name: 'Notifications', href: '/notifications', icon: Notifications },
];

const Logo = () => (
  <Stack 
    alignItems="center" 
    spacing={1}
    sx={{
      position: 'relative',
      py: 2,
    }}
  >
    <Box
      sx={{
        position: 'relative',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'rgba(0, 230, 118, 0.1)',
          borderRadius: '50%',
          animation: 'pulse 2s infinite',
        },
        '@keyframes pulse': {
          '0%': {
            transform: 'scale(1)',
            opacity: 0.3,
          },
          '50%': {
            transform: 'scale(1.2)',
            opacity: 0.1,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 0.3,
          },
        },
      }}
    >
      <Favorite 
        sx={{ 
          fontSize: '32px', 
          color: 'primary.main',
          filter: 'drop-shadow(0 0 8px rgba(0, 230, 118, 0.5))',
        }} 
      />
    </Box>
    <Typography 
      variant="h4" 
      color="primary"
      sx={{ 
        fontWeight: 700,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        textShadow: '0 0 10px rgba(0, 230, 118, 0.5)',
        fontFamily: '"VAG World Bold", Arial, sans-serif',
      }}
    >
      Life
    </Typography>
  </Stack>
);

export default function Sidebar() {
  const location = useLocation();

  return (
    <Paper
      elevation={1}
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: SIDEBAR_WIDTH,
        borderRadius: 0,
        borderRight: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'divider',
      }}>
        <Logo />
      </Box>
      
      <List sx={{ 
        flex: 1, 
        py: 2,
        px: 1,
        overflowY: 'auto'
      }}>
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <ListItem
              key={item.name}
              component={Link}
              to={item.href}
              sx={{
                mb: 0.5,
                borderRadius: 2,
                color: isActive ? 'primary.main' : 'text.secondary',
                bgcolor: isActive ? 'action.selected' : 'transparent',
                '&:hover': {
                  bgcolor: 'action.hover',
                }
              }}
            >
              <ListItemIcon sx={{ 
                minWidth: 40,
                color: isActive ? 'primary.main' : 'inherit'
              }}>
                <item.icon sx={{ fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText 
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: '"VAG World Bold", Arial, sans-serif'
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
} 