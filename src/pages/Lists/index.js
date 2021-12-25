import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Tasks } from "./Tasks";
import { SubTasks } from "./SubTasks";
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
} from "./styles";
import { Link } from "react-router-dom";

export function Lists() {
  const [status, setStatus] = useState(false);
  const [lists, setLists] = useState([
    {
      id: "1",
      nameList: "Lista 1",
      tasks: [
        {
          id: "1.1",
          nameTask: "Tarefa 1",
          subTarefa: [
            {
              id: "1.1.1",
              Subtarefa: "Subtarefa 1",
            },
            {
              id: "2",
              Subtarefa: "Subtarefa 2",
            },
            {
              id: "3",
              Subtarefa: "Subtarefa 3",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      nameList: "Lista 2",
      tasks: [{}],
    },
    {
      id: "3",
      nameList: "Lista 3",
      tasks: [{}],
    },
  ]);

  const deleteButton = (id) => {
    console.log("clicou")
  };

  const handleEditButton = (id) => {
    if (status) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

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
          lists.map((list) => {
            return (
              <ContainerList key ={list.id}>
                <ContentList >
                  <div>
                    <button className="btn">
                      <img src={icone_lista} alt="adicionar" />
                    </button>
                    <span>
                      {status ? (
                        <Tasks
                          placeholder={list.nameList}
                          name="nameList"
                          onClick
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
                          handleEditButton(list.id);
                        }}
                      />
                    </button>
                    <button className="btn">
                      <img
                        src={excluir_lista}
                        alt="excluir"
                        onClick={() => {
                          deleteButton(list.id);
                        }}
                      />
                    </button>
                  </div>
                </ContentList>
                {status && (
                  <Tasks
                    placeholder="Adicionar tarefa"
                    name="addTasks"
                    onClick
                  />
                )}
                {list.tasks &&
                  list.tasks.map((task) => (
                    <>
                      {task.nameTask ? (
                        <>
                          <ContentList key={task.id}>
                            <div className="tasks">
                              <input
                                type="checkbox"
                                value={task.id}
                                className="sub"
                              />
                              <p>{task.nameTask}</p>
                            </div>
                            <ContentBtn>
                              <button className="btn">
                                <img src={excluir_tarefa} alt="excluir"  onClick={()=>{deleteButton(task.id)}}/>
                              </button>
                            </ContentBtn>
                          </ContentList>
                          <ul className="separator">
                            {task.subTarefa &&
                              task.subTarefa.map((sub) => (
                                <SubTasks
                                key={sub.id}
                                  value={sub.id}
                                  textList={sub.Subtarefa}
                                  src={excluir_tarefa}
                                  alt="excluir"
                                  onClick={()=>{deleteButton(sub.id)}}
                                />
                              ))}
                            {status && (
                              <Tasks
                                placeholder="Adicionar subtarefa"
                                name="addSubTasks"
                              />
                            )}
                          </ul>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
              </ContainerList>
            );
          })}
      </Container>
    </>
  );
}
