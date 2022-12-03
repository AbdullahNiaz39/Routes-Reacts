import React,{useState} from 'react';
//import todo from '../images/todo.svg';

export const Todo = () => {
 const [Name,setName]=useState({});
   const handleChange=(e)=>{
    console.log(e.target.value);
    const name=e.target.name;
    const value=e.target.value;
    setName(values=>({...values,[name]:value}))
  }
  console.log(formName);
  return (
    <>
    <div className="App">
        
           <h1>TodoApp</h1> 
           <form>
            <input type="text" name='name' onChange={handleChange} value={formName.name|| ''}></input>
            <input type="text" name='age' onChange={handleChange} ></input>
            <input type="text" name='des' onChange={handleChange} ></input>
            <button>Click</button>
            
           </form>
    </div>
        
    </>
  )
}
