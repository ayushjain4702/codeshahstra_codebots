const Client  = require('../database/models/client.model');
const Coupon = require('../database/schemas/coupon.schema');
const Order = require('../database/schemas/orders.schema');
const User = require('../database/schemas/user.schema');
const Api = require('../database/schemas/api.schema');

const createOrder=async(data)=>{
    try {
        const{boughtBy,clientID,transactionId,couponCode,items}=data
            const order = await Order.create({
                boughtBy,
                clientID,
                transactionId,
                couponCode,
                isPaid: true,
                items,
              });
            
              await order.save();
              // const createdOrder = await Order.find(order);

              const user = await User.create({
                userID:boughtBy,
                clientID:clientID
              });
            
              await user.save();
              
              const coupon = await Coupon.findOne({
                couponCode: couponCode,
              });
              if (!coupon) {
                return {
                    success:false,
                    message:"Coupon not found"
                }
              }
              await Coupon.findOneAndUpdate(
                { _id: coupon._id },
                {
                  $push: {
                    Orders: order._id,
                  },
                }
              );
              await Coupon.findOneAndUpdate(
                { _id: coupon._id },
                {
                  $push: {
                    usedBy: boughtBy,
                  },
                }
              );
              return {orderID:order._id,userID:boughtBy}
    } catch (error) {
        console.log(error);
        return {
            success:false,
            message:error.message
        }
    }

}