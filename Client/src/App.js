import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/SearchBar/Nav';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

const Body = styled.div`
background-color: #fffab5a2;
`

function App() {

   const location = useLocation();

   const [characters, setCharacters] = useState([])

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data])
         }

      } catch (error) {
         alert('¡No hay personajes con este ID!')

      }
   }

   const onClose = (id) => {
      const charactersFilter = characters.filter(character =>
         character.id !== Number(id))
      setCharacters(charactersFilter)
   }

   return (

      <Body>
         < div className='App'>
            {
               location.pathname !== '/' && <Nav onSearch={onSearch} />
            }


            <Routes>
               <Route path='/' element={<Form />} />
               <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
               <Route path='/about' element={<About />} />
               <Route path='/detail/:id' element={<Detail />} />
            </Routes>
         </div>
      </Body>
   );


}

export default App;
