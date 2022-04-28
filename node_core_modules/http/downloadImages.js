/** AXIOS REQUESTS */

const axios = require('axios');
const fs = require('fs');

let date_time = new Date();


//Main Function to Download Images
async function downloadImage( filepath){
    let url;
    //This get the URL of the image from an API
    const getUrl = await axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res=>{
            url = res.data.message;
        })
        .catch(err=>{
            console.log(err);
        })

    
    //This Function GET the image
    const response = await axios({
        url,
        method: "GET",
        responseType: "stream"
    });

    return new Promise((resolve, reject)=>{
        response.data.pipe(fs.createWriteStream(filepath))
        .on('error',reject)
        .once('close', ()=> {
            resolve(filepath);
        });
    });
};

downloadImage(`images/image${Math.floor(date_time/1000)}.jpg`);