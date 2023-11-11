import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer y_KfXNxQwefRIxEAyPaLZZ-aIJXAPxmJRIXgMUvmr4y1fIwD6AyLQjy-S8BE84e9wxq9ae0BkokPCSk_qJP-Z1eQ-xuw1CjU-dW-ULdL5rFhGjoKiN_JdYEreGk-ZXYx",
  },
});
