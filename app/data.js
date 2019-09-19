const groceries = [
{
	id: "1",
	title: "Cheese",
	picture: require("./assets/images/groceries/cheese.png"),
	cost: 34
},
{
	id: "2",
	title: "Bread",
	picture: require("./assets/images/groceries/bread.png"),
	cost: 40
},
{
	id: "3",
	title: "Milk",
	picture: require("./assets/images/groceries/milk.png"),
	cost: 48
},
{
	id: "4",
	title: "Butter",
	picture: require("./assets/images/groceries/butter.png"),
	cost: 25
},
{
	id: "5",
	title: "Jam",
	picture: require("./assets/images/groceries/jam.png"),
	cost: 20
},
{
	id: "6",
	title: "Biscuits",
	picture: require("./assets/images/groceries/biscuits.png"),
	cost: 22
},
{
	id: "7",
	title: "Chocolates",
	picture: require("./assets/images/groceries/chocolates.png"),
	cost: 100
},
{
	id: "8",
	title: "Chips",
	picture: require("./assets/images/groceries/chips.png"),
	cost: 10
},
{
	id: "9",
	title: "Sugar",
	picture: require("./assets/images/groceries/sugar.png"),
	cost: 36
},
{
	id: "10",
	title: "Coffee Powder",
	picture: require("./assets/images/groceries/coffeepowder.png"),
	cost: 88
}
];

export const getProducts = () => {
    return groceries;
    
}


