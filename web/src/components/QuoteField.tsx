import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


interface QuoteFieldProps {
    type: string;
    content: string;
    isEditing: boolean;
}


export default function QuoteField (props: QuoteFieldProps) {
    let boxSx = {}
    var inputProps = {}
    var typographyElement = (<></>)
  
    if (props.type === 'quote'){
      boxSx = {padding: "15px"}
      typographyElement = (
        <Typography
        sx={{ textAlign: "justify" }}
        variant="h6"
        component="div">
          "{props.content}"
        </Typography>)
      inputProps = {style: {fontSize: '1.25rem', textAlign: 'justify'}}
    }
    else {
      boxSx = {
        mb: 1.5,
        alignSelf: "end",
        flex: "auto",
        display: "flex", alignItems: "end", margin: 0, padding: 0,
        paddingX: "15px"
      }
      typographyElement = (
        <Typography color="text.secondary">
          <p>- {props.content}</p>
        </Typography>)
    }
  
    return (
      <Box sx={boxSx}>
        {props.isEditing?
        <TextField
          sx={{width: "100%"}}
          multiline
          inputProps={inputProps}
          label={props.type === "author"? "Edit author": "Edit quote"}
          variant="outlined"
          defaultValue={props.content}/> :
          typographyElement
        }
      </Box>
    )
}