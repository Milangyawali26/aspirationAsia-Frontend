// import React, { useEffect, useReducer } from 'react';
// import { getAllHotels } from './hotel_admin_contoller';

// // Initial state
// const initialState = {
//   allHotels: [],
//   reload: false,
// };

// // Reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_HOTELS':
//       return { ...state, allHotels: action.payload };
//     case 'TOGGLE_RELOAD':
//       return { ...state, reload: !state.reload };
//     default:
//       return state;
//   }
// };

// const useAllHotels = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     fetchHotels();
//   }, [state.reload]);

//   const fetchHotels = async () => {
//     const hotels = await getAllHotels();
//     dispatch({ type: 'SET_HOTELS', payload: hotels });
//   };

//   const handleRefresh = () => {
//     dispatch({ type: 'TOGGLE_RELOAD' });
//   };

//   return { allHotels: state.allHotels, handleRefresh };
// };

// export default useAllHotels;
