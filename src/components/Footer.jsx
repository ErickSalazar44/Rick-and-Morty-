import './style/footer.css'
const Footer = () => {
  return (
    <footer className="footer__personal">
        <div className='footer__inf'>
            <h4 className='footer__name'>Erick Josep Salazar</h4>
            <nav className='footer__nav'>
                <ul className='footer__contact'>
                    <li>
                        <a href="#Home">Home</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/erick-josep-salazar-8b8b6024b/" target='_blank'>Contact</a>
                    </li>
                </ul>
                <ul className='footer__contact footer__icon '>
                    <li>
                        <a href="https://www.linkedin.com/in/erick-josep-salazar-8b8b6024b/" target='_blank'>
                            <i className='bx bxl-linkedin-square'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ErickSalazar44/clase3.3.1" target='_blank'>
                            <i className='bx bxl-github' ></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}

export default Footer