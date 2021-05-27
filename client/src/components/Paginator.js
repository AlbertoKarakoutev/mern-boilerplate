import { FaAngleDoubleLeft, FaAngleLeft, FaAngleDoubleRight, FaAngleRight } from 'react-icons/fa'

const  Paginator = ({page, totalPages, term}) => {
    let buttons = []

        const url = (pageVar) => {
            return "/search/?page="+pageVar+"&term="+String(term);
        }

        if(page > 1){
            buttons.push(<a className="btn" key="0" href={url(1)}><FaAngleDoubleLeft/></a>)
            buttons.push(<a className="btn" key="1" href={url(page-1)}><FaAngleLeft/></a>)
        }

        buttons.push(<button className="btn" key="2" style={{background:"#356965"}} disabled>{page}</button>)
        
        if(page < totalPages){
            buttons.push(<a className="btn" key="3" href={url(parseInt(page)+1)}><FaAngleRight/></a>)
            buttons.push(<a className="btn" key="4" href={url(totalPages)}><FaAngleDoubleRight/></a>)
        }

        return (<div style={{display:'flex', justifyContent:'center'}}> {buttons} </div>)
  }
  export default Paginator;