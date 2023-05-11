import {
	Container,
	Button,
	Grid,
	Paper,
	TextField,
	IconButton,
	InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Login = () => {

const [values, setValues] = useState({
	email: "",
	pass: "",
	showPass: false,
});

const handlePassVisibilty = () => {
	setValues({
		...values,
		showPass: !values.showPass,
	});
};

	return (
		<div>
<Container maxWidth="sm">

<Grid
	container
	spacing={5 }
	direction="column   "
	justifyContent="center"
	style={{ minHeight: "100vh" }}
>
<Paper elelvation={2} sx={{ padding: 5 }}>
    
<h1 style={ {
    color: "black",
    textAlign: "center",
	padding:"25px",
  }}  >Signin Form</h1>

<form>
<Grid container direction="column" spacing={3}>

<Grid item>
		<TextField
			type="Name"
			fullWidth
			label="First Name"
			placeholder="Email Address"
			variant="outlined"	
		/>
	</Grid>

    <Grid item>
		<TextField
			type="Name"
			fullWidth
			label="Last Name"
			placeholder="Email Address"
			variant="outlined"	
		/>
	</Grid>

    <Grid item>
		<TextField
			type="phone number"
			fullWidth
			label="Phone No"
			placeholder="Phone No"
			variant="outlined"	
		/>
	</Grid>

    <Grid item>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">which one are you?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="freelancer" control={<Radio />} label="freelancer" />
        <FormControlLabel value="client" control={<Radio />} label="client" />
      </RadioGroup>
    </FormControl>
</Grid>


	<Grid item>
		<TextField
			type="email"
			fullWidth
			label="Email"
			placeholder="Email Address"
			variant="outlined"	
		/>
	</Grid>
	
    <Grid item>
	<TextField
		type={values.showPass ? "text" : "password"}
		fullWidth
		label="Password"
		placeholder="Password"
		variant="outlined"
		required
		InputProps={{
			endAdornment: (
				<InputAdornment position="end">
					<IconButton
						onClick={handlePassVisibilty}
						aria-label="toggle password"
						edge="end"
					>
						{values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
					</IconButton>
				</InputAdornment>
			),
		}}
	/>
	</Grid>

	<Grid item>
	<Button type="submit" fullWidth variant="contained">
	Sign In
	</Button>
	</Grid>
</Grid>
</form>
</Paper>
</Grid>
</Container>
		</div>
	);
};

export default Login;