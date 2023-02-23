import { Subject } from "rxjs";
/**
 * Creando un canal de comunicación
 * @description Solo lo vamos a usar para la comunicación de eventos pequeños enter componentes
 */
export class SubjectManager<T> {
  private subject$ = new Subject<T>();

  get getSubject() {
    return this.subject$.asObservable();
  }
  /**
   * Enviamos información a traves de este canal de comunicación
   */
  set setSubject(value: T) {
    this.subject$.next(value);
  }
}
