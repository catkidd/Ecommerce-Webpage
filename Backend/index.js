import express from "express";
import cors from "cors";
import connDB from "./config/db.js";

const app = express();
const PORT = 8080;

connDB();

app.use(cors());
const menProduct = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 4.1,
            count: 259,
        },
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259,
        },
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: {
            rate: 4.7,
            count: 500,
        },
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: {
            rate: 2.1,
            count: 430,
        },
    },
];

const womenProduct = [
    {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
        price: 56.99,
        description:
            "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        rating: {
            rate: 2.6,
            count: 235,
        },
    },
    {
        id: 16,
        title: "Women's  Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description:
            "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating: {
            rate: 2.9,
            count: 340,
        },
    },
    {
        id: 17,
        title: "Women Windbreaker Striped  Raincoats",
        price: 39.99,
        description:
            "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        rating: {
            rate: 3.8,
            count: 679,
        },
    },
    {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Neck V ",
        price: 9.85,
        description:
            "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        rating: {
            rate: 4.7,
            count: 130,
        },
    },
    {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description:
            "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: {
            rate: 4.5,
            count: 146,
        },
    },
    {
        id: 20,
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        description:
            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        rating: {
            rate: 3.6,
            count: 145,
        },
    },
];

const featuredProduct = [
    {
        id: 1,
        title: "iphone x",
        company: "apple",
        price: 6000000,
        colors: ["#ff0000", "#000000", "#CDD0D0"],
        image: "https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
            "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        category: "mobile",
        featured: true,
        rating: {
            rate: 4.9,
            count: 340,
        },
    },
    {
        id: 2,
        title: "samsung s20",
        company: "samsung",
        price: 5000000,
        colors: ["#000", "#22D3EF"],
        image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
            "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        category: "mobile",
        shipping: true,
        rating: {
            rate: 3.5,
            count: 340,
        },
    },
    {
        id: 3,
        title: "Dell Series",
        company: "dell",
        price: 600000,
        colors: ["#22D3EF", "#CDD0D0"],
        image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
            "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        category: "laptop",
        rating: {
            rate: 4.9,
            count: 340,
        },
    },
    {
        id: 4,
        title: "Nokia 420",
        company: "nokia",
        price: 12599,
        colors: ["#000", "#000000", "#CDD0D0"],
        image: "https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
            "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        category: "mobile",
        shipping: true,
        rating: {
            rate: 4.5,
            count: 340,
        },
    },
    {
        id: 5,
        title: "Mac Pc",
        company: "apple",
        price: 4000099,
        colors: ["#000", "#CDD0D0"],
        image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
            "The Computer is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        category: "computer",
        shipping: true,
        rating: {
            rate: 3.4,
            count: 140,
        },
    },
    {
        id: 6,
        title: "Macbook Pro",
        company: "apple",
        price: 42999,
        colors: ["#000000", "#CDD0D0"],
        image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
            "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        category: "laptop",
        shipping: true,
        rating: {
            rate: 5,
            count: 360,
        },
    },
    {
        id: 7,
        title: "Asus gseries",
        company: "asus",
        price: 23999,
        colors: ["#CDD0D0", "#000"],
        image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
            "The laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        category: "laptop",
        shipping: true,
        rating: {
            rate: 4.5,
            count: 240,
        },
    },
    {
        id: 8,
        title: "Accessories",
        price: 1099999,
        company: "lenova",
        colors: ["#000", "#CDD0D0"],
        image: "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
            "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        category: "accessories",
        featured: true,
        shipping: true,
        rating: {
            rate: 3.9,
            count: 440,
        },
    },
    {
        id: 9,
        title: "Iwatch",
        price: 39999,
        company: "apple",
        colors: ["#000000"],
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
            "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        category: "watch",
        shipping: true,
        rating: {
            rate: 3.9,
            count: 440,
        },
    },
    {
        id: 10,
        title: "user need",
        company: "apple",
        price: 300099,
        colors: ["#ff0000", "#22D3EF", "#000000"],
        image: "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
            "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        category: "accessories",
        rating: {
            rate: 4.5,
            count: 540,
        },
    },
    {
        id: 11,
        title: "rolex premium",
        company: "rolex",
        price: 999999,
        colors: ["#000000", "#CDD0D0"],
        image: "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
            "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        category: "watch",
        rating: {
            rate: 2.9,
            count: 100,
        },
    },
    {
        id: 12,
        title: "galaxy w20",
        price: 311999,
        company: "samsung",
        colors: ["#22D3EF", "#ff0000", "#000000"],
        image: "https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
            "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        category: "watch",
        featured: true,
        rating: {
            rate: 3.9,
            count: 700,
        },
    },
];

app.get("/menProduct", (req, res) => {
    res.json({
        status: true,
        message: "Men's Products returned successfully",
        data: menProduct,
    });
});
app.get("/womenProduct", (req, res) => {
    res.json({
        status: true,
        message: "Women's Products returned successfully",
        data: womenProduct,
    });
});
app.get("/featuredProduct", (req, res) => {
    res.json({
        status: true,
        message: "Feature Products returned successfully",
        data: featuredProduct,
    });
});
app.post("/api/products", (req, res) => {
    menProduct.push(req.body);
    // console.log(menProduct);
    return res.send(200).json({ status: true, data: menProduct });
});

app.listen(PORT, () => {
    console.log("Server is running at port ", PORT);
});
