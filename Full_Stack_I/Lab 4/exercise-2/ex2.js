const moment = require("moment");

const getCurrentDate = () => {
    const wrapped = moment(new Date());
    console.log(wrapped.format('dddd, MMMM Do YYYY : h:mm:ss a'));
}

getCurrentDate();