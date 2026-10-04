/** FIFO used by the cafe kiosk line. Elevator calls or lane queues can reuse it. */
export class Fifo<T> {
  private items: T[] = [];

  get length(): number {
    return this.items.length;
  }

  enqueue(item: T): void {
    this.items.push(item);
  }

  peek(): T | undefined {
    return this.items[0];
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  toArray(): T[] {
    return this.items.slice();
  }

  clear(): void {
    this.items = [];
  }
}
