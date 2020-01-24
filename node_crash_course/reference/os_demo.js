//gives information about our environment and operating system

const os = require('os');

//platform for your device (windows, mac, etc. Mac is Darwin. Windows is win32.)
 console.log(os.platform());

 //cpu architeture
 console.log(os.arch());

 //cpu core info
 console.log(os.cpus());

 //free memory
 console.log(os.freemem());

 //total memory
 console.log(os.totalmem());

 //home directory 
 console.log(os.homedir());