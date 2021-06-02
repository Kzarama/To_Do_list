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
  Modal,
  Fade,
  Backdrop,
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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    color: "white",
    backgroundColor: "#212121",
    border: "4px solid #00ccff",
    borderRadius: "25px",
    boxShadow: theme.shadows[5],
    position: "absolute",
    width: 400,
    padding: theme.spacing(2, 4, 3),
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

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [inputTask, setInputTask] = useState<string>("");
  const [updateTask, setUpdateTask] = useState<ITask>();
  const [idSelected, setIdSelected] = useState<number>(-1);
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

  const handleUpdate = (): void => {
    const newTask: ITask[] = [...tasks];
    newTask[idSelected] = updateTask || newTask[idSelected];
    setTasks(newTask);
    setInputTask("");
    handleClose();
  };

  const setUpdateTaskMethod = (name: string): void => {
    setUpdateTask({ taskName: name });
  };

  const handleOpen = (i: number) => {
    setOpenModal(true);
    setUpdateTask(tasks[i]);
    setIdSelected(i);
  };

  const handleClose = () => {
    setOpenModal(false);
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
              <ListItem
                key={i}
                className={classes.list_item_class}
                onClick={() => handleOpen(i)}
              >
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
        <Modal
          open={openModal}
          onClose={handleClose}
          closeAfterTransition
          className={classes.modal}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openModal}>
            <div className={classes.paper}>
              <Typography variant="h4">Edit the task</Typography>
              <CssTextField
                value={updateTask?.taskName}
                label="Task name"
                variant="outlined"
                onChange={(e) => setUpdateTaskMethod(e.target.value)}
                InputLabelProps={{
                  className: classes.textfield_label_class,
                }}
                InputProps={{
                  className: classes.textfield_text_class,
                }}
              />
              <Button
                className={classes.add_button_class}
                onClick={() => handleUpdate()}
              >
                Update
              </Button>
              <Button
                className={classes.add_button_class}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </Fade>
        </Modal>
      </ThemeProvider>
    </div>
  );
}

export default App;
