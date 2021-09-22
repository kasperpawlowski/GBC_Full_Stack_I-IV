const progress = require('progress');
const chalk = require('chalk');

// STAGE 1 BEGINS HERE
let downloadBar = new progress(':bar', {total: 10});

// timer declared outside function so that the interval might be cleared 
// anywhere else if needed
let timer;

module.exports.startProgress = () => {
    console.log('Download has started');

    timer = setInterval(() => {
      downloadBar.tick();
      
      if (downloadBar.complete) {
        console.log('Download has completed');
        clearInterval(timer);
      }
    }, 500);
}

// STAGE 2 BEGINS HERE
let downloadBar_ = new progress('[:bar]   :percent :etas', 
                                {
                                  total: 100, 
                                  width: 20, 
                                  incomplete: chalk.bgWhite(' '),
                                  complete: chalk.bgGreenBright(' ')
                                });

// timer declared outside function so that the interval might be cleared 
// anywhere else if needed                                
let timer_;

module.exports.startProgress_ = () => {
  console.log(chalk.greenBright('Download has started'));

  timer_ = setInterval(() => {
    downloadBar_.tick();
      
    if (downloadBar_.complete) {
      console.log(chalk.greenBright('Download has completed'));
      clearInterval(timer_);
    }
  }, 500);
}