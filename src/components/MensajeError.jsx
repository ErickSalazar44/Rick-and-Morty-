import './style/mensajeError.css'
const MensajeError = ({mensajeAlerta}) => {
  return (
    <div className='contenedor__error'>
        <img className='fondoRick' src="./Rick.webp" alt="" />
        <h3 className='tituloError'>
          Hey, try one of the options {mensajeAlerta ? `${mensajeAlerta} does not exist` : ''}
        </h3>
    </div>
  )
}

export default MensajeError