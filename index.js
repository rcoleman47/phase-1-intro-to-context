const createEmployeeRecord = (array)=> {
  const pay = parseInt(array[3])
  return {
    firstName: `${array[0]}`,
    familyName: `${array[1]}`,
    title: `${array[2]}`,
    payPerHour: pay,
    timeInEvents: [],
    timeOutEvents: [],
  }
}

const createEmployeeRecords = (arrOArrays) => {
  return arrOArrays.map(array=>createEmployeeRecord(array))
};

const createTimeInEvent = (recordObj, dsString) => {
  const hourI = parseInt(dsString.split(' ')[1])
  const timeInObj= {
    type: 'TimeIn',
    hour: hourI,
    date:`${dsString.split(' ')[0]}`
  }
  recordObj.timeInEvents.push(timeInObj)
  return recordObj
}

const createTimeOutEvent = (recordObj, dsString) => {
  const hourO = parseInt(dsString.split(' ')[1])
  const timeOutObj= {
    type: 'TimeOut',
    hour: hourO,
    date:`${dsString.split(' ')[0]}`
  }
  recordObj.timeOutEvents.push(timeOutObj)
  return recordObj
}

const hoursWorkedOnDate = (recordObj, string) =>{
  const timeIn = recordObj.timeInEvents[0].date;
  const timeOut = recordObj.timeOutEvents[0].date;
  const hoursWorked = (recordObj.timeOutEvents[0].hour - recordObj.timeInEvents[0].hour)/100;
  if(timeIn === string && timeOut === string){
    return hoursWorked
  }
}