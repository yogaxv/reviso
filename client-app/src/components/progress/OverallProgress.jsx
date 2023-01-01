import { Box, Card, CardContent, Typography } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height:6,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const OverallProgress = ({ progress = 65 }) => {
  return (
    <Box sx={{ minWidth: 200 }}>
      <Card variant='outlined'>
        <CardContent>
          <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color='text.secondary'>
            Proses Keseluruhan
          </Typography>
          <Typography variant='h4' component='div' sx={{ marginBottom: 2, fontWeight: 'bold' }} color='text.primary'>
            {progress} %
          </Typography>

          <BorderLinearProgress variant='determinate' value={progress} />
        </CardContent>
      </Card>
    </Box>
  )
}

export default OverallProgress
