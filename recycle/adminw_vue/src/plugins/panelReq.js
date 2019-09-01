import axios from 'axios'


export const panelReq = () => {
    const reqBody = {
        query: `
      query{
          products{
            name
            productType
            release
          }
        }
  `
    };
    axios({
        url: "http://localhost:4001/gql",
        data: reqBody,
        method: "POST"
    }).then(res => res.data.data.products)
        .catch(err => err);
}