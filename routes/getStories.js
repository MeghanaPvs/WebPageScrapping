const axios = require('axios');
const cheerio = require('cheerio');

let baseURL = 'https://time.com';

async function getStories(req,res){
        const response = await axios.get(baseURL);
        const html = response.data;
        // console.log('--resdata',response.data);
        const $ = cheerio.load(html);
        const storiesData = $('article.slide').map((_,element)=>{
            console.log('element',element);
            const storyElement = $(element);
            const url = storyElement.find('a').prop('href');
            const textData = storyElement.find('a').text();

            return {
                url,
                textData
            }
        }).get()

        console.log('--data',storiesData.slice(18,-36));
        let finalData = storiesData.slice(18,-36);
        // return storiesData;
        res.send(finalData);
}

module.exports = getStories;