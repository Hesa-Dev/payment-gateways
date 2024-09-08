import moment from "moment";

export default  function  dataTime() : string {

    const currentDate = new Date();
    const formattedDate = moment(currentDate).format('DD-MM-YYYY HH:mm');

    return  formattedDate   
}

