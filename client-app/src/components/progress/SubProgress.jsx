import { Box, Card, CardContent, Typography } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}))

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const SubProgress = ({ title = 'Blok A', progress = 65 }) => {
  return (
    <Box sx={{ minWidth: 200, marginBottom: 2 }}>
      <Card variant='outlined'>
        <CardContent>
          <Box sx={{  display: 'flex', justifyContent: 'space-between', marginBottom: 2  }}>
            <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color='text.secondary'>
              {bull} {title}
            </Typography>

            <Typography sx={{ fontSize: 14, fontWeight: 'bold', align: 'right' }}>
              {progress} %
            </Typography>
          </Box>

          <BorderLinearProgress variant='determinate' value={progress} />
        </CardContent>
      </Card>
    </Box>
  )
}

export default SubProgress
