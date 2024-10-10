const express = require('express');
const Room = require('../Models/Room');
const router = express.Router();

// Get all rooms
router.get('/', async (req, res) => {
  try {
    console.log("Searching rooms...");
    const rooms = await Room.find({});  // Correctly using Room model .
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// create Add a new room
router.post('/', async (req, res) => {
  const room = new Room({
    id: req.body.id,   // Added 'id' to match your schema
    name: req.body.name,
    price: req.body.price,
    amenities: req.body.amenities,
    available: req.body.available
  });
  try {
    const newRoom = await room.save();
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// Get room by id
router.get('/getRoom/:id', async (req, res) => {
  try {
    const room = await Room.findOne({ id: req.params.id });
    if (room) {
      res.json(room);
    } else {
      res.status(404).json({ message: 'Room not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Delete room by id
router.delete('/deleteRoom/:id', async (req, res) => {
  try {
    const result = await Room.deleteOne({ id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json({ message: 'Room deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//edit Room details 
router.patch('/editRoom/:id', async (req, res) => {
  try {
      // Find the room by ID
      const rm = await Room.findOne({ id: req.params.id });

      // If the room is not found, return a 404 response
      if (!rm) {
          return res.status(404).send('Room not found');
      }

      // Update the room with the new values from the request body
      Object.assign(rm, req.body);

      // Save the updated room
      const ans = await rm.save();

      // Respond with the updated room details
      res.send(ans);
  } catch (error) {
      // Handle any errors that occur during the process
      res.status(500).send('Error updating room: ' + error.message);
  }
});

module.exports = router;
