import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import './static/css/bootstrap.min.css';

const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri: 'https://news-reader.stagnationlab.dev/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// newslist query

// query {
//     newsList(skip: 0 limit : 0) {
//       rows
//       {
//         id
//         title
//       }
//     }
//   }

// query {
//     newsItem(id : "d3867ad5-1ef6-4cbd-ac17-606bf4796ab7")
//     { 
//       id
//       title
//       content
//       url
//       img
//       comments
//       {
//         content
//       }
     
//     }
//   }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
