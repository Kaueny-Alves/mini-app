import { TextField } from "@material-ui/core";
import { useState } from "react";
import * as React from "react";
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
  const [lists, setLists] = useState([
    {
      id: "1",
      nameList: "Lista 1",
      tasks: [
        {
          id: "1",
          nameTask: "Tarefa 1",
          subTarefa: [
            {
              id: "1",
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
    // {
    //   id: "2",
    //   nameList: "Lista 2",
    //   tasks: [{
    //     id: "",
    //     nameTask: "",
    //     subTarefa: [{
    //       id: "",
    //       Subtarefa: ""
    //     }]
    //   }]
    // },
    // {
    //   id: "3",
    //   nameList: "Lista 3",
    //   tasks: [{
    //     id: "",
    //     nameTask: "",
    //     subTarefa: [{
    //       id: "",
    //       Subtarefa: ""
    //     }]
    //   }]
    //  }
  ]);

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
        {lists.length > 0 &&
          lists.map((list) => {
            return (
              <ContainerList>
                <ContentList>
                  <div>
                    <button className="btn">
                      <img src={icone_lista} alt="adicionar" />
                    </button>
                    <span>{list.nameList}</span>
                  </div>
                  <div>
                    <button className="btn">
                      <img src={editar} alt="editar" />
                    </button>
                    <button className="btn">
                      <img src={excluir_lista} alt="excluir" />
                    </button>
                  </div>
                </ContentList>
                <Tasks placeholder="Adicionar tarefa" name="addTasks" onClick />
                {list.tasks.length > 0 &&
                  list.tasks.map((task) => (
                    <>
                      <ContentList>
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
                            <img src={excluir_tarefa} alt="excluir" />
                          </button>
                        </ContentBtn>
                      </ContentList>
                      <ul className="separator">
                        {task.subTarefa.length > 0 &&
                          task.subTarefa.map((sub) => (
                            <ContentBtn>
                              <SubTasks
                                value={sub.id}
                                textList={sub.Subtarefa}
                                src={excluir_tarefa}
                                alt="excluir"
                              />
                            </ContentBtn>
                          ))}
                        <Tasks
                          placeholder="Adicionar subtarefa"
                          name="addSubTasks"
                        />
                      </ul>
                    </>
                  ))}
              </ContainerList>
            );
          })}
      </Container>
    </>
  );
}
