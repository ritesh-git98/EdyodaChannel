import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { getUser, baseUrl } from "../../CommonResource/Common";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const UploadVideo = () => {
  const userData = getUser();
  const title = useRef("");
  const description = useRef("");
  const duration = useRef("");
  const vimeo = useRef("");
  const thumbnail = useRef("");
  const classes = useStyles();
  const [warning, setWarning] = useState("");
  const history = useHistory();
  const upload = e => {
    e.preventDefault();
    const _id = "V" + new Date().getTime();
    console.log(title.current.value);
    console.log(description.current.value);
    console.log(duration.current.value);
    console.log(vimeo.current.value);
    console.log(thumbnail.current.value);

    axios({
      method: "post",
      url: `${baseUrl}/addVideo`,
      data: {
        _id: "V" + new Date().getTime(),
        educator: userData._id,
        title: title.current.value,
        description: description.current.value,
        duration: duration.current.value,
        video_url: vimeo.current.value,
        thumbnail_url: thumbnail.current.value,
        likes: 0,
        views: 0
      }
    }).then(response => {
      if (response.data && response.status === 200) {
        setWarning("");
        let path = `home`;
        history.push(path);
      }
    })
    .catch(err =>{
        setWarning("Someting went wrong. Try again later.");
    })
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Upload Video
        </Typography>
        <form className={classes.form} onSubmit={upload} autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Video Title"
                autoFocus
                inputRef={title}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Video Description"
                inputRef={description}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Video Duration"
                inputRef={duration}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Video’s Vimeo URL"
                type="url"
                inputRef={vimeo}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Thumbnail URL"
                type="url"
                inputRef={thumbnail}
              />
            </Grid>
          </Grid>
          <p className="warningClass">{warning}</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Upload
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default UploadVideo;
