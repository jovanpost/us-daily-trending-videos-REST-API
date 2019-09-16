const axios = require('axios');
const CronJob = require('cron').CronJob;
const moment = require('moment-timezone');


async function getData() {
    let response = axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=10&key=AIzaSyDXey22BhPil9le6mdaUAtJDaYijlRWcms');
    return response;
}


async function fillTheList() {
    let apiResponse = await getData()
    let response = apiResponse.data.items

    let t = moment.tz("America/New_York");
    let y = t.year()
    let m = t.month() + 1
    if (m <= 9) {
        m = "0" + m
    }
    let d = t.date()
    if (d <= 9) {
        d = "0" + d
    }
    let today = "" + y + m + d;

    let finalResponse = {
        response: JSON.stringify(response),
        _id: today
    }


    axios.post('http://localhost:5000/videos/add', finalResponse)
        .then(res => console.log(res.data));

}
new CronJob('0 0 0 * * *', function() {
    fillTheList()
  }, null, true, 'America/New_York');