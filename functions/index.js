const functions = require("firebase-functions");
const stripe = require("stripe")("sk_test_51Ifio9FVd0QvRm2UGxUbE32SNHyaHWyE7TrZnTai7CXsoso8C8hNLuo6ujEKgG05yNAWBvhjCizQkMZfsMLGmCrP00hGzkYvFY")
const admin = require("firebase-admin");
const { queryByRole } = require("@testing-library/dom");

admin.initializeApp()
const firestore = admin.firestore();



//auth triggers
exports.userCreated = functions.auth.user().onCreate((user) => {
  console.log(user);
  console.log("user created............");
  return Promise.resolve;
});

exports.userDeleted = functions.auth.user().onDelete((user) => {
  console.log(user);
  console.log("user deleted............");
  return Promise.resolve;
});

//firestore triggers
exports.orderAdded = functions.firestore.document("/orders/{docId}").onCreate((snap, context) => {
    console.log("Adding new order..........")
    console.log(`new order: ${snap.data()}`) // isme data hota he jo bana he
    console.log(`new order docId: ${context.params.docId}`)
    return Promise.resolve;
})

exports.orderUpdate = functions.firestore.document("/orders/{docId}").onUpdate((snap, context) => {
    console.log("updating order..........")
    console.log(`before: ${snap.before.data()}`)
    console.log(`after: ${snap.after.data()}`)
    console.log(`docId: ${context.params.docId}`)
    return Promise.resolve;
})

exports.orderDelete = functions.firestore.document("/orders/{docId}").onDelete((snap, context) => {
    console.log("deleting order..........")
    console.log(`deleted order: ${snap.data()}`) 
    console.log(`deleted docID: ${context.params.docId}`)
    return Promise.resolve;
})


//HTTPS trigger  (for making an API)
exports.welcomeUser = functions.https.onRequest((req, res) => {
    res.status(200).json({
        msg: "welcome to my website "
    })
    return Promise.resolve;
    
})

exports.sayHelloByName = functions.https.onRequest((req, res) => {
    var data = req.body;
    res.status(200).json({
        msg: `hello ${data.name}! welcome to my website`,
        email: `this is your email address: ${data.email}`
    })
    return Promise.resolve
})

var shapeCart = (cart) => {
    return cart.map(({title, cost, CoverPhoto, cartQuantity}) => ({
            price_data: {
              currency: 'usd',
              product_data: {
                name: title,
                images: [CoverPhoto],
              },
              unit_amount: cost * 100, //in cents now
            },
            quantity: cartQuantity,
    }))
}

exports.generateCheckoutSession = functions.https.onRequest( async (req, res) => {
    try {
        console.log(JSON.parse(req.body))
        var body = JSON.parse(req.body);
        var {orderId} = body;
        console.log(orderId)

        //fetch order
        var query = await firestore.collection("orders").doc(orderId).get()
        var order = query.data()
        console.log(order)

        //shape cart according to stripe
        var line_items = shapeCart(order.cart)

        //generate stripe session   
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `https://thelogicart.com/`,
            cancel_url: `https://thelogicart.com/`,
          });
    
    //send session to frontend
    res.set({ 'Access-Control-Allow-Origin': '*' }).status(200).json({
        data: {
          session,
        },
    }); 

    } catch (error) {
        console.log(error)
        // res.status(401).json({
        //     error
        // })  
    }
})



exports.stripeHook = functions.https.onRequest((req, res) => {
    try {
        //----------- security check ----------------
        const sig = req.headers['stripe-signature'];
        let event;
        try {
            //TODO: add endpoint here of firebase deployed function
            event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret); 
          }
          catch (err) {
            res.status(401).json({
                error: error.message
            })
            console.log('signature does not matched')
          }
        //----------- security check ----------------
        if(event.type === "checkout.session.completed"){
            console.log('got payment.............')
        }
        else{
            console.log("payment rejected........")
        }
        res.status(200).json({
            msg: "response from server"
        })
          
    } catch (error) {
     res.status(401).json({
            error: error.message
        })    
     console.log(error.message)
    }
})