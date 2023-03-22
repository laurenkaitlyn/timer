
//import argv object from node:process module
//argv is an array that contains all arguments passed from command line
import{argv} from "node:process";

/*iterate over & grab each parameter 
  convert it to a number and then call timeout with it
  */  
const timer = () => {
  //takes in arg and its index 
  //skip first 2 inputs as they are the path to Node.js executable and the script 
  argv.forEach((arg, index) => {
    if (index < 2) {
      return;
    }
    //edge cases
    //1. no numbers => program will not beep and end
    
    //2.arg is nedative => skip
    if (Math.sign(arg) === -1) {
      return;
    }

    //3. if input is not a number => skip
    if (isNaN(arg)) {
      return;
    }

    //convert the arg to a number
    const delay = Number(arg);

    setTimeout(() => { process.stdout.write('\x07') },
    delay * 1000);
  })
}

timer();