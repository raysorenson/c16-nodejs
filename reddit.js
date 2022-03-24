const path = require('path')
const fs = require('fs')

const popularPath = path.join(__dirname, './popular-articles.json')

const rp = require('request-promise');

rp('https://reddit.com/r/popular.json')
    .then(function (htmlString) {
       let dataObj = []
       JSON.parse(htmlString).data.children.forEach(item => {
           const list = {
               title: item.data.title,
               url: item.data.url,
               author: item.data.author
           }
           dataObj.push(list)
       });

       
        fs.writeFile(popularPath, JSON.stringify(dataObj), (err) => {
            if (err) console.log(err, "error");
        })
    })
    .catch(function (err) {
        console.log(err, "error");
    });
    //JSON.stringify(