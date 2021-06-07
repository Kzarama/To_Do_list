import {
  Button,
  List,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Check from "@material-ui/icons/Check";
import React, { useState } from "react";
import ITask from "../Interface/ITask";
import ModalComponent from "../components/ModalComponent";

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
});

function App(): JSX.Element {
  const classes = useStyles();

  const [idSelected, setIdSelected] = useState<number>(-1);

  const [tasks, setTasks] = useState<ITask[]>([]);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalCreate, setModalCreate] = useState<boolean>(false);

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

  //   const handleOpenUpdateModal = (i: number) => {};

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.typography_class}>
        To Do list
      </Typography>
      <Button
        className={classes.add_button_class}
        onClick={() => {
          setOpenModal(true);
          setModalCreate(true);
        }}
      >
        Add task
      </Button>

      <List className={classes.list_class}>
        {tasks.map((task: ITask, i: number) => {
          return (
            <ListItem
              key={i}
              className={classes.list_item_class}
              onClick={() => {
                setOpenModal(true);
                setIdSelected(i);
                setModalCreate(false);
              }}
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
      <ModalComponent
        create={modalCreate}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        tasks={tasks}
        setTasks={setTasks}
        idSelected={idSelected}
      ></ModalComponent>
    </div>
  );
}

export default App;
