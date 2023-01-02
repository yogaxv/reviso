import { Stack } from '@mui/material';
import MenuCard from '../../components/setting/MenuCard';
import { UserCard } from '../../components/setting/UserCard';
import Layout from '../../components/shared/Layout';

export default function Profilepage () {
  return (
    <Layout>
      <Stack spacing={2}>
        <UserCard />
        <MenuCard />
      </Stack>
    </Layout>
  )
}