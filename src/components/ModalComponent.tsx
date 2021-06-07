import {
  Backdrop,
  Box,
  Button,
  Fade,
  makeStyles,
  Modal,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
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
  modal_input_class: {
    width: "100%",
    margin: "10px auto",
  },
  textfield_label_class: {
    color: "white",
  },
  textfield_text_class: {
    color: "white",
  },
});

function ModalComponent(props: any): JSX.Element {
  const classes = useStyles();

  const [inputTaskName, setInputTaskName] = useState<string>("");
  const [inputTaskDescription, setInputTaskDescription] = useState<string>("");

  const handleSubmit = (): void => {
    const newTask: ITask[] = [
      ...props.tasks,
      {
        taskName: inputTaskName,
        taskDescription: inputTaskDescription,
        taskDone: false,
      },
    ];
    props.setTasks(newTask);
    props.onClose();
    // setInputTaskName("");
    // setInputTaskDescription("");
  };

  const handleUpdate = (): void => {
    const newTask: ITask[] = [...props.tasks];
    newTask[props.idSelected].taskName = inputTaskName;
    newTask[props.idSelected].taskDescription = inputTaskDescription;
    props.setTasks(newTask);
    props.onClose();
    // setInputTaskName("");
    // setInputTaskDescription("");
  };

  return (
    <Modal
      className={classes.modal_class}
      open={props.isOpen}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.isOpen}>
        <Box component="div" className={classes.paper_class}>
          <Typography variant="h4" className={classes.modal_title_class}>
            {props.create ? "Create task" : "Update task"}
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
              onClick={() => {
                props.create ? handleSubmit() : handleUpdate();
              }}
            >
              {props.create ? "Create" : "Update"}
            </Button>
            <Button
              className={classes.modal_button_class}
              onClick={props.onClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalComponent;
