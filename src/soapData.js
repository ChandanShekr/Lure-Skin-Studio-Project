import sample from "../src/images/review-image2.jpg";

const soapData = {
  products: [
    {
      product_name: "Charcoal soap",
      MRP: 150,
      benefits: [
        "Removes excess oil secretion.",
        "Reduces acne & pimples.",
        "Reduces the pore size.",
        "Prevents premature ageing.",
        "Provides exfoliation.",
      ],
      "usage_&_storage": [
        "Ideal for acne & oily skin.",
        "Rub the soap gently on your wet skin to lather.",
        "Store in a ventilated soap box to drain away the water completely.",
      ],
      loaded_with: [
        "Base oils",
        "Shea butter",
        "Activated bamboo charcoal powder",
        "Tea tree oil",
      ],
      proImg: sample,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia blandit nunc, et facilisis lectus.",
      ratings: 4.7, 
      purchases: 140, 
      arrivalDate: "2024-09-20", 
    },
    {
      product_name: "Shea Butter Soap",
      MRP: 150,
      benefits: [
        "Fantastic moisturiser.",
        "Collagen production is boosted (anti-ageing).",
        "Promotes cell regeneration.",
        "Vitamin A, E & F present to keep skin healthy.",
      ],
      "usage_&_storage": [
        "Ideal for dry & combination skin.",
        "Rub the soap gently on your wet skin to lather.",
        "Store in a ventilated soap box to drain away the water completely.",
      ],
      loaded_with: ["Base oils", "Unrefined Shea butter", "Rose geranium oil"],
      proImg: sample,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia blandit nunc, et facilisis lectus.",
      ratings: 4.5, 
      purchases: 120, 
      arrivalDate: "2024-08-25", 
    },
    {
      product_name: "French Green Clay with Spirulina Soap",
      MRP: 120,
      benefits: [
        "Drawing out impurities from the pores.",
        "Exfoliating dead skin cells.",
        "Toning & firming the skin.",
        "Releases the feeling of tiredness.",
      ],
      "usage_&_storage": [
        "Ideal for acne & oily skin.",
        "Rub the soap gently on your wet skin to lather.",
        "Store in a ventilated soap box to drain away the water completely.",
      ],
      loaded_with: [
        "Base oils",
        "French green clay",
        "Spirulina powder",
        "Peppermint oil",
      ],
      proImg: sample,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia blandit nunc, et facilisis lectus.",
      ratings: 4.3, 
      purchases: 100, 
      arrivalDate: "2024-09-05", 
    },
    {
      product_name: "French Pink Clay with Rose Soap",
      MRP: 120,
      benefits: [
        "Cleanse & detoxify skin.",
        "Treat acne.",
        "Restore & replenish skin with moisture while drawing out impurities.",
      ],
      "usage_&_storage": [
        "Ideal for acne & oily skin.",
        "Rub the soap gently on your wet skin to lather.",
        "Store in a ventilated soap box to drain away the water completely.",
      ],
      loaded_with: [
        "Base oils",
        "Wild Rose oil",
        "French pink clay",
        "Organic rose petals",
      ],
      proImg: sample,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia blandit nunc, et facilisis lectus.",
      ratings: 4.6, 
      purchases: 130, 
      arrivalDate: "2024-08-15", 
    },
    {
      product_name: "Red-wine soap",
      MRP: 100,
      benefits: [
        "Red wine helps to fight aging by restoring collagen and elastic fibres.",
        "Red wine gives boost to sagging skin, reducing fine lines and wrinkles.",
        "Sulphate free parables free.",
      ],
      "usage_&_storage": [
        "Ideal for acne, all skin types.",
        "Rub the soap gently on your wet skin to lather.",
        "Store in a ventilated soap box to drain away the water completely.",
      ],
      loaded_with: [
        "Coconut oil",
        "Castor oil",
        "Sodium hydroxide",
        "Glycerine",
        "Red wine extract",
        "Distilled water",
        "Solvents (CAPB) and red color (FDA approved)",
      ],
      proImg: sample,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia blandit nunc, et facilisis lectus.",
      ratings: 4.1, 
      purchases: 95, 
      arrivalDate: "2024-07-10", 
    },
    {
      product_name: "Detan soap",
      MRP: 200,
      benefits: [
        "Deep cleanses and removes impurities.",
        "Improves skin radiance.",
        "Reduces tanning.",
      ],
      "usage_&_storage": [
        "Ideal for normal to oily skin.",
        "Rub the soap gently on your wet skin to lather.",
        "Store in a ventilated soap box to drain away the water completely.",
      ],
      loaded_with: [
        "Base oils",
        "Lemongrass oil",
        "Potato powder",
        "Tomato purée",
      ],
      proImg: sample,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia blandit nunc, et facilisis lectus.",
      ratings: 4.8, 
      purchases: 160, 
      arrivalDate: "2024-08-01", 
    },
    {
      product_name: "All Clear Dandruff Hair Oil",
      MRP: 430,
      benefits: [
        "Relieves scalp itchiness.",
        "Controls flaky dandruff and fungal infection of scalp.",
        "Prevents split ends and adds shine & lustre to hair.",
        "Delays premature greying.",
      ],
      "usage_&_storage": [
        "Apply the oil directly on the scalp using the applicator.",
        "Give a good massage and leave it for at least 30 mins or overnight for best results.",
        "Use weekly twice or can be used regularly.",
      ],
      loaded_with: [
        "Coconut oil",
        "Castor oil",
        "Amla",
        "Henna leaves",
        "Curry leaves",
        "Fenugreek",
        "Hibiscus flower",
        "Aloevera",
        "Bhringraj",
        "Neem leaves",
        "Rosemary oil",
        "Tea tree oil.",
      ],
      proImg: sample,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia blandit nunc, et facilisis lectus.",
      ratings: 4.9, 
      purchases: 220, 
      arrivalDate: "2024-09-10", 
    },
    {
      product_name: "Hair Growth Oil",
      MRP: 550,
      benefits: [
        "Strengthens hair roots.",
        "Hydrates the hair and prevents frizz.",
        "Helps in regeneration of new hair follicles.",
        "Nourishes the hair.",
      ],
      "usage_&_storage": [
        "Apply the oil directly on the scalp using the applicator.",
        "Give a good massage and leave it for at least 30 mins or overnight for best results.",
        "Use weekly twice or can be used regularly.",
      ],
      loaded_with: [
        "Coconut oil",
        "Dried skunk vine",
        "Cumin seeds",
        "False daisy",
        "Fenugreek",
        "Nigella seeds",
        "Perani",
        "True indigo",
        "Vetiver",
        "White turmeric.",
      ],
      proImg: sample,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia blandit nunc, et facilisis lectus.",
      ratings: 5.0, 
      purchases: 300, 
      arrivalDate: "2024-10-05", 
    },
  ],
};

const soaps = soapData.products.filter((product) =>
  product.product_name.toLowerCase().includes("soap")
);
const oils = soapData.products.filter((product) =>
  product.product_name.toLowerCase().includes("oil")
);

export { soaps, oils };
