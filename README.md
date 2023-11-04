# food

Hey, my dudes! I'm learning how to make a restaurant search app.

I have ignored yelp.js in my api folder for security purposes so please supply your own APIs.

import axios from "axios";

```
export default axios.create({
baseURL: "https://api.yelp.com/v3/businesses",
headers: {
Authorization:
"Bearer <your API key>",
},
});
```
