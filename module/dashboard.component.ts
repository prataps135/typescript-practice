import {multiply,log as mathLog} from "./math.util";
import {calculateSalary,generatePaySlip,log as empLog} from "./employee.service";

export default class Dashboard{
  employeeid;

  createDashborad(){
    multiply(10,20);
    mathLog();
    calculateSalary();
    generatePaySlip();
    empLog();
  }
}

export function log(){
  console.log("Dashboard logged!");
}