import React, { useEffect, useState } from 'react'
import {collection,doc,getDocs} from 'firebase/firestore';
import {db} from '../firebase-config'
import { CircularIndeterminate } from '../loadinganimation';
import DisplayPost from './DisplayPost';
import { storage } from '../firebase-config';
import {ref,list,listAll,getDownloadURL} from 'firebase/storage'

function Home()  {
  const [loading,setLoading] = useState(true);
  // const [allPost, setAllPost] = useState([])
  const [files, setFiles] = useState();
  const postRef = collection(db,"post")
  console.log(postRef)
  const posts = getDocs(postRef);
  console.log(posts)
  // console.log(...doc.data)
  // useEffect(()=>{
  //   setLoading(true);
  //   const getPosts = ()=>{
  //     getDocs(postRef)
  //     .then(data=>{setAllPost(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  //     setLoading(false) 
  //     })
  //   }
  //   getPosts()
  // },[])

  useEffect(() => {
    // setLoading(true);
    const fetchImages = async () => {
      const storageRef = ref(storage, 'images/');
      const result = await listAll(storageRef);

      const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();

      console.log(urls)
      setFiles(urls);
    };
    loadImages();
    setLoading(false);
    console.log(files)
    
    
  }, []);
  // let new_array = files.map(function callback(currentValue[, index[, array]]) {

  //   // return element for new_array

  // }[, thisArg])
  // const allFiles = files;
  // const allImages = Object.values(allFiles);
  // const renderedImages = allImages.map(data => {
  //   <div>
  //     <img src={data.img} />
  //   </div>
  // })
  

  // const container = document.getElementById('image-container');

  // for (let i = 0; i < files.length; i++) {
  //   const img = document.createElement('img');
  //   img.src = files[i];
  //   container.appendChild(img);
  // }
  // for(const props of files) {

  // }
  return (
    <main className="flex first-line:sm:p-8 px-4 py-8 w-full bg-[#fffaf0] min-h-[calc(100vh-73px)]">
     
      <section className="max-w-7xl mx-30px-auto">
     <div className="m-10">
        <h1>
          The Community <span>Showcase</span>
        </h1>
        <p>

        </p>
        <div className="m-10 flex gap-3">
          {loading ? (
            <div className="flex justify-center items-center">
              <CircularIndeterminate />
            </div>
          ) : (
            
              files && files.map(data => 
                <div className=" grid gap-3">
                  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">

                    <img
                      className='w-full h-auto object-cover rounded-xl'
                      src={data}
                    />
                  </div>
                </div>
                
              )
            )
          }

          {/* <img src={data} className='rounded-xl group relative shadow-card hover:shadow-cardhover card' /> */}
          {/* for (let index = 0; index < files.length; index++) {
            const element = files[index];
            
          } */}
          {/* {renderedImages} */}
          
          //   
          // 
        </div>
        {/* <div id="image-container">

        </div> */}
     </div>
     </section>
    </main>
  )
}

export default Home