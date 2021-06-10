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

// Styles of the text field
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

// General styles
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
  primary_text_class: {
    fontSize: "18px",
    color: "white",
  },
  secondary_text_class: {
    fontSize: "12px",
    color: "#a6a6a6",
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
    width: "30%",
    padding: "15px 40px 15px 40px",
  },
  modal_title_class: {
    textAlign: "center",
    margin: "0px auto 15px auto",
  },
  modal_input_class: {
    width: "100%",
    margin: "10px auto",
  },
  modal_button_class: {
    color: "#00ccff",
    width: "35%",
    margin: "10px 10px 10px 10px",
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

/**
 * Function app
 * @returns The dom with the components of the app
 */
function App(): JSX.Element {
  /**
   * Styles of the components
   */
  const classes = useStyles();
  /**
   * State to open the respective modals
   */
  const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);
  const [openModalUpdate, setOpenModalUpdate] = useState<boolean>(false);
  /**
   * State with the inputs of the task to create
   */
  const [inputTaskName, setInputTaskName] = useState<string>("");
  const [inputTaskDescription, setInputTaskDescription] = useState<string>("");
  /**
   * State with the inputs of the task to update
   */
  const [updateTaskName, setUpdateTaskName] = useState<string>();
  const [updateTaskDescription, setUpdateTaskDescription] = useState<string>();
  /**
   * Id of the task selected to update
   */
  const [idSelected, setIdSelected] = useState<number>(-1);
  /**
   * State with all task saved
   */
  const [tasks, setTasks] = useState<ITask[]>([]);
  /**
   * Save a task, clean the inputs and close the modal
   */
  const handleSubmit = (): void => {
    const newTask: ITask[] = [
      ...tasks,
      {
        taskName: inputTaskName,
        taskDescription: inputTaskDescription,
        taskDone: false,
      },
    ];
    setTasks(newTask);
    setInputTaskName("");
    setInputTaskDescription("");
    setOpenModalCreate(false);
  };
  /**
   * Change the state of done of a task
   * @param i id of the task to change done state
   */
  const toggleDone = (i: number): void => {
    const taskDone: ITask[] = [...tasks];
    taskDone[i].taskDone = !taskDone[i].taskDone;
    setTasks(taskDone);
  };
  /**
   * Delete a task
   * @param i id of the task to delete
   */
  const handleDelete = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };
  /**
   * Update the information of a task, clean the state of the inputs and close the modal
   */
  const handleUpdate = (): void => {
    const newTask: ITask[] = [...tasks];
    newTask[idSelected].taskName =
      updateTaskName || newTask[idSelected].taskName;
    newTask[idSelected].taskDescription =
      updateTaskDescription || newTask[idSelected].taskDescription;
    setTasks(newTask);
    setInputTaskName("");
    setInputTaskDescription("");
    setOpenModalUpdate(false);
  };
  /**
   * Set the id of the task to update and open the modal to update
   * @param i id of the task to update
   */
  const handleOpenUpdateModal = (i: number) => {
    setOpenModalUpdate(true);
    setUpdateTaskName(tasks[i].taskName);
    setUpdateTaskDescription(tasks[i].taskDescription);
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
              value={inputTaskName}
              label="Task name"
              className={classes.modal_input_class}
              variant="outlined"
              onChange={(e) => setInputTaskName(e.target.value)}
              InputLabelProps={{
                className: classes.textfield_label_class,
              }}
              InputProps={{
                className: classes.textfield_text_class,
              }}
            />
            <CssTextField
              value={inputTaskDescription}
              label="Task description"
              className={classes.modal_input_class}
              variant="outlined"
              onChange={(e) => setInputTaskDescription(e.target.value)}
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
                primary={
                  <Typography className={classes.primary_text_class}>
                    {task.taskName}
                  </Typography>
                }
                secondary={
                  <Typography className={classes.secondary_text_class}>
                    {task.taskDescription}
                  </Typography>
                }
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
              value={updateTaskName}
              label="Task name"
              className={classes.modal_input_class}
              variant="outlined"
              onChange={(e) => setUpdateTaskName(e.target.value)}
              InputLabelProps={{
                className: classes.textfield_label_class,
              }}
              InputProps={{
                className: classes.textfield_text_class,
              }}
            />
            <CssTextField
              value={updateTaskDescription}
              label="Task name"
              className={classes.modal_input_class}
              variant="outlined"
              onChange={(e) => setUpdateTaskDescription(e.target.value)}
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
