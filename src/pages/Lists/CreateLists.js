import React, { useEffect, MouseEvent, useState, ChangeEvent } from "react";
import { Btn } from "../../global";
import { Container, ContentBtn, Form } from "./styles";
import adicionar from "../../assets/adicionar.png";
import icone_lista from "../../assets/icone_lista.png";
import editar from "../../assets/icone_editar.png";
import excluir_lista from "../../assets/icone_deletar_lista.png";
import excluir_tarefa from "../../assets/icone_deletar_tarefa-subtarefa.png";
import TextField from "@material-ui/core/TextField";
import { Header } from "../../components/Header";

export function CreateLists() {
  const [lists, setLists] = useState([
    {
      id: "",
      nameList: "",
      tasks: [
        {
          id: "",
          nameTask: "",
          subTarefa: [
            {
              id: "",
              Subtarefa: "",
            },
          ],
        },
      ],
    },
  ]);
  const [nameList, setNameList] = useState([]);
  const [nameTasks, setNameTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("nameList", JSON.stringify(nameList));
    localStorage.setItem("nameTask", JSON.stringify(nameTasks));
  }, [nameList, nameTasks]);

  useEffect(() => {
    const retrieveLists = JSON.parse(localStorage.getItem("nameList") || "{}");
    const retrieveTasks = JSON.parse(localStorage.getItem("nameTask") || "{}");
    setNameList(...nameList, retrieveLists);
    setNameTasks(...nameTasks, retrieveTasks);
    console.log(retrieveTasks, retrieveLists);
  }, []);

  const addTasks = (e) => {
    e.preventDefault();
    console.log("clicou");
  };

  function onChange(e) {
    setLists({ ...lists, [e.target.name]: e.target.value });
  }

  const creatList = (e) => {
    e.preventDefault();
  };

  const createTask = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <Container>
        <h2 className="text">Criar Lista</h2>
        <Form className={""} noValidate autoComplete="off">
          <TextField
            name="nameList"
            placeholder="Digite o nome da lista..."
            variant="outlined"
            onChange={(e) => setLists({ nameList: e.target.value })}
          />
          <TextField
            name="nameTask"
            placeholder="Adicionar tarefa"
            variant="outlined"
            onChange={(e) => setLists({ nameTask: e.target.value })}
            InputProps={{
              endAdornment: (
                <button className="btn" onClick={createTask}>
                  <img src={adicionar} alt="imagem de adicionar" />
                </button>
              ),
            }}
          />
        </Form>

        <ContentBtn>
          <Btn color="greeny">Cancelar</Btn>
          <Btn color="orange" onClick={addTasks}>
            Criar Lista
          </Btn>
        </ContentBtn>

        <TextField
          value={nameList}
          InputProps={{
            endAdornment: (
              <>
                <button className="btn" onClick={createTask}>
                  <img src={editar} alt="imagem de adicionar" />
                </button>
                <button className="btn" onClick={createTask}>
                  <img src={excluir_lista} alt="imagem de adicionar" />
                </button>
              </>
            ),
            startAdornment: (
              <button className="btn" onClick={createTask}>
                <img src={icone_lista} alt="imagem de adicionar" />
              </button>
            ),
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
  );
}

// import React, { useEffect, MouseEvent, useState, ChangeEvent } from "react";
// import { Btn } from '../../global'
// import { Container, ContentBtn, Form } from './styles'
// import adicionar from "../../assets/adicionar.png";
// import icone_lista from "../../assets/icone_lista.png";
// import editar from "../../assets/icone_editar.png";
// import excluir_lista from "../../assets/icone_deletar_lista.png";
// import excluir_tarefa from "../../assets/icone_deletar_tarefa-subtarefa.png";
// import TextField from '@material-ui/core/TextField';
// import { Header } from "../../components/Header";

// export function CreateLists() {

//   const [lists, setLists] = useState(
//     {
//       nameList: "",
//       nameTask: "",
//     }
//   );
//   const [nameList, setNameList] = useState([])
//   const [nameTasks, setNameTasks] = useState([])

//   useEffect(() => {
//     localStorage.setItem('nameList', JSON.stringify(nameList))
//     localStorage.setItem('nameTask', JSON.stringify(nameTasks))
//   }, [ nameList, nameTasks]);

//   useEffect(() => {
//     const retrieveLists = JSON.parse(localStorage.getItem('nameList') || "")
//     const retrieveTasks = JSON.parse(localStorage.getItem('nameTask') || "")
//     setNameList(retrieveLists)
//     setNameTasks(retrieveTasks)
//     console.log(nameList)
//     console.log(nameTasks)
//   }, []);

//   function onChange(e: ChangeEvent<HTMLInputElement>) {
//     setLists({
//       ...lists,
//       [e.target.name]: e.target.value
//     })
//   }

//   const creatList = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault()
//     const retrieveLists = JSON.parse(localStorage.getItem('nameList')!)
//     const retrieveTasks = JSON.parse(localStorage.getItem('nameTask')!)
//     setNameList(retrieveLists)
//     setNameTasks(retrieveTasks)

//   }

//   const createTask = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     console.log(nameTasks)

//   }

//   return (
//     <>
//       <Header />
//       <Container>
//         <h2 className="text">Criar Lista</h2>
//         <Form className={""} noValidate autoComplete="off">
//           <TextField
//             name="nameList"
//             placeholder="Digite o nome da lista..."
//             variant="outlined"
//             onChange={onChange}
//           />
//           <TextField
//             name="nameTask"
//             placeholder="Adicionar tarefa"
//             variant="outlined"
//             onChange={onChange}
//             InputProps={{
//               endAdornment: (
//                 <button className="btn" onClick={createTask}>
//                   <img src={adicionar} alt="imagem de adicionar" />
//                 </button>
//               ),
//             }}
//           />
//         </Form>

//         <ContentBtn>
//           <Btn color="greeny">Cancelar</Btn>
//           <Btn color="orange" onClick={creatList}>Criar Lista</Btn>
//         </ContentBtn>

//         <TextField
//           value={lists.nameList}
//           InputProps={{
//             endAdornment: (
//               <>
//                 <button className="btn" >
//                   <img src={editar} alt="imagem de adicionar" />
//                 </button>
//                 <button className="btn" >
//                   <img src={excluir_lista} alt="imagem de adicionar" />
//                 </button>
//               </>
//             ),
//             startAdornment: (
//               <button className="btn" >
//                 <img src={icone_lista} alt="imagem de adicionar" />
//               </button>
//             )
//           }}
//         />
//         <TextField
//           value={lists.nameTask}
//           InputProps={{
//             endAdornment: (
//               <button className="btn" onClick={createTask}>
//                 <img src={excluir_lista} alt="imagem de adicionar" />
//               </button>
//             ),
//           }}
//         />

//       </Container>
//     </>
//   )
// }
