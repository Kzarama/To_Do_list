import {
  Button,
  List,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
  withStyles,
  Modal,
  Fade,
  Backdrop,
  Box,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Check from "@material-ui/icons/Check";
import React, { useState } from "react";
import ITask from "../Interface/ITask";

const CssTextField = withStyles({
  root: {
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

const useStyles = makeStyles({
  root: {
    color: "white",
    textAlign: "center",
  },
  typography_class: {
    textDecoration: "underline",
    textDecorationColor: "#00ccff",
    margin: "40px auto 40px auto",
  },
  textfield_label_class: {
    color: "white",
  },
  textfield_text_class: {
    color: "white",
  },
  add_button_class: {
    width: "30%",
    color: "white",
    margin: "10px auto 50px auto",
    border: "4px solid #00ccff",
    borderRadius: "50px",
    backgroundColor: "#313131",
    "&:hover": {
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
    height: "58vh",
    margin: "auto",
    overflowY: "scroll",
    paddingRight: "10px",
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "5px",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#00ccff",
    },
  },
  list_item_class: {
    border: "4px solid #00ccff",
    borderRadius: "50px",
    background: "#313131",
    marginBottom: "15px",
    paddingLeft: "30px",
    "&:hover": {
      background: "#121212",
    },
  },
  task_done_class: {
    textDecoration: "line-through",
    textDecorationColor: "red",
  },
  icon_class: {
    color: "#00ccff",
    fontSize: "30px",
  },
  modal_class: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper_class: {
    color: "white",
    backgroundColor: "#212121",
    border: "4px solid #00ccff",
    borderRadius: "25px",
    position: "absolute",
    width: "35%",
    padding: "15px 20px 15px 20px",
  },
  modal_title_class: {
    textAlign: "center",
    margin: "0px auto 15px auto",
  },
  modal_input_class: {
    width: "97%",
    margin: "auto",
  },
  modal_button_class: {
    color: "#00ccff",
    width: "35%",
    margin: "auto 10px auto 10px",
    marginTop: "10px",
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
  modal_div_buttons_class: {
    textAlign: "center",
  },
});

function App(): JSX.Element {
  const classes = useStyles();

  const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);
  const [openModalUpdate, setOpenModalUpdate] = useState<boolean>(false);

  const [inputTask, setInputTask] = useState<string>("");
  const [updateTask, setUpdateTask] = useState<ITask>();
  const [idSelected, setIdSelected] = useState<number>(-1);

  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (): void => {
    const newTask: ITask[] = [
      ...tasks,
      { taskName: inputTask, taskDone: false },
    ];
    setTasks(newTask);
    setInputTask("");
    setOpenModalCreate(false);
  };

  const toggleDone = (i: number): void => {
    const taskDone: ITask[] = [...tasks];
    taskDone[i].taskDone = !taskDone[i].taskDone;
    setTasks(taskDone);
  };

  const handleDelete = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };

  const setUpdateTaskMethod = (name: string): void => {
    setUpdateTask({ taskName: name, taskDone: tasks[idSelected].taskDone });
  };

  const handleUpdate = (): void => {
    const newTask: ITask[] = [...tasks];
    newTask[idSelected] = updateTask || newTask[idSelected];
    setTasks(newTask);
    setInputTask("");
    setOpenModalUpdate(false);
  };

  const handleOpenUpdateModal = (i: number) => {
    setOpenModalUpdate(true);
    setUpdateTask(tasks[i]);
    setIdSelected(i);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.typography_class}>
        To Do list
      </Typography>
      <Button
        className={classes.add_button_class}
        onClick={() => setOpenModalCreate(true)}
      >
        Add task
      </Button>
      <Modal
        className={classes.modal_class}
        open={openModalCreate}
        onClose={() => setOpenModalCreate(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalCreate}>
          <Box component="div" className={classes.paper_class}>
            <Typography variant="h4" className={classes.modal_title_class}>
              Create task
            </Typography>
            <CssTextField
              value={inputTask}
              label="Task name"
              className={classes.modal_input_class}
              variant="outlined"
              onChange={(e) => setInputTask(e.target.value)}
              InputLabelProps={{
                className: classes.textfield_label_class,
              }}
              InputProps={{
                className: classes.textfield_text_class,
              }}
            />
            <Box component="div" className={classes.modal_div_buttons_class}>
              <Button
                className={classes.modal_button_class}
                onClick={() => handleSubmit()}
              >
                Create
              </Button>
              <Button
                className={classes.modal_button_class}
                onClick={() => setOpenModalCreate(false)}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <List className={classes.list_class}>
        {tasks.map((task: ITask, i: number) => {
          return (
            <ListItem
              key={i}
              className={classes.list_item_class}
              onClick={() => handleOpenUpdateModal(i)}
            >
              <ListItemText
                className={tasks[i].taskDone ? classes.task_done_class : ""}
                primary={task.taskName}
              />
              <ListItemSecondaryAction>
                <IconButton onClick={() => toggleDone(i)}>
                  <Check className={classes.icon_class} />
                </IconButton>
                <IconButton onClick={() => handleDelete(i)}>
                  <DeleteIcon className={classes.icon_class} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <Modal
        className={classes.modal_class}
        open={openModalUpdate}
        onClose={() => setOpenModalUpdate(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalUpdate}>
          <Box component="div" className={classes.paper_class}>
            <Typography variant="h4" className={classes.modal_title_class}>
              Edit the task
            </Typography>
            <CssTextField
              value={updateTask?.taskName}
              label="Task name"
              className={classes.modal_input_class}
              variant="outlined"
              onChange={(e) => setUpdateTaskMethod(e.target.value)}
              InputLabelProps={{
                className: classes.textfield_label_class,
              }}
              InputProps={{
                className: classes.textfield_text_class,
              }}
            />
            <Box component="div" className={classes.modal_div_buttons_class}>
              <Button
                className={classes.modal_button_class}
                onClick={() => handleUpdate()}
              >
                Update
              </Button>
              <Button
                className={classes.modal_button_class}
                onClick={() => setOpenModalUpdate(false)}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default App;
