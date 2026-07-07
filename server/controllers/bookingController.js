const Booking = require("../models/Booking");

const createBooking = async (req, res) => {

    try {

        const { date, time } = req.body;

        const existingBooking = await Booking.findOne({
            date,
            time
        });

        if (existingBooking) {

            return res.status(400).json({
                success: false,
                message: "This date and time is already booked. Please choose another slot."
            });

        }

        const booking = await Booking.create(req.body);

        res.status(201).json({
            success: true,
            message: "Booking Successful",
            booking
        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createBooking
};