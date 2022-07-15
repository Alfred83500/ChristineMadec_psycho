import {gql} from "@apollo/client";
import Client from "../lib/client";


export const getArticles = async () => {


    const {data} = await Client.query({


        query: gql`
       {
    posts (sort: "createdAt:DESC") {
      data {
        id
        attributes {
          Titre
          Description
          Slug
          updatedAt
          createdAt
          auteur {
            data {
              id
              attributes {
                Nom
                image {
                  data {
                    id
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    
  }

`
    });

    return data

}


export const getArticle = async (slug) => {

    const variables = {
        slug,
    }

    const {data} = await Client.query({
        query: gql`
 query getArticles($slug: String!) {
    articles(filters: { Slug: { eq: $slug } }) {
        data {
        id
        attributes {
          Titre
          Description
          Contenu
          Slug
          createdAt
          updatedAt
          auteur {
            data {
              id
              attributes {
                Nom
                Photo {
                  data {
                    id
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
}


`

        , variables
    });


    return data

}

export const getArticleSlugs = async () => {


    const {data} = await Client.query({
        query: gql`
       {
  articles {
    data {
      id
      attributes {
        Slug
      }
    }
  }
}


`
    });
    return data

}


