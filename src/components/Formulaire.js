import React, {useState} from 'react'

const Formulaire = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [tags, setTags] = useState([])
    const [submit, setSubmit] = useState(false)
    return (
        <div className="formulaire">
            <form className="post-form">
                <label htmlFor="post-title">Titre du post :</label>
                <input type="text" name="post-title" id="post-title" value={title} onChange={(e)=>setTitle(e.target.value)}/>

                <label htmlFor="post-content">Contenu :</label>
                <textarea name="post-content" id="post-content" cols="30"
                rows="10" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>

                <label htmlFor="post-title">Hashtag</label>
                <input type="text" name="post-tags" id="post-tags" value={tags} onChange={(e)=>{
                    let newTags = e.target.value.split(',');
                    setTags(newTags);
                }}/>

                <input type="submit" id="submit-post" value="créer mon post"/>
            </form>

        </div>
    )
}

export default Formulaire
