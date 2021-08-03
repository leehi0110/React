# News-Viewer

## Axios + async / await

<br>

### 1. Axios.get news articles

<br>

> <br>
>
> ```
> const fetchData = async () => {
>  setLoading(true);
>
>  try {
>    const response = await axios.get(
>      'https://newsapi.org/v2/top-headlines?country=kr&apiKey={myAPIKey}',
>    );
>    setArticles(response.data.articles);
>  } catch(e) {
>    console.log(e);
>  }
>  setLoading(false);
> };
> fetchData();
> ```
>
> <br>
> map() 함수를 사용해 기사들을 렌더링 하기
> <br> <br>
>
> ```
> <NewsListBlock>
>  {articles.map(article=> (
>    <NewsItem key={article.url} article={article}/>
>  ))}
> </NewsListBlock>
> ```
>
> <br>

<br>

### 초기 화면

<img src="./src/Images/initImage.png" width="100%" height="30%" title="px(픽셀) 크기 설정" alt="RubberDuck"/>
