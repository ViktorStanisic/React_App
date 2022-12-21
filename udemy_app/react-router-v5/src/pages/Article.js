import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFetch } from "../hooks/useFetch"
import Home from './Home'


export default function Article() {
      const { id } = useParams()

      const urlFetch = `http://localhost:3000/articles/${id}`
      const { data: article, isPending, error } = useFetch(urlFetch)
      const history = useHistory();

      useEffect(() => {
            if (error) {
                  //redirect da napravi ako ima nevalidna ruta

                  //da se vrati edno nanazad kako klik za nazad
                  //history.goBack()

                  //na custom ruta da go odnese posle 1 sekunda
                  setTimeout(() => {
                        history.push('/')
                  }, 1000);
            }
      }, [error, history])
      return (
            <div>
                  {isPending && <div>Loading ...</div>}
                  {error && <div>{error}</div>}
                  {article && (
                        <div>
                              <h2>{article.title}</h2>
                              <p>By {article.author}</p>
                              <p>{article.body}</p>
                        </div>
                  )}

            </div>
      )
}
