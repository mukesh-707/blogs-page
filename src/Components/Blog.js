

//Blogging App using Hooks

import { useState } from "react";

export default function Blog(){

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [blogs, setBlogs] =  useState([]);

    function handleSubmit(e){
        e.preventDefault();
        setBlogs([{title,content}, ...blogs]);
        setTitle("")
        setContent("")
    }

    function removeBlog(i){
        
        setBlogs(blogs.filter((blog,index)=>i!==index))

    }

    return(
        <>
        <h1>Write a Blog!</h1>
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                value={title}
                                onChange = {(e) => setTitle(e.target.value)}
                        />
                </Row >

                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                value={content}
                                onChange = {(e) => setContent(e.target.value)}
                        />
                </Row >
         
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        {blogs.map((blog,i) => (
            <div className="blog">
                <h3>{blog.title}</h3>
                <hr/>
                <p>{blog.content}</p>
                <div className="blog-btn">
                    <button onClick={()=>removeBlog(i)} className="btn remove">
                        Del
                        

                    </button>

                </div>
            </div>
        ))}
        
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
