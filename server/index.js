import express from 'express';
import cors from 'cors';
import axios from 'axios';
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    return res.status(200).send({msg: 'HelloWorld'});
})

app.get('/categories/:category/products', async (req, res)=>{
    try{
        const { category } = req.params;
        const {n, minPrice, maxPrice} = req.query;
        axios.get(`http://20.244.56.144/test/companies/AMZ/categories/${category}/products?top=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE0MDQ5MzU4LCJpYXQiOjE3MTQwNDkwNTgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImNmMTc4MzQ5LTA0ZmQtNDVkMS04ZDRkLTU4NTczMDg5ZjVkNiIsInN1YiI6ImUyMWNzZXUwNjE3QGJlbm5ldHQuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiQmVubmV0dFVuaXZlcnNpdHkiLCJjbGllbnRJRCI6ImNmMTc4MzQ5LTA0ZmQtNDVkMS04ZDRkLTU4NTczMDg5ZjVkNiIsImNsaWVudFNlY3JldCI6IkdPU0xTVVlqeWFlZEZ1Y1AiLCJvd25lck5hbWUiOiJTaWRkaGFydGggU3VtYW4gU2luZ2giLCJvd25lckVtYWlsIjoiZTIxY3NldTA2MTdAYmVubmV0dC5lZHUuaW4iLCJyb2xsTm8iOiJFMjFDU0VVMDYxNyJ9.W3vYaDVgluixQMH7ArqMWpRw77OfwEIbO08A_hDlZgg"
            }
        }).then(resp=>{res.status(200).send(resp.data)}).catch(err =>{console.log(err)});
        // setProd(res);
        // console.log(prod);
    }
    catch(err){
        console.log(err);
    }
});
app.get('/categories/:categoryname/products/:productid', async (req, res)=>{
    try{
        const n = req.query.n;
        let page = req.query.page || 1;
        const data = await axios.get("").data;
        let prod = {};
        if(page!=1){
            for(let i=0;i<n;i++){
                prod[1].push(data[i]);
            }
        }
        else{
            for(let p=0;p<page;p++){
                for(let i=0;i<n;i++){
                    prod[p].push(data[i]);
                }
            }
        }
        return res.status(200).send(prod);
    }
    catch(err){
        console.log(err);
    }
});
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})