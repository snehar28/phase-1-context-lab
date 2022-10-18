/* Your Code Here */
function createEmployeeRecord(employee) {
    const employeeRecord = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employeeRecord;
}

function createEmployeeRecords(allArrays) {
    const allEmployees = []
    for (let arrOfArrays of allArrays) {
        const allEmployeeRecords = createEmployeeRecord(arrOfArrays)
        allEmployees.push(allEmployeeRecords)
    }

    return allEmployees;
}

function createTimeInEvent(dateInStamp) {
    const dateInArray = dateInStamp.split(" ");
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(dateInArray[1]),
        date: dateInArray[0]
    }
    
    this.timeInEvents.push(timeIn);

    return this;
}

function createTimeOutEvent(dateOutStamp) {
    const dateOutArray = dateOutStamp.split(" ");
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(dateOutArray[1]),
        date: dateOutArray[0]
    }
    
    this.timeOutEvents.push(timeOut);

    return this;
}

function hoursWorkedOnDate(dateStamp) {
    for (let i = 0; i < (this.timeInEvents).length; i++) {
        let dateToCheck = this.timeInEvents[i].date
        if (dateStamp === dateToCheck) {
            const hourIn = this.timeInEvents[i].hour
            const hourOut = this.timeOutEvents[i].hour

            const numberOfHoursWorked = (hourOut - hourIn)/100;
            return numberOfHoursWorked;
        }
    }
}

function wagesEarnedOnDate(dateStamp) {
    const payRate = this.payPerHour
    const hoursWorked = hoursWorkedOnDate.call(this,dateStamp)

    const payOwed = payRate * hoursWorked
    return payOwed;
}

function findEmployeeByFirstName(srcArray, firstName) {
    for (let src of srcArray) {
        if (src.firstName === firstName) {
            return src;
        }
    }
}

function calculatePayroll(allEmployees) {
    const fullPayroll = [];
    for (let i=0; i< allEmployees.length; i++) {
        const totalWageForEmployee = allWagesFor.call(allEmployees[i])
        fullPayroll.push(totalWageForEmployee)
    }
    

    let fullPay = 0;
    for (const pay of fullPayroll) {
        fullPay += pay
    }

    return fullPay;

}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

