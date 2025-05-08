import {src, dest, task, watch, series} from 'gulp';

task("test", (done)=>{
    console.log("Gulp is running!");
    done();
});