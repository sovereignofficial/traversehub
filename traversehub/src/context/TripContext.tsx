    import React, { ReactNode, createContext, useReducer } from "react";
    import { myTrips } from "../utils/traversePages";
    import { TripActions, TripsInterface, Trip,TripStates } from "../utils/types.d";

    const reducer:React.Reducer<TripsInterface,TripActions> = (state: TripsInterface, action: TripActions) => {
        switch (action.type) {
            case TripStates.GET:
                return { ...state, trips: action.payload }
            case TripStates.SET:
                return { ...state, trips: [...state.trips, action.payload] }
            case TripStates.REMOVE:
                return { ...state, trips: state.trips.filter((item: Trip) => item.id !== action.payload.id) }
            case TripStates.GET_TRIP:
                return {...state, trip:action.payload }
            case TripStates.LOADING:{
                return{...state, isLoading:action.payload}
            }

            default:
                return state
        }
    }
    const initialState: TripsInterface = {
        trips: [],
        trip: undefined,
        isLoading: false,
    } as TripsInterface
    
    const TripContext = createContext(initialState);

    function TripProvider({ children }: { children: ReactNode }) {


        const [{ trips,trip, isLoading }, dispatch] = useReducer(reducer, initialState);

        async function fetchTrips() {
            // fetch data from api

            //assign to state
            dispatch({type:TripStates.GET,payload:myTrips})
        }
        async function saveTrip(newTrip:Trip) {
            //get data from client 

            // assign to state
            dispatch({type:TripStates.SET,payload:newTrip})
        }
        async function removeTrip(trip:Trip) {
            // get data from client

            //remove data from state and update
            dispatch({type:TripStates.REMOVE,payload:trip})
        }
        async function getTrip(tripID:number){
            dispatch({type:TripStates.LOADING , payload:true})
            //find city by id
            try{
                 const foundTrip = trips.find((item:Trip)=>item.id ===tripID);
                 
                 if(!foundTrip)throw new Error('Trip ID is invalid!');

                 dispatch({type:TripStates.GET_TRIP,payload:foundTrip});
            }catch(err){
                console.error(err);
            }finally{
                dispatch({type:TripStates.LOADING , payload:false})
            }
        }

        return (
            <TripContext.Provider value={{ trips,trip, isLoading, fetchTrips, saveTrip, removeTrip,getTrip }}>
                {children}
            </TripContext.Provider>
        )
    }

    export {TripContext,TripProvider}
