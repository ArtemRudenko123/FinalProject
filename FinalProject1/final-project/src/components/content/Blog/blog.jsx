
import React, {useState,useEffect} from "react";
import './blogs.css'
const Blog = () => {
    const[posts,setposts] = useState([])
    const[text,settext] = useState("")
    const[image,setimage] = useState(null)
    const[time,settime] = useState(new Date())
    useEffect(()=>{
        const timerid = setInterval(() => {
            settime(new Date())
        }, 1000);
    },[])
    const hours = time.getHours().toString().padStart(2, '0')
    const minutes = time.getMinutes().toString().padStart(2, '0')
    const seconds = time.getSeconds().toString().padStart(2, '0')
    const formatedtime = `${hours}:${minutes}:${seconds}`
    const heandletextchange = (e)=>{
        settext(e.target.value)
    }
    const heandleimagechange = (e)=>{
        const file = e.target.files [0]
        if (file){
            const reader = new FileReader()
            reader.onload = ()=>{
                setimage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        if (text||image){
            const newpost = {
                text,
                image,
                id:Date.now()
            }
            setposts([newpost,...posts])
            settext('')
            setimage(null)
        }
    }
    return(
        <div className="blog-container">
            <h1 className="blog-title">
                Блог
            </h1>
            <h2 className="clock">
                {formatedtime}
            </h2>
            <form className="blog-form" onSubmit={handlesubmit}>
                <label className="file-input-label" htmlFor="file-input">
                <span className="attachment-icon">&#128206;</span>
                </label>
                <input 
                onChange={heandleimagechange}
                type="file"
                id="file-input"
                accept="image/*"
                className="file-input"
                 />
                 <input 
                 type=""
                 placeholder="Введите текст"
                value={text}
                className="text-input"
                onChange={heandletextchange}
                  />
                  <button type="submit" className="submit-button">
                 Отправить
                  </button>
            </form>
            <div className="posts-container">
                    {
                        posts.map((post)=>(
                            <div key={post.id} className="post">
                                    {
                                        post.text && <p>
                                            {post.text}
                                        </p>
                                    }
                                    {post.image&& <img alt="userpost" className="post-image" src={post.image}/>}
                                    
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}

export default Blog