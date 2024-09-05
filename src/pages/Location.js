import * as React from 'react';
import {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Location() {
  const [locId,setLocId]=useState();
  const [locName,setLocName]=useState();
  const [allLocs, setAllLocs]=useState([]);

  const handleClick=(e)=>{
    e.preventDefault()
    const location = {id:locId,name:locName}
    console.log(location)
    fetch("http://localhost:8080/location/new",
      {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(location)}
    )
    .then(()=>{
      console.log("New Location Added");
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8080/getLocations")
    .then(res=>res.json())
    .then((result)=>{
      setAllLocs(result);
    })
  },[]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Locations</h1>
      <TextField id="locId" label="Location ID" variant="standard" value={locId} onChange={(e)=>setLocId(e.target.value)}/>
      <TextField id="locName" label="Location Name" variant="standard" value={locName} onChange={(e)=>setLocName(e.target.value)} />
      <Button variant="contained" color="success" onClick={handleClick}>SUBMIT</Button>
    </Box>

  <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Location Id</StyledTableCell>
              <StyledTableCell>Location Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allLocs.map((loc) => (
              <StyledTableRow key={loc.id}>
                <StyledTableCell component="th" scope="loc">
                  {loc.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="loc">
                  {loc.name}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
}
