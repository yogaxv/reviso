import * as React from 'react'
import { styled } from '@mui/material/styles'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import TodoList from './TodoList'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<PlayCircleIcon sx={{ fontSize: '0.9rem' }} color='main'/>}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, 0)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingTop: theme.spacing(0),
  paddingBottom: theme.spacing(2),
  paddingInline: theme.spacing(5),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
  borderTop: 'none',
}))

export default function TodoWrapper() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color='#01499A'>
            Collapsible Group Item #1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TodoList />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
          <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color='#01499A'>
            Collapsible Group Item #2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TodoList />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
          <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color='#01499A'>
            Collapsible Group Item #3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TodoList />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
