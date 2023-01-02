import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function MenuCard() {
  return (
    <Paper elevation={0}>
      <MenuList>
        <MenuItem>
          <ListItemText>Ubah Kata Sandi</ListItemText>
          <ArrowRightIcon />
        </MenuItem>
        <MenuItem>
          <ListItemText>Tentang Aplikasi</ListItemText>
          <ArrowRightIcon />
        </MenuItem>
        <MenuItem>
          <ListItemText>Hubungi Kami</ListItemText>
          <ArrowRightIcon />
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Keluar</ListItemText>
          <ArrowRightIcon />
        </MenuItem>
      </MenuList>
    </Paper>
  );
}