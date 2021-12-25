import React, { useEffect, useState } from "react";
import { Btn } from "../../global";
import { Container, ContentBtn, Form } from "./styles";
import adicionar from "../../assets/adicionar.png";
import icone_lista from "../../assets/icone_lista.png";
import editar from "../../assets/icone_editar.png";
import excluir_lista from "../../assets/icone_deletar_lista.png";
import excluir_tarefa from "../../assets/icone_deletar_tarefa-subtarefa.png";
import TextField from "@material-ui/core/TextField";
import { Header } from "../../components/Header";
import { Tasks } from "./Tasks";

export function CreateLists() {
  const [lists, setLists] = useState([
    { id: "", name: "", tasks: [{ id: "", task: "" }] },
  ]);
  const [nameList, setNameList] = useState([]);
  const [nameTasks, setNameTasks] = useState([]);
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

  const editButton = (id) => {
    if (status) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  function createList(e) {
    e.preventDefault();
    if (nameList === "" && nameTasks === "") {
      alert("Nome da Lista é obrigatório!!!");
    } else {
      let uuid = id();
      localStorage.setItem("nameList", JSON.stringify(nameList));
      localStorage.setItem("nameTasks", JSON.stringify(nameTasks));
      localStorage.setItem("lists", JSON.stringify(lists));
      setLists([
        ...lists,
        {
          id: uuid,
          name: nameList,
          tasks: [{ id: uuid + 1, task: nameTasks }],
        },
      ]);
      console.log("criou", lists);
    }
  }


  const deleteList = (id) => {
    const newList = lists.filter((item) => {
      return item.id !== id;
    });
    setLists(newList);
    localStorage.setItem("lists", JSON.stringify(newList));
    console.log("deletou", newList);
  };

  return (
    <>
      <Header />
      <Container>
        <h2 className="text">Criar Lista</h2>
        <Form className={"listForm"} autoComplete="off">
          <Tasks
            required
            name="nameList"
            placeholder="Digite o nome da lista..."
            variant="outlined"
            onChange={(e) => {
              setNameList(e.target.value);
            }}
            InputProps={{ disableUnderline: true }}
          />
          <Tasks
            required
            name="nameTasks"
            placeholder="Adicionar tarefa"
            variant="outlined"
            onChange={(e) => {
              setNameTasks(e.target.value);
            }}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <button className="btn" >
                  <img src={adicionar} alt="imagem de adicionar" />
                </button>
              ),
            }}
          />
          
        </Form>
        <ContentBtn>
          <Btn color="greeny">Cancelar</Btn>
          <Btn color="orange" onClick={createList}>
            Criar Lista
          </Btn>
        </ContentBtn>

        {lists &&
          lists.map((list) => {
            return (
              <div key={list.id}>
                <TextField
                  key={list.id}
                  value={list.name}
                  InputProps={{
                    endAdornment: (
                      <>
                        <button className="btn">
                          <img src={editar} alt="editar" onClick={editButton} />
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
                      </>
                    ),
                    startAdornment: (
                      <button className="btn">
                        <img src={icone_lista} alt="icone lista" />
                      </button>
                    ),
                  }}
                />
                {list &&
                  list.tasks.map((name) => (
                    <TextField
                      key={name.id}
                      value={name.task}
                      InputProps={{
                        endAdornment: (
                          <button className="btn">
                            <img
                              src={excluir_tarefa}
                              alt="excluir"
                              onClick={() => {
                                deleteList(id);
                              }}
                            />
                          </button>
                        ),
                      }}
                    />
                  ))}
              </div>
            );
          })}
      </Container>
    </>
  );
}
