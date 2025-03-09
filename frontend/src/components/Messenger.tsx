import { Send } from '@mui/icons-material';
import { 
  Paper, 
  Box, 
  TextField, 
  IconButton, 
  Typography, 
  Avatar, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Badge,
  Divider
} from '@mui/material';

const chats = [
  {
    id: 1,
    name: 'Анна Иванова',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
    lastMessage: 'Привет! Как дела?',
    timestamp: '14:22',
    unread: 2,
  },
  {
    id: 2,
    name: 'Петр Сидоров',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Peter',
    lastMessage: 'Увидимся завтра!',
    timestamp: '12:40',
    unread: 0,
  },
];

export default function Messenger() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Список чатов */}
      <Paper 
        elevation={1} 
        sx={{ 
          width: 320, 
          borderRadius: 0,
          borderRight: 1,
          borderColor: 'divider'
        }}
      >
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Поиск чатов..."
            variant="outlined"
          />
        </Box>
        <List sx={{ px: 1 }}>
          {chats.map((chat, index) => (
            <Box key={chat.id}>
              <ListItem 
                button 
                sx={{ 
                  borderRadius: 2,
                  mb: 0.5,
                  '&:hover': { bgcolor: 'action.hover' }
                }}
              >
                <ListItemAvatar>
                  <Avatar src={chat.avatar} alt={chat.name} />
                </ListItemAvatar>
                <ListItemText
                  primary={chat.name}
                  secondary={chat.lastMessage}
                  primaryTypographyProps={{ variant: 'subtitle2' }}
                  secondaryTypographyProps={{ 
                    variant: 'body2',
                    sx: { 
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }
                  }}
                />
                <Box sx={{ ml: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <Typography variant="caption" color="text.secondary">
                    {chat.timestamp}
                  </Typography>
                  {chat.unread > 0 && (
                    <Badge
                      badgeContent={chat.unread}
                      color="primary"
                      sx={{ mt: 0.5 }}
                    />
                  )}
                </Box>
              </ListItem>
              {index < chats.length - 1 && <Divider variant="inset" component="li" />}
            </Box>
          ))}
        </List>
      </Paper>

      {/* Область чата */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Paper 
          elevation={1} 
          sx={{ 
            p: 2, 
            borderBottom: 1, 
            borderColor: 'divider',
            borderRadius: 0
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={chats[0].avatar} alt={chats[0].name} />
            <Typography variant="subtitle1" sx={{ ml: 2 }}>
              {chats[0].name}
            </Typography>
          </Box>
        </Paper>

        <Box sx={{ flex: 1, p: 2, bgcolor: 'background.default', overflowY: 'auto' }}>
          {/* Здесь будут сообщения */}
        </Box>

        <Paper 
          elevation={1} 
          sx={{ 
            p: 2,
            borderTop: 1,
            borderColor: 'divider',
            borderRadius: 0
          }}
        >
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Введите сообщение..."
              variant="outlined"
            />
            <IconButton color="primary" sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}>
              <Send sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
} 