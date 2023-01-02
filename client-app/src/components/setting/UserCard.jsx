import { Box, Avatar, Stack, Typography, Chip, Paper } from '@mui/material'

export const UserCard = () => {
  return (
    <Paper elevation={0} sx={{ position: 'relative' }}>
      <Box sx={{ p: 2, display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
        <Stack spacing={0}>
          <Typography fontWeight={700}>Michael Scott</Typography>
          <Typography variant='body2' color='text.secondary'>
            Scranton, PA
          </Typography>
        </Stack>
      </Box>

      <Chip
        label='Administrator'
        color='success'
        size='small'
        sx={{ position: 'absolute', top: 5, right: 5 }}
      />
    </Paper>
  )
}
