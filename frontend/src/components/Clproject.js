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
	spacing={2}
	direction="column"
	justifyContent="center"
	style={{ minHeight: "100vh" }}
>
<Paper elelvation={2} sx={{ padding: 5 }}>

<h1 style={ {
    color: "black",
    textAlign: "center",
	margin:"50px",
  }}  >Tell us your requirement</h1>
    
<form>
<Grid container direction="column" spacing={2}>
	<Grid item>
		<TextField
			type="name"
			fullWidth
			label="Choose a name for your project"
			placeholder="eg.Build me a website"
			variant="outlined"
		/>
	</Grid>

	<Grid item>
		<TextField
			type="email"
			fullWidth
			label="Tell us more about your project"
			placeholder="Describe your project here..."
			variant="outlined"	
		/>
	</Grid>

	

	<Grid item>
	<Button type="submit" fullWidth variant="contained">
	POST YOUR PROJECT
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