import { Typography, Stack } from '@mui/material'
import Layout from '../../components/shared/Layout'
import LoadingScreen from '../../components/shared/LoadingScreen'
import TodoWrapper from '../../components/todo/TodoWrapper'

const Todopage = () => {
  let loading = false

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <Layout>
      <Stack spacing={2}>
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color='text.dark'>
          Belum Selesai
        </Typography>


        <TodoWrapper />


        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color='text.dark'>
          Sudah Selesai
        </Typography>

        <TodoWrapper />
      </Stack>
    </Layout>
  )
}

export default Todopage
