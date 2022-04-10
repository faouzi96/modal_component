function createPostObject(dataArray){
   let data = {
       name: dataArray[0].value,
       format: ( (dataArray[1].checked && dataArray[1]) || (dataArray[2].checked && dataArray[2]) ),
       email: dataArray[3].value,
       schedule : ( (dataArray[4].checked && dataArray[4]) || (dataArray[5].checked && dataArray[5]) || (dataArray[6].checked && dataArray[6]) || (dataArray[7].checked && dataArray[7]) )
   }
   switch (data.schedule.value) {
     case "s_date":
       data = {...data,date: dataArray[8].value.toString(), time: dataArray[9].value.toString()}
       break;
     case "daily":
       data = {...data, time: dataArray[8].value.toString()}
       break;
     case "weekly":
       data = {...data,day: dataArray[8].value.toString(), time: dataArray[9].value.toString()}
       break;
     default:
       break;
   }
   return {...data,format: data.format.value,schedule: data.schedule.value}
}

export default createPostObject