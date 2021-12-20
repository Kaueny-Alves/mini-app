import { TextField } from '@material-ui/core'
import React, { ChangeEvent, useState } from 'react'
import { Header } from '../../components/Header'
import icone_lista from "../../assets/icone_lista.png";
import adicionar from "../../assets/adicionar.png";
import editar from "../../assets/icone_editar.png";
import excluir_lista from "../../assets/icone_deletar_lista.png";
import excluir_tarefa from "../../assets/icone_deletar_tarefa-subtarefa.png";
import { Container, ContentTitle, ContainerList } from './styles';
import { Link } from 'react-router-dom';



export function Lists() {

  const [lists, setLists] = useState([{
    id: "1",
    nameList: "Lista 1",
    tasks: [{
      id: "1",
      nameTask: "Tarefa 1",
      subTarefa: [{
        id: "1",
        Subtarefa: "Subtarefa 1"
      },
      {
        id: "2",
        Subtarefa: "Subtarefa 2"
      },
      {
        id: "3",
        Subtarefa: "Subtarefa 3"
      }
      ]
    }]
  },
  {
    id: "2",
    nameList: "Lista 2",
    tasks: [{
      id: "",
      nameTask: "",
      subTarefa: [{
        id: "",
        Subtarefa: ""
      }]
    }]
  },
  {
    id: "3",
    nameList: "Lista 3",
    tasks: [{
      id: "",
      nameTask: "",
      subTarefa: [{
        id: "",
        Subtarefa: ""
      }]
    }]
  }])

  return (
    <>
      <Header />
      <Container>
        <ContentTitle>
          <h2 className="text">Listas</h2>
          <Link to={'/create'}>
          <button className="btn" >
            <img src={adicionar} alt="imagem de adicionar" />
          </button>
          </Link>
        </ContentTitle>
        {lists && lists.map((list) => {
          return <ContainerList>
            <div>
              <button className="btn" >
                <img src={icone_lista} alt="imagem de adicionar" />
              </button>
              {list.nameList}
            </div>
            <div>
              <button className="btn" >
                <img src={editar} alt="imagem de adicionar" />
              </button>
              <button className="btn" >
                <img src={excluir_lista} alt="imagem de adicionar" />
              </button>
            </div>
          </ContainerList>
        })}
      </Container>
    </>
  )
}
