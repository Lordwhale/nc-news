const Articlecard = ({ article }) => {
    
    function handleClick() {
           console.log('been clicked') 
    }
    

    return(
        <button className="article-button" onClick={handleClick}>
            <li className="article-card">
                <img className="article-image" src={article.article_img_url} alt={article.title} />
                <p className="article-title">{article.title}</p>
            </li>
        </button>
    )

}

export default Articlecard