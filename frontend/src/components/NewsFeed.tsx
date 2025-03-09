import { Favorite, ChatBubble, Share } from '@mui/icons-material';
import { Paper, Avatar, Typography, TextField, Button, IconButton, Box, Card, CardContent, CardActions } from '@mui/material';

const posts = [
  {
    id: 1,
    author: 'Anna Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
    content: 'Perfect day for new discoveries! 🌟',
    timestamp: '2 hours ago',
    likes: 15,
    comments: 3,
  },
  {
    id: 2,
    author: 'Peter Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Peter',
    content: 'Just finished a new project! Really happy with the results 💻',
    timestamp: '4 hours ago',
    likes: 24,
    comments: 5,
  },
];

export default function NewsFeed() {
  return (
    <Box sx={{ 
      maxWidth: 600, 
      mx: 'auto',
      width: '100%'
    }}>
      {/* Create post */}
      <Paper sx={{ p: 3, mb: 3 }} elevation={1}>
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="What's new?"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" size="large">
            Post
          </Button>
        </Box>
      </Paper>

      {/* Posts feed */}
      {posts.map((post) => (
        <Card key={post.id} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar src={post.avatar} alt={post.author} />
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle1" component="div">
                  {post.author}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {post.timestamp}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {post.content}
            </Typography>
          </CardContent>
          <CardActions sx={{ px: 2, pb: 2 }}>
            <IconButton size="small" color="default">
              <Favorite sx={{ fontSize: 20 }} />
              <Typography variant="caption" sx={{ ml: 1 }}>
                {post.likes}
              </Typography>
            </IconButton>
            <IconButton size="small" color="default">
              <ChatBubble sx={{ fontSize: 20 }} />
              <Typography variant="caption" sx={{ ml: 1 }}>
                {post.comments}
              </Typography>
            </IconButton>
            <IconButton size="small" color="default">
              <Share sx={{ fontSize: 20 }} />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
} 