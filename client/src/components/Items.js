import { useState, useEffect } from 'react';
import '../style/items.css';

const  Items = () => {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
      let mounted = true;

      if(mounted){
        
        //Fetch or compute the items(JSON Objects)
        const result = [
          {
            id:1,
            title:"Item 1",
            description:"A simple item description to demonstrate item 1"
          },
          {
            id:2,
            title:"Item 2",
            description:"A simple item description to demonstrate item 2. The description can also be longer."
          }
        ]
        setItems(result);
            
      }
      
      return () => mounted = false;
    }, [])

    return (
        <div className="items-container">
            <h2 className="items-title" style={{display:'flex', justifyContent:'center'}}>Items</h2>
            <div className="items-list">
                {(items.length <= 0 || items === null) ? (<h4>No items to show!</h4>) : items.map((item) => (
                    <div className="item" key={item.id} onClick={e => window.location = "/#"}>
                      
                      <div className="item-info">
                          <h3 className="item-info-element">{item.title}</h3>
                          <h5 className="item-info-element">{item.description}</h5>
                          
                      </div>
                    </div>
                ))}
            </div>
        </div>
    );
  }
  
  export default Items;