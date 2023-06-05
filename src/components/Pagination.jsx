
const Pagination = ({productsPerPage,currentPage,setCurrentPage,totalProducts}) => {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }
    
    const onPreviusPage = () => {
        if (currentPage <= 1) return
        setCurrentPage(currentPage - 1)
    }
    const onNexPage = () => {
        if (currentPage >= pageNumbers.length) return
        setCurrentPage(currentPage + 1)
    }
    const onSpecificPage = (n)=> {
        setCurrentPage(n)
    }
  return (
    <nav 
        className="pagination is-centered mb-6 ml-6 mr-6" 
        role="navigation" 
        aria-label="pagination"
    >
        <button className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviusPage}>Previous</button>
        <button className={`pagination-next ${ currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={onNexPage}>Next page</button>
        <ul className='pagination-list '>
            {pageNumbers.map((noPage) => (
                <li key={noPage}>
                    <a  
                        className={`pagination-link text__color ${noPage === currentPage ? 'is-current' : ''}`}
                        onClick={()=> onSpecificPage(noPage)}
                    >
                        {noPage}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination