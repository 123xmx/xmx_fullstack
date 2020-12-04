const fetch = require("node-fetch");//内置
let cheerio = require('cheerio');

let url = 'http://movie.douban.com/top250';

const mian = async () =>{
    //async 关键字
   fetch(url)
      
       .then(res =>res.text())
       .then(body => {
           let $ = cheerio.load(body);
           let movieNOdes = $('#content.item');
           console.log(movieNOdes)
       }
        );
}

mian();