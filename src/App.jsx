import { useEffect, useState} from 'react'
import './App.css'
import useFetch from './hooks/useFetch'

import ResidentCard from './components/ResidentCard'
import { FormSearch } from './components/FormSearch'
import ParticlesBackground from './components/ParticlesBackground'
import Banner from './components/Banner'
import Pagination from './components/Pagination'
import Footer from './components/Footer'
import InformacionLocation from './components/InformacionLocation'



function App() {

  // INFO_USER => valor enviado por el usuario para generar
  const [inputLocationName, setInputLocationName] = useState('')

  // ALL_LOCATION => Estado para tener todos las locaciones 
  const urlTotalLocation = `https://rickandmortyapi.com/api/location/?name`
  const [totalLocation, getTotalLocation] = useFetch(urlTotalLocation)

  useEffect(()=>{
    getTotalLocation()
  }, [])

  // LOCATION_USER => Estado para traer 1 locacion pedida por el usuario
  const url = `https://rickandmortyapi.com/api/location/?name=${inputLocationName}`
  const [location, getApiLocation, hasError] = useFetch(url)

  useEffect(() => {
    getApiLocation()
  }, [url])

  // TOTAL products
  const totalProducts = location?.results.length

  // PAGINATION
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1)
  // Corte de productos logica
  const lastIndex = currentPage * productsPerPage
  const firstIndex = lastIndex - productsPerPage


  return (
      <div className='app'>
        <ParticlesBackground/>
        <Banner/>
        <FormSearch 
          totalLocation={totalLocation}
          setInputLocationName={setInputLocationName}
        />
        {
          hasError 
          ? <h2 className='tituloError2'>{`Hey, try one of the options, " ${inputLocationName} " does not exist 😞`}</h2>
          : (
            <>
              <InformacionLocation location = {location}/>
              <main className='resident__container'>
                {/* hacemos un map dependiendo de los residentes*/}
              {
                location?.results[0].residents.map(url => (
                  <ResidentCard 
                  url = {url}
                  key={url}
                  />
                )).slice(firstIndex,lastIndex)
              }
                
              </main>
            </>
          )
        }
        <Pagination 
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
        />
        <Footer/>
      </div>
  ) 
}

export default App
