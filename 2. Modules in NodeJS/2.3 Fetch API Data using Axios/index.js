// Please do not change the prewritten code
const axios = require("axios");

const Solution = async () => {
    // Write your code here
    // axios
    //     .get("https://api.codingninjas.com/api/v3/event_tags")
    //     .then((response) => {
    //         console.log(response.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });

    try {
        const response = await axios.get(
            "https://api.codingninjas.com/api/v3/event_tags"
        );
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};
Solution();
module.exports = Solution;
