import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  constructor(private loggerService: LoggerService) { }

  testLog(){
    this.loggerService.log("Test the `log()` Method");
  }

  navigationLogs(){
    this.loggerService.log("Navigating to login page through button click");
  }

}
