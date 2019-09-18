const books = [
{
	id: "1",
	title: "Cheese",
	picture: require("./assets/images/books/android.png"),
	cost: 34
},
{
	id: "2",
	title: "Bread",
	picture: require("./assets/images/books/es6.png"),
	cost: 40
},
{
	id: "3",
	title: "Milk",
	picture: require("./assets/images/books/ngbook21.png"),
	cost: 48
},
{
	id: "4",
	title: "Butter",
	picture: require("./assets/images/books/progit.png"),
	cost: 25
},
{
	id: "5",
	title: "Jam",
	picture: require("./assets/images/books/reactjsblue.png"),
	cost: 20
},
{
	id: "6",
	title: "Biscuits",
	picture: require("./assets/images/books/awaken.png"),
	cost: 22
},
{
	id: "7",
	title: "Chocolates",
	picture: require("./assets/images/books/survivejs.png"),
	cost: 100
},
{
	id: "8",
	title: "Chips",
	picture: require("./assets/images/books/switchingto.png"),
	cost: 10
},
{
	id: "9",
	title: "Sugar",
	picture: require("./assets/images/books/selling.png"),
	cost: 36
},
{
	id: "10",
	title: "Coffee Powder",
	picture: require("./assets/images/books/node.png"),
	cost: 88
}
];

export const getProducts = () => {
    return books;
    
}


