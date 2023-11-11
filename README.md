# food

Hey, my dudes! I'm learning how to make a restaurant search app.

Please supply your own API key in src/api/yelp.js

```
import axios from "axios";

export default axios.create({
baseURL: "https://api.yelp.com/v3/businesses",
headers: {
Authorization:
"Bearer <your API key>",
},
});
```
