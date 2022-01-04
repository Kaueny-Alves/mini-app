import React, { useState, useEffect } from "react";
import { Btn } from "../../global";
import { Link } from "react-router-dom";
import { Container, ContentBtn, Form, Error } from "./styles";
import adicionar from "../../assets/adicionar.png";
import icone_lista from "../../assets/icone_lista.png";
import editar from "../../assets/icone_editar.png";
import excluir_lista from "../../assets/icone_deletar_lista.png";
import excluir_tarefa from "../../assets/icone_deletar_tarefa-subtarefa.png";
import TextField from "@material-ui/core/TextField";
import { Header } from "../../components/Header";
import { Tasks } from "./Tasks";
import * as yup from "yup";

export function CreateLists() {
  const [lists, setLists] = useState([]);
  const [nameList, setNameList] = useState([]);
  const [nameTasks, setNameTasks] = useState([""]);
  const [status, setStatus] = useState(false);

  function id() {
    let randomized = Math.ceil(Math.random() * Math.pow(10, 5));
    let digito = Math.ceil(Math.log(randomized));
    while (digito > 10) {
      digito = Math.ceil(Math.log(digito));
    }
    let uuid = `${randomized}-${digito}`;
    return uuid;
  }

  function editButton(item) {
    if (item.id === id) {
      setStatus(!status);
    }
  }

  async function createList(e) {
    e.preventDefault();
    let uuid = id();
    if (await validate()) {
      const saveUser = true;
      if (saveUser) {
        setLists([
          ...lists,
          {
            id: uuid,
            list: nameList,
            tasks: nameTasks.map((item) => item),
          },
        ]);
      } else {
        setStatus("error");
      }
    }

    async function validate() {
      let schema = yup.object().shape({
        nameList: yup.string().nullable().required(),
      });
      try {
        await schema.validate({ nameList });

        setStatus("success");
        return true;
      } catch (err) {
        setStatus("error");
        return false;
      }
    }
  }

  function addInput(e) {
    e.preventDefault();
    setNameTasks([...nameTasks, ""]);
  }

  const inputTask = (e, index) => {
    nameTasks[index] = e.target.value;
    setNameTasks([...nameTasks]);
  };

  const deleteList = (id) => {
    const newList = lists.filter((item) => {
      return item.id !== id;
    });
    setLists(newList);
  };

  const deleteTask = (position) => {
    lists.filter((item) =>
      item.tasks.filter((task, index) => index !== position)
    );
    console.log("delete");
  };

  return (
    <>
      <Header />
      <Container>
        <h2 className="text">Criar Lista</h2>
        <Error>
          {status === "error" ? <p>O nome da Lista é obrigatório!</p> : ""}
        </Error>
        <Form>
          <Tasks
            id="list"
            label="Digite o nome da lista..."
            placeholder="Digite o nome da lista..."
            variant="outlined"
            onChange={(e) => {
              setNameList(e.target.value);
            }}
            InputProps={{ disableUnderline: true }}
          />

          {nameTasks.map((task, index) => (
            <Tasks
              label={`Adicionar tarefa ${index + 1}`}
              key={index}
              id={`task${index + 1}`}
              name="task"
              value={task}
              onChange={(e) => {
                inputTask(e, index);
              }}
              placeholder={`Adicionar tarefa ${index + 1}`}
              variant="outlined"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <button className="btn" onClick={addInput}>
                    <img src={adicionar} alt="imagem de adicionar" />
                  </button>
                ),
              }}
            />
          ))}
        </Form>
        <ContentBtn>
          <Link to={"/lists"}>
            <Btn color="greeny">Cancelar</Btn>
          </Link>
          <Btn color="orange" onClick={createList}>
            Criar Lista
          </Btn>
        </ContentBtn>
        <Container>
          {lists.length > 0
            ? lists.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <TextField
                      value={item.list}
                      InputProps={{
                        endAdornment: (
                          <>
                            <button className="btn">
                              <img
                                src={editar}
                                alt="editar"
                                onClick={() => {
                                  editButton(item.id);
                                }}
                              />
                            </button>
                            <button className="btn">
                              <img
                                src={excluir_lista}
                                alt="excluir"
                                onClick={() => {
                                  deleteList(item.id);
                                }}
                              />
                            </button>
                          </>
                        ),
                        startAdornment: (
                          <button className="btn">
                            <img src={icone_lista} alt="icone lista" />
                          </button>
                        ),
                      }}
                    />

                    {item.tasks.length > 0 &&
                      item.tasks.map((item, index) => (
                        <TextField
                          key={index}
                          value={item}
                          InputProps={{
                            startAdornment: (
                              <div className="btn">
                                <input
                                  type="checkbox"
                                  value={item}
                                  color="green"
                                  className="sub"
                                />
                              </div>
                            ),
                            endAdornment: (
                              <button
                                className="btn"
                                onClick={() => {
                                  deleteTask(index);
                                }}
                              >
                                <img src={excluir_tarefa} alt="excluir" />
                              </button>
                            ),
                          }}
                        />
                      ))}
                  </div>
                );
              })
            : ""}
        </Container>
      </Container>
    </>
  );
}
