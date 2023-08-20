
type traverseMenuItem = {
    label:string,
    icon:OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    url:string
}
type Trip = {
    id:number,
    country:string,
    ctCode:string,
    city:string,
    notes:string,
    position:{
        lat:number,
        lng:number,
    }
    date:Date
}


enum TripStates{
    GET="GET_TRIPS",
    SET="SAVE_TRIP",
    REMOVE="REMOVE_TRIP",
    GET_TRIP="GET_TRIP",
    LOADING="LOADING"
}

type TripActions = {
    type:TripStates.GET,
    payload:Trip[]
} |
{
    type:TripStates.REMOVE,
    payload:Trip,
} |
{
    type:TripStates.SET,
    payload:Trip
} |
{
    type:TripStates.GET_TRIP,
    payload:Trip | undefined
} |
{
    type:TripStates.LOADING,
    payload:boolean
}

interface TripsInterface{
    trips:Trip[],
    trip:Trip | undefined,
    isLoading:boolean,
    fetchTrips?:()=> Promise<void>,
    saveTrip?:(newTrip:Trip)=> Promise<void>,
    removeTrip?:(trip:Trip)=>Promise<void>,
    getTrip?:(tripID:number)=>Promise<void>
}

export {
    traverseMenuItem,
    Trip,
    TripStates,
    TripActions,
    TripsInterface
}