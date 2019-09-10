import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timestamp"
})
export class TimestampPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `Hello ${value}!  ${new Date().toLocaleTimeString()}, ${args[0]} `;
    // return new Date().toLocaleTimeString();
    // return null;
  }
}
