import React ,{useEffect, useState } from 'react'
import Modal1 from './Component/Modal';
import {collection ,addDoc , onSnapshot  } from 'firebase/firestore' 
import { useNavigate } from 'react-router-dom';
export default function Docs({db}) {
  // naviagtion 
  let navigate = useNavigate() ; 
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState('') ;
  // docs data
  const [docsdata , setdocsdata] = useState([]) ;

  // firebase ref 
  const collectionRef = collection(db, 'docsData') ; 
  useEffect(()=>{
    const getData = () =>{ 
      onSnapshot(collectionRef ,data => {
        console.log(data.docs.map(element =>{return {id:element.id , ...element.data()}})) ; 
        setdocsdata(data.docs.map(element =>{return {id:element.id , ...element.data()}})) ;
      } );
    }
    getData() ;

  },[]);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  
  const addData = () => {
   if(title.length > 0 ){
    addDoc(collectionRef, {
      title: title,
      docsDesc: ''

})
.then(() => {
alert('Data Added') ;
setTitle("") ; 
handleClose() ; 
})
.catch(() => {
alert('Cannot add data')
})
   }

  else{ alert("fill the title")}
  }
  const getID = (id) => {
    console.log(id)
}
  return (
      <div className='docs-main'>
          <h1>Docs Clone</h1>

          <button
              className='add-docs'
              onClick={handleOpen}
          >
              Add a Document
          </button>

          <Modal1
              open={open}
              setOpen={setOpen}
              title={title}
              setTitle={setTitle}
              addData={addData}
              handleClose={handleClose}
          />

<div className='grid-main'>
                {docsdata.map((doc) => {
                    return (
                        <div key={doc.id} className='grid-child' onClick={()=>navigate(`/editDocs/${doc.id}`)}> 
                            <p>{doc.title}</p>
                            <div dangerouslySetInnerHTML={{__html: doc.docsDesc}} />

                        </div>
                    )
                })}
            </div>
            <div dangerouslySetInnerHTML={{__html:`<h1>Hello World </h1>`}}>{}</div>
      </div>
  )
}