import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { TodoList } from "./todo-list/todo-list.model";
import { Todo } from "./todo/todo.model";

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  update() {
    console.log(Math.random());
  }

  get(): Observable<TodoList> {
    const url = "https://jsonplaceholder.typicode.com/todos";

    return this.http.get<TodoList>(url).pipe(
      tap(_ => console.log("Fetched Todo items")),
      tap(_ => this.update()),
      catchError(this.handleError<TodoList>("getItems", []))
    );
  }

  getById(todoId: number): Observable<Todo> {
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    return this.http.get<Todo>(url).pipe(
      tap(_ => console.log("Fetched Todo items with id" + todoId)),
      catchError(this.handleError<Todo>("getItems", undefined))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
