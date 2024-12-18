import { useEffect, useState } from "react"
import Articlecard from "./Articlecard"

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch('https://my-nc-news-ew4b.onrender.com/api/articles')
        .then((response) =>{
            return response.json()
        })
        .then(({ articles }) =>{
            setArticles(articles)
            setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
            setError(error)
        })
    }, [])



    if (loading) {
        return <p>Loading...</p>
    }

    return(
        
        <div>  
            <h2>News from around the globe!</h2>
                <ul className="article-list">
                    {articles.map((article) => {
                        return <Articlecard key={article.article_id} article={article} />         
                    })}
                </ul>
        </div>
    )
}

export default Articles