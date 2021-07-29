const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  //recover data from front-end
  const { items, email } = req.body;
  //transform data into data format that stripe can accept
  const transformedItems = items?.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "eur",
      unit_amount: item.price * 100, //stripe takes cents
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  //create the session page
  const session = await stripe.checkout.sessions.create({
    //add payment method card
    payment_method_types: ["card"],
    shipping_rates: ["shr_1IyECtHQf3hGzTFByJofRdSm"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"],
    },
    line_items: transformedItems,
    mode: "payment",
    //the success url changes. In a local environment, vs deployed
    success_url: `${process.env.HOST}/success`,
    //if payment fails, we take it back to the checkout page.
    cancel_url: `${process.env.HOST}/checkout`,
    //we pass in additional data
    metadata: {
      //el email va a conectar stripe con firebase
      email,
      //JSON.stringify will convert the array into a string, and thus will make it easier to travel over the internet
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  //return a json value
  res.status(200).json({ id: session.id });
};
