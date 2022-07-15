import {gql} from "@apollo/client";
import Client from "../lib/client";


export const getPortfolio = async () => {


    const {data} = await Client.query({
        query: gql`
       {
    portfolios (sort: "createdAt:DESC") {
      data {
        id
        attributes {
          Titre
          Description
          Date
          Contenu
          Slug
          Longueur
          Largeur
          createdAt
          updatedAt
          Photo {
            data {
              id
              attributes {
                url
                height
                width
              }
            }
          }
         
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
    });

    return data

}


export const getPortfolioItem = async (slug) => {

    const variables = {
        slug,
    }

    const {data} = await Client.query({
        query: gql`
       query getPortfolios($slug: String!) {
    portfolios(filters: { Slug: { eq: $slug } }) {
        data {
            id
            attributes {
                Titre
                Description
                Date
                Contenu
                Slug
                Longueur
                Largeur
                createdAt
                updatedAt
                Photo {
                    data {
                        id
                        attributes {
                            url
                            height
                            width
                        }
                    }
                }
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

export const getPortfolioSlugs = async () => {


    const {data} = await Client.query({
        query: gql`
       {
    portfolios {
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