import Cart from "../service/Cart";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Gadjen from "../domain/Gadjet";

describe("Test function cart", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(new Gadjen(1009, "Lenove", 2000, 2));

  test("costCarts test ", () => { 
    expect(cart.costCarts()).toBe(6900);
  });

  test("costCartsToDiscount test ", () => {   
    expect(cart.costCartsToDiscount(10)).toBe(6210);
  });

  test("removeCartItem test ", () => {   
    cart.removeCartItem(1001);
    expect(cart.items.length).toBe(2);
  });

  test("Add count Gadjet", () => {
    cart.addAmount(1009);  
    expect(cart.items[1].count).toBe(3);
  });

  test("Remove count Gadjet", () => {
    cart.removeAmount(1009);  
    expect(cart.items[1].count).toBe(2);
  });
});
