let employee = {
    name: "",
    streetAddress: ""
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let ret = {...employee};
    ret[key] = value;
    return ret;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let ret = {...employee};
    delete(ret[key]);
    return ret;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete(employee[key]);
    return employee;
}