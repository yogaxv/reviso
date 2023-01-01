import { Breadcrumbs, Typography } from '@mui/material'
import Layout from '../../components/shared/Layout'
import LoadingScreen from '../../components/shared/LoadingScreen'
import HomeIcon from '@mui/icons-material/Home'
import Link from '@mui/material/Link'
import OverallProgress from '../../components/progress/OverallProgress'
import SubProgress from '../../components/progress/SubProgress'
import { Stack } from '@mui/system'

function Homepage() {
  let loading = false

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <Layout>
      <Stack spacing={2}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link
            underline='hover'
            sx={{ display: 'flex', alignItems: 'center' }}
            color='inherit'
            href='/'
          >
            <HomeIcon fontSize='inherit' />
          </Link>
          <Link underline='hover' color='inherit' href='/material-ui/getting-started/installation/'>
            Core
          </Link>
          <Typography color='text.primary'>Breadcrumbs</Typography>
        </Breadcrumbs>

        <OverallProgress />
        <SubProgress title='Blok A' progress={35} />
        <SubProgress title='Blok B' progress={40} />
        <SubProgress title='Blok C' progress={90} />
        <SubProgress title='Blok D' progress={10} />
        <SubProgress title='Blok F' progress={15} />
        <SubProgress title='Blok A' progress={35} />
        <SubProgress title='Blok B' progress={40} />
        <SubProgress title='Blok C' progress={90} />
        <SubProgress title='Blok D' progress={10} />
        <SubProgress title='Blok F' progress={15} />
      </Stack>
    </Layout>
  )
}

export default Homepage
