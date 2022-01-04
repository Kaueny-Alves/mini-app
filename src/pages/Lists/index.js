import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Tasks } from "./Tasks";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import icone_lista from "../../assets/icone_lista.png";
import adicionar from "../../assets/adicionar.png";
import editar from "../../assets/icone_editar.png";
import excluir_lista from "../../assets/icone_deletar_lista.png";
import excluir_tarefa from "../../assets/icone_deletar_tarefa-subtarefa.png";
import {
  Container,
  ContentTitle,
  ContentList,
  ContainerList,
  ContentBtn,
  ContentSub,
} from "./styles";
import { Link } from "react-router-dom";


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    overflow: "auto",
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 350,
    height: 40,
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export function Lists() {
  const classes = useStyles();
  const [checked, setChecked] = useState([]);
  const [status, setStatus] = useState(false);
  const [nameList, setNameList] = useState([]);
  const [nameTasks, setNameTasks] = useState([""]);
  const [lists, setLists] = useState([
    {
      id: "1",
      nameList: ["Lista 1"],
      tasks: [
        {
          nameTask: ["Tarefa 1"],
          subTarefa: ["Subtarefa 1", "Subtarefa 2", "Subtarefa 3"],
        },
      ],
    },
    {
      id: "2",
      nameList: ["Lista 2"],
      tasks: [],
    },
    {
      id: "3",
      nameList: ["Lista 3"],
      tasks: [],
    },
  ]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  // async function createList(e) {
  //   e.preventDefault();
  //   let uuid = Math.random() * 10;

  //   setLists([
  //     ...lists,
  //     {
  //       id: uuid,
  //       nameList: nameList,
  //       tasks: nameTasks.map((item) => item),
  //     },
  //   ]);
  // }

  const deleteList = (id) => {
    const newList = lists.filter((item) => {
      return item.id !== id;
    });
    setLists(newList);

    console.log("deletou", newList);
  };

  // const deleteTask = (index) => {
  //   const newTask = lists.tasks.filter((_, item) => {
  //     return item !== index;
  //   });
  //   setLists([...lists, { tasks: [{ newTask }] }]);

  //   console.log("deletou", newTask);
  // };

  function editButton(id) {
    lists.filter((item) => {
      return item.id === id;
      setStatus(!status);
    });
    setStatus(!status);
  }

  const customList = (title, items) => (
    <div>
      <ContentSub className="sub-task">
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <GreenCheckbox
              color="default"
              onClick={handleToggleAll(items)}
              checked={
                numberOfChecked(items) === items.length && items.length !== 0
              }
              indeterminate={
                numberOfChecked(items) !== items.length &&
                numberOfChecked(items) !== 0
              }
              disabled={items.length === 0}
              inputProps={{ "aria-label": "all items selected" }}
            />
          }
          title={title}
        />
        <ContentBtn>
          <button className="btn">
            <img src={excluir_tarefa} alt="excluir"  />
          </button>
        </ContentBtn>
      </ContentSub>
      <Divider />
      {items.map((value, index) => {
        const labelId = `transfer-list-all-item-${value}-label`;
        return (
          <ContentSub key={index}>
            <div className="sub-tasks">
              <List className={classes.list} dense component="div" role="list">
                <ListItem
                  key={value}
                  role="listitem"
                  button
                  onClick={handleToggle(value)}
                >
                  <ListItemIcon>
                    <GreenCheckbox
                      color="default"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={value} />
                </ListItem>
              </List>
              <ContentBtn>
                <button className="btn">
                  <img src={excluir_tarefa} alt="excluir" onClick={() => {}} />
                </button>
              </ContentBtn>
            </div>
          </ContentSub>
        );
      })}
      {status && (
        <Tasks
          placeholder="Adicionar subtarefa"
          name="addSubTasks"
          InputProps={{
            disableUnderline: true,
          }}
        />
      )}
    </div>
  );

  return (
    <>
      <Header />
      <Container>
        <ContentTitle>
          <h2 className="text">Listas</h2>
          <Link to={"/create"}>
            <button className="btn">
              <img src={adicionar} alt="imagem de adicionar" />
            </button>
          </Link>
        </ContentTitle>
        {lists &&
          lists.map((list, index) => {
            return (
              <ContainerList key={index}>
                <ContentList>
                  <div>
                    <button className="btn">
                      <img src={icone_lista} alt="adicionar" />
                    </button>
                    <span>
                      {status ? (
                        <Tasks
                          InputProps={{
                            disableUnderline: true,
                          }}
                          placeholder={list.nameList}
                          name="nameList"
                        />
                      ) : (
                        list.nameList
                      )}
                    </span>
                  </div>
                  <div>
                    <button className="btn">
                      <img
                        src={editar}
                        alt="editar"
                        onClick={() => {
                          editButton(list.id);
                        }}
                      />
                    </button>
                    <button className="btn">
                      <img
                        src={excluir_lista}
                        alt="excluir"
                        onClick={() => {
                          deleteList(list.id);
                        }}
                      />
                    </button>
                  </div>
                </ContentList>
                {status && (
                  <Tasks
                    InputProps={{
                      disableUnderline: true,
                    }}
                    placeholder="Adicionar tarefa"
                    name="addTasks"
                  />
                )}
                {list.tasks &&
                  list.tasks.map((task, index) => (
                    <div key={index}>
                      {task.nameTask ? (
                        <div>
                          <ContentSub>
                            <div>
                              <Grid
                                container
                                spacing={2}
                                justifyContent="center"
                                alignItems="center"
                                className={classes.root}
                              >
                                <Grid item>
                                  {customList(task.nameTask, task.subTarefa)}
                                </Grid>
                              </Grid>
                            </div>
                          </ContentSub>
                          <ul className="separator"></ul>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
              </ContainerList>
            );
          })}
      </Container>
    </>
  );
}
