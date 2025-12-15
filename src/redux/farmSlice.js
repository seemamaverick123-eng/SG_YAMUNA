import { createSlice } from "@reduxjs/toolkit";
import farm1 from "../assets/room1.jpg";
import farm2 from "../assets/room2.jpg";
import farm3 from "../assets/room3.jpg";

const initialState = {
  category: "All",
  farms: [
    // PARTY
    { id: 1, name: "Party Farm 1", category: "Party", image: farm1, desc: "Best for events & parties" },
    { id: 2, name: "Party Farm 2", category: "Party", image: farm2, desc: "Luxury party space" },
    { id: 3, name: "Party Farm 3", category: "Party", image: farm3, desc: "Open lawn farmhouse" },
    { id: 4, name: "Party Farm 4", category: "Party", image: farm1, desc: "Birthday & DJ parties" },
    { id: 5, name: "Party Farm 5", category: "Party", image: farm2, desc: "Private farmhouse party" },
    { id: 6, name: "Party Farm 6", category: "Party", image: farm3, desc: "Night party space" },

    // STAY
    { id: 7, name: "Stay Farm 1", category: "Stay", image: farm1, desc: "Peaceful nature stay" },
    { id: 8, name: "Stay Farm 2", category: "Stay", image: farm2, desc: "Luxury stay farmhouse" },
    { id: 9, name: "Stay Farm 3", category: "Stay", image: farm3, desc: "Green stay experience" },

    // WEDDING
    { id: 10, name: "Wedding Farm 1", category: "Wedding", image: farm1, desc: "Grand wedding venue" },
    { id: 11, name: "Wedding Farm 2", category: "Wedding", image: farm2, desc: "Royal wedding lawn" },
    { id: 12, name: "Wedding Farm 3", category: "Wedding", image: farm3, desc: "Luxury wedding place" },
    { id: 13, name: "Wedding Farm 4", category: "Wedding", image: farm1, desc: "Destination wedding" },
    { id: 14, name: "Wedding Farm 5", category: "Wedding", image: farm2, desc: "Traditional wedding venue" },
    { id: 15, name: "Wedding Farm 6", category: "Wedding", image: farm3, desc: "Premium wedding lawn" },
  ],
};

const farmSlice = createSlice({
  name: "farm",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = farmSlice.actions;
export default farmSlice.reducer;
