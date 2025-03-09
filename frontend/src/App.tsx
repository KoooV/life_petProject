import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import NewsFeed from './components/NewsFeed';
import Messenger from './components/Messenger';

// Создаем тему Material 3
const theme = createTheme({
  typography: {
    fontFamily: '"VAG World Bold", "Arial", sans-serif',
    allVariants: {
      fontFamily: '"VAG World Bold", "Arial", sans-serif',
    },
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 600,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#00E676', // Более яркий зеленый
      light: '#69F0AE',
      dark: '#00C853',
    },
    background: {
      default: '#000000', // Полностью черный фон
      paper: '#0A0A0A', // Очень темный фон для карточек
    },
    divider: 'rgba(0, 230, 118, 0.2)', // Более заметный разделитель
    text: {
      primary: '#FFFFFF', // Полностью белый текст
      secondary: 'rgba(255, 255, 255, 0.85)', // Более контрастный вторичный текст
    },
    action: {
      active: '#00E676',
      hover: 'rgba(0, 230, 118, 0.15)', // Более заметный эффект при наведении
      selected: 'rgba(0, 230, 118, 0.25)', // Более заметный эффект выбора
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'VAG World Bold';
          src: url('/fonts/VAGWorldBold.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 20,
          fontWeight: 600,
          '&.MuiButton-contained': {
            backgroundColor: '#00E676',
            '&:hover': {
              backgroundColor: '#00C853',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderColor: 'rgba(0, 230, 118, 0.3)', // Более заметная рамка
          boxShadow: '0 0 10px rgba(0, 230, 118, 0.1)', // Добавляем зеленое свечение
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(0, 230, 118, 0.15)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(0, 230, 118, 0.15)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 230, 118, 0.3)',
              borderWidth: 2, // Увеличиваем толщину рамки
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 230, 118, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00E676',
            },
          },
        },
      },
    },
  },
});

// Ширина боковой панели
const SIDEBAR_WIDTH = 240;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              ml: `${SIDEBAR_WIDTH}px`,
              p: 3,
              width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
              minHeight: '100vh',
              bgcolor: 'background.default'
            }}
          >
            <Routes>
              <Route path="/" element={<NewsFeed />} />
              <Route path="/messages" element={<Messenger />} />
              <Route path="/friends" element={<div>Страница друзей</div>} />
              <Route path="/notifications" element={<div>Уведомления</div>} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
