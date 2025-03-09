import { Home, Message, People, Notifications, Favorite, ChevronLeft, Menu } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography, Stack, IconButton } from '@mui/material';
import { useState } from 'react';

const SIDEBAR_WIDTH = 240;
const SIDEBAR_COLLAPSED_WIDTH = 72;

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Messages', href: '/messages', icon: Message },
  { name: 'Friends', href: '/friends', icon: People },
  { name: 'Notifications', href: '/notifications', icon: Notifications },
];

const Logo = ({ isCollapsed }: { isCollapsed: boolean }) => (
  <Stack 
    alignItems="center" 
    spacing={1}
    sx={{
      position: 'relative',
      py: 3,
      px: isCollapsed ? 1.5 : 2,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    }}
  >
    <Box
      sx={{
        position: 'relative',
        width: isCollapsed ? '56px' : '80px',
        height: isCollapsed ? '56px' : '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          animation: 'pulseBackground 2s infinite',
          '& svg': {
            width: '100%',
            height: '100%',
          },
          '@keyframes pulseBackground': {
            '0%': {
              transform: 'scale(1.1)',
              opacity: 0.15,
            },
            '50%': {
              transform: 'scale(1.3)',
              opacity: 0.1,
            },
            '100%': {
              transform: 'scale(1.1)',
              opacity: 0.15,
            },
          },
        }}
      >
        <svg
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            imageRendering: 'pixelated',
            shapeRendering: 'crispEdges',
          }}
        >
          <path
            d="M4 2L3 1H2L1 2V3L4 6L7 3V2L6 1H5L4 2Z"
            fill="#00e676"
          />
        </svg>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          animation: 'pulseHeart 2s infinite',
          '& svg': {
            width: '100%',
            height: '100%',
            opacity: 0.2,
          },
          '@keyframes pulseHeart': {
            '0%': {
              transform: 'scale(1)',
              opacity: 0.2,
            },
            '50%': {
              transform: 'scale(1.15)',
              opacity: 0.15,
            },
            '100%': {
              transform: 'scale(1)',
              opacity: 0.2,
            },
          },
        }}
      >
        <svg
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            imageRendering: 'pixelated',
            shapeRendering: 'crispEdges',
          }}
        >
          <path
            d="M4 2L3 1H2L1 2V3L4 6L7 3V2L6 1H5L4 2Z"
            fill="#00e676"
          />
        </svg>
      </Box>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          imageRendering: 'pixelated',
          shapeRendering: 'crispEdges',
          filter: 'drop-shadow(0 0 8px rgba(0, 230, 118, 0.5))',
        }}
      >
        <path
          d="M4 2L3 1H2L1 2V3L4 6L7 3V2L6 1H5L4 2Z"
          fill="#00e676"
        />
      </svg>
    </Box>
  </Stack>
);

export default function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Paper
      elevation={1}
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH,
        borderRadius: 0,
        borderRight: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'width 0.3s ease',
      }}
    >
      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'divider',
      }}>
        <Logo isCollapsed={isCollapsed} />
      </Box>
      
      <List sx={{ 
        flex: 1, 
        py: 3,
        px: 1,
        overflowY: 'auto',
        '& > *:not(:last-child)': {
          mb: 2,
        }
      }}>
        <ListItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          sx={{
            borderRadius: 2,
            color: 'text.secondary',
            bgcolor: 'transparent',
            '&:hover': {
              bgcolor: 'action.hover',
              cursor: 'pointer',
            },
            justifyContent: isCollapsed ? 'center' : 'flex-start',
            px: isCollapsed ? 1 : 2,
          }}
        >
          <ListItemIcon sx={{ 
            minWidth: isCollapsed ? 0 : 40,
            color: 'inherit',
            mr: isCollapsed ? 0 : 2,
          }}>
            {isCollapsed ? <Menu sx={{ fontSize: 24 }} /> : <ChevronLeft sx={{ fontSize: 24 }} />}
          </ListItemIcon>
          {!isCollapsed && (
            <ListItemText 
              primary={isCollapsed ? "Expand" : "Collapse"}
              primaryTypographyProps={{
                fontSize: 16,
                fontWeight: 500,
                fontFamily: '"Karla", Arial, sans-serif'
              }}
            />
          )}
        </ListItem>

        <Box sx={{ mt: 2, mb: 1, borderBottom: 1, borderColor: 'divider' }} />

        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <ListItem
              key={item.name}
              component={Link}
              to={item.href}
              sx={{
                borderRadius: 2,
                color: isActive ? 'primary.main' : 'text.secondary',
                bgcolor: isActive ? 'action.selected' : 'transparent',
                '&:hover': {
                  bgcolor: 'action.hover',
                },
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                px: isCollapsed ? 1 : 2,
              }}
            >
              <ListItemIcon sx={{ 
                minWidth: isCollapsed ? 0 : 40,
                color: isActive ? 'primary.main' : 'inherit',
                mr: isCollapsed ? 0 : 2,
              }}>
                <item.icon sx={{ fontSize: 24 }} />
              </ListItemIcon>
              {!isCollapsed && (
                <ListItemText 
                  primary={item.name}
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: isActive ? 600 : 500,
                    fontFamily: '"Karla", Arial, sans-serif'
                  }}
                />
              )}
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
} 