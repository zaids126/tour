// import React,{useState
// } from 'react';


// import PlacesAutocomplete,{
    
//     geocodeByAddress,
//     geocodeByPlaceId,
//     getLatLng,
//   } from 'react-places-autocomplete';

   

   
//     const Fetch = () => {

//     //   let headers = new Headers();

//     // headers.append('Content-Type', 'application/json');
//     // headers.append('Accept', 'application/json');
//     // headers.append('Origin','http://localhost:3000'); 

//    const [address,setAddress]  = useState('');
//    const [coordinates,setCoordinates]=useState({
//      lat:null,
//      lng:null
//    })


//    const handleSelect = async value =>   {

//     const results = await geocodeByAddress(value);
//     const ll = await  getLatLng(results[0]);

//     console.log(ll);
//     setAddress(value);
//     setCoordinates(ll)

//    }
//       return (
//           <div>

//             <p>lat:{coordinates.lat}</p>
//             <p>lng:{coordinates.lng}</p>
//             <p>Address:{address}</p>
                          
//               <PlacesAutocomplete
//         value={address}
//         onChange={setAddress}
//         onSelect={handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: 'Search Places ...',
//                 className: 'location-search-input',
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active
//                   ? 'suggestion-item--active'
//                   : 'suggestion-item';
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                 return (
//                   <div
//                     {...getSuggestionItemProps(suggestion, {
//                       className,
//                       style,
//                     })}
//                   >
//                     <span>{suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//           </div>
//       )
//   }
  
//   export default Fetch;
  