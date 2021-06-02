import {
  Button,
  createMuiTheme,
  FormGroup,
  List,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  TextField,
  ThemeProvider,
  Typography,
  withStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Gloria Hallelujah", "sans-serif"].join(","),
  },
});

const useStyles = makeStyles({
  root: {
    color: "white",
    textAlign: "center",
  },
  typography_class: {
    margin: "25px",
    textDecoration: "underline",
    textDecorationColor: "#00ccff",
  },
  form_class: {
    alignItems: "center",
  },
  textfield_label_class: {
    color: "white",
  },
  textfield_text_class: {
    color: "white",
  },
  add_button_class: {
    marginTop: "10px",
    color: "#00ccff",
    "&:hover": {
      color: "white",
      backgroundColor: "#00ccff",
    },
    "&:active": {
      borderColor: "#00ccff",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,240,255,.5)",
    },
  },
  list_class: {
    width: "50%",
    marginTop: "30px",
    margin: "auto",
  },
  list_item_class: {
    margin: "10px",
    border: "4px solid #00ccff",
    borderRadius: "50px",
    background: "#313131",
  },
  delete_icon_class: {
    color: "#00ccff",
    fontSize: "30px",
  },
});

const CssTextField = withStyles({
  root: {
    margin: "7px",
    "& label.Mui-focused": {
      color: "#00ccff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "4px solid #00ccff",
      },
      "&:hover fieldset": {
        border: "5px solid #00ccff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

interface ITask {
  taskName: string;
}

function App(): JSX.Element {
  const classes = useStyles();

  const [inputTask, setInputTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (): void => {
    const newTask: ITask[] = [...tasks, { taskName: inputTask }];
    setTasks(newTask);
    setInputTask("");
  };

  const handleDelete = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
    console.log(tasks);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Typography variant="h2" className={classes.typography_class}>
          To Do list
        </Typography>
        <FormGroup className={classes.form_class}>
          <CssTextField
            value={inputTask}
            label="Write the task"
            variant="outlined"
            onChange={(e) => setInputTask(e.target.value)}
            InputLabelProps={{
              className: classes.textfield_label_class,
            }}
            InputProps={{
              className: classes.textfield_text_class,
            }}
          />
          <Button className={classes.add_button_class} onClick={handleSubmit}>
            Add task
          </Button>
        </FormGroup>
        <List className={classes.list_class}>
          {tasks.map((task: ITask, i: number) => {
            return (
              <ListItem key={i} className={classes.list_item_class}>
                <ListItemText primary={task.taskName} />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => handleDelete(i)}>
                    <DeleteIcon className={classes.delete_icon_class} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </ThemeProvider>
    </div>
  );
}

export default App;
