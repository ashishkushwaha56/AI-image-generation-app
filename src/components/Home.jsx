import React, { useEffect, useState } from 'react'
import {collection,getDocs} from 'firebase/firestore';
import {db} from '../firebase-config'
import { CircularIndeterminate } from '../loadinganimation';
import DisplayPost from './DisplayPost';

function Home() {
  const [posts, setPost] = useState([])
  const [loading, setLoading] = useState(true);
  const postRef = collection(db, "posts")

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = posts.filter((item) => item.user.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );
  };

  // useEffect(()=>{
  //   setLoading(true);
  //   const getPosts = async ()=>{
  //     await getDocs(postRef)
  //     .then(data=>{setAllPost(data.docs.map(doc=>({...doc.data(),id:doc.id})));
  //     setLoading(false) 
  //     })
  //   }
  //   getPosts()
  // },[])

  useEffect(() => {
    setLoading(true)
    const getPost = () => {
      getDocs(postRef)
        .then(data => {
          setPost(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
          setLoading(false)
        })
    }
    getPost()
  }, [])
  return (
    <main className="flex first-line:sm:p-8 px-4 py-8 w-full bg-[#fffaf0] min-h-[calc(100vh-73px)]">
     <div className="container m-10">
        <h1>
          The Community <span>Showcase</span>
        </h1>
        <p>

        </p>
        <div className="m-10">
          {loading ? (
            <div className="flex justify-center items-center">
              <CircularIndeterminate />
            </div>
          ) : (
            posts && posts.map(post => {
              <DisplayPost post={post} />
            })
          )}
        </div>
     </div>
    </main>
  )
}

export default Home