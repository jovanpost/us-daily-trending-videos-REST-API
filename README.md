# us-daily-trending-videos-REST-API

Back-end project made with Node.js, Express and MongoDB (using MongoDB Atlas).

Everyday at midnight it gets the top 10 trending videos in the United States using cron, and it puts them as a separate document in the MongoDB database. The data for each day can be acsessed directly by url (_id in the format - yyyymmdd), and then can be used in a front-end app. 

The api is live at - https://us-daily-trending-videos-api.herokuapp.com/videos
