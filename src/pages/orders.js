import { getSession, useSession } from "next-auth/client";
import Header from "../components/Header";
import moment from "moment";
import db from "../../firebase";
import Order from "../components/Order";

//Server-side rendering pre-fetching of orders
const Orders = ({ orders }) => {
  const [session] = useSession();
  return (
    <div>
      <Header />
      <main className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>
          Your orders
        </h1>
        {session ? <h2>{orders?.length} Orders</h2> : <h2>Please sign in </h2>}
        <div className='mt-5 space-y-4'>
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default Orders;

//Fetch  the orders, before the user sees the page, the info is already pre-rendered
//Anything inside ServerSideProps needs nodejs syntax
export async function getServerSideProps(context) {
  //context contains the request and the response
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  //Get the users logged in credentials ..
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }
  //Get orders from Firebase db
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  //Get Stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
