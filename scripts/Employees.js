import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders=getOrders()

//iterate through orders to check if the employeeId on the order matches current employee.id.  Count up.
const countOrders =(paramEmployee, paramOrdersArray)=>{
    let count = 0;
    for (const singleOrder of paramOrdersArray){
        if (singleOrder.employeeId === paramEmployee.id){
            count++
        }
       
    } 
    return count
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--") 
            
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)){
                   let orderCount = countOrders(employee, orders); 
                   let s = ""
                   if (orderCount >1) {s="s"}
                   window.alert(`${employee.name} sold ${orderCount} product${s}`)
                }
            }
        }

    }
)
    


export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

