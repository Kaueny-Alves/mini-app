import React, { useEffect, MouseEvent, useState, ChangeEvent } from "react";
import { Btn } from '../../global'
import { Container, ContentBtn, Form } from './styles'
import adicionar from "../../assets/adicionar.png";
import icone_lista from "../../assets/icone_lista.png";
import editar from "../../assets/icone_editar.png";
import excluir_lista from "../../assets/icone_deletar_lista.png";
import excluir_tarefa from "../../assets/icone_deletar_tarefa-subtarefa.png";
import TextField from '@material-ui/core/TextField';
import { Header } from "../../components/Header";

interface ILists {
  id: string;
  nameList: string;
  tasks: [{
    id: string;
    nameTask: string;
  }]
}

export function CreateLists() {

  const [lists, setLists] = useState([])
  const [nameList, setNameList] = useState([])
  const [nameTasks, setNameTasks] = useState([])

  useEffect(() => {
    localStorage.setItem('nameList', JSON.stringify(nameList))
    localStorage.setItem('nameTask', JSON.stringify(nameTasks))
  }, [nameList, nameTasks]);

  useEffect(() => {
    const retrieveLists = JSON.parse(localStorage.getItem('nameList') || "")
    const retrieveTasks = JSON.parse(localStorage.getItem('nameTask') || "")
    setNameList(retrieveLists)
    setNameTasks(retrieveTasks)
    console.log(retrieveTasks, retrieveLists)
  }, []);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setLists({
      ...lists,
      [e.target.name]: e.target.value
    })
  }

  const creatList = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setNameList(lists)
  }

  const createTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNameTasks(lists)
  }

  return (
    <>
    <Header/>
    <Container>
      <h2 className="text">Criar Lista</h2>
      <Form className={""} noValidate autoComplete="off">
        <TextField
          name="nameList"
          placeholder="Digite o nome da lista..."
          variant="outlined"
          onChange={onChange}
        />
        <TextField
          name="nameTask"
          placeholder="Adicionar tarefa"
          variant="outlined"
          onChange={onChange}
          InputProps={{
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
        <Btn color="orange" onClick={creatList}>Criar Lista</Btn>
      </ContentBtn>

      <TextField
        value={nameList}
        InputProps={{
          endAdornment: (
            <>
              <button className="btn" >
                <img src={editar} alt="imagem de adicionar" />
              </button>
              <button className="btn" >
                <img src={excluir_lista} alt="imagem de adicionar" />
              </button>
            </>
          ),
          startAdornment: (
            <button className="btn" >
              <img src={icone_lista} alt="imagem de adicionar" />
            </button>
          )
        }}
      />
      <TextField
        value={nameTasks}
        InputProps={{
          endAdornment: (
            <button className="btn" onClick={createTask}>
              <img src={excluir_lista} alt="imagem de adicionar" />
            </button>
          ),
        }}
      />

    </Container>
    </>
  )
}


