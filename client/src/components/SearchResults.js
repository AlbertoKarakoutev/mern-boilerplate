import Header from './Header'
import Paginator from './Paginator'
import Footer from './Footer'

import { useEffect, useState } from 'react';

const  SearchResults = (props) => {
    const term = new URLSearchParams(props.location.search).get("term");
    const page = new URLSearchParams(props.location.search).get("page");
    
    const [results, setResults] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        let mounted = true;

        if(mounted){
            
            /*
              Fetch or compute the results(JSON Objects) and the total pages count:
              data is some object that contains the results and pages
            */
            var data = {
              results:[
                {
                  resultID:1
                },
                {
                  resultID:2
                }
              ],
              totalPages:5
            }
          
            setResults(data.results);
            setTotalPages(data.totalPages);
            
             console.log(results);

        }
    }, [page, term, results]);

    return (
      <div className="search-results">
            <Header/>
            <Paginator page={page} term={term} totalPages={totalPages}/>
            <h2>Some search results here</h2>
            <Paginator page={page} term={term} totalPages={totalPages}/>
            <Footer/>
      </div>
    );
  }
  export default SearchResults;