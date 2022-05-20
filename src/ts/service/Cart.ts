import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  costCarts(): number {
    function totalAmount({ count, price }: any): number {
      return count ? count * price : price;
    }

    return Array.from(this.items).reduce(
      (sum, current) => sum + totalAmount(current),
      0
    );
  }

  costCartsToDiscount(percent: number): number {
    return this.costCarts() * ((100 - percent) / 100);
  }

  removeCartItem(id: number): void {
    this._items.forEach((item, index) => {
      if (id === item.id) {
        this._items.splice(index, 1);
      }
    });
  }

  addAmount(id: number): void {
    this._items.forEach((item: any, index) => {
      if (id === item.id) {
        item.count++;
      }
    });
  }

  removeAmount(id: number): void {
    this._items.forEach((item: any) => {
      if (id === item.id && item.count > 1) {
        item.count--;
      } else if (id === item.id) {
        this.removeCartItem(id);
      }
    });
  }
}
