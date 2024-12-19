import { useEffect, useState } from "react"

const Articlecard = ({ articleData }) => {

    const [fullArticle, setFullArticle] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    function handleArticleClick() {
        return getFullArticle()
    }

    function getFullArticle(){

        setLoading(true)
        fetch(`https://my-nc-news-ew4b.onrender.com/api/articles/${articleData.article_id}`)
        .then((response) =>{
            return response.json()
        })
        .then((fullArticle) =>{
            setFullArticle(fullArticle.article)
            setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
            setError(error)
        })
    }
    

    return(
        <>
        <button className="article-button" onclick={handleArticleClick}>
            <li className="article-card">
                <img className="article-image" src={articleData.article_img_url} alt={articleData.title} />
                <p className="article-title">{articleData.title}</p>
            </li>
            <div className="article-content">
                <p>{fullArticle.topic}</p><p>{fullArticle.author}</p>
                <p>{fullArticle.created_at}</p>
                <p>{fullArticle.body}</p>
            </div>
        </button>
        </>
    )

}

export default Articlecard