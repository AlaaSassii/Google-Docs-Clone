import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
            updateDoc,
            collection,
            doc,
            onSnapshot
        } from 'firebase/firestore';
        import {  toast } from 'react-toastify';
        import 'react-toastify/dist/ReactToastify.css';
const EditsDocs = ({db}) => {
            const collectionRef = collection(db, 'docsData')
            const {id} = useParams() ;
            const [docsDesc, setDocsDesc] = useState('');
            const [documentTitle, setDocumentTitle] = useState('')

            // get data 
            const getdata = () => {
              const document = doc(collectionRef , id)  ; 
              onSnapshot(document , docs => {setDocsDesc(docs.data().docsDesc);console.log(docs.data().docsDesc);setDocumentTitle(docs.data().title)});
            }
            useEffect(()=>{
              getdata() ; 
            },[]);
            const getQuillData = (value) => {
              console.log(value) ;
              setDocsDesc(value) ; 
            }

            useEffect(() => {
              const updateDocsData = setTimeout(() => {
                  const document = doc(collectionRef, id)
                  updateDoc(document, {
                      docsDesc: docsDesc
                  })
                  .then(() => {
                    toast.success("saved",{autoClose:1000})
                })
                .catch(() => {
                  toast.error("cannot saved",{autoClose:100})

                })
              }, 1000)
              return () => clearTimeout(updateDocsData)
          }, [docsDesc])
            return (
            <div className={'editDocs-main'}>
            <h1>{documentTitle}</h1>
            <div className='editDocs-inner'>
            <ReactQuill 
             value={docsDesc}
             onChange={getQuillData}
            />
            </div>
            
            
            </div>
  )
}

export default EditsDocs