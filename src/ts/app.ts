import Cart from "./service/Cart";
import Book from "./domain/Book";
import MusicAlbum from "./domain/MusicAlbum";
import Gadjen from "./domain/Gadjet";

const cart = new Cart();

cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
cart.add(new Gadjen(1009, "Lenove", 2000, 2));

cart.addAmount(1009);
cart.addAmount(1008);
cart.addAmount(1009);
cart.removeAmount(1009);
cart.removeAmount(1009);
cart.removeAmount(1009);
cart.removeAmount(1009);


console.log(cart.costCarts());

console.log(cart.items);
