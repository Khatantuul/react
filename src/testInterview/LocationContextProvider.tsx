import { createContext, ReactNode, useCallback, useContext, useState } from "react";

type LocationState = {
    page: string, 
    params: Record<string, number>;
}

type LocationContextType = {
    location: LocationState,
    changeLocation: (page: string, params: Record<string, number>) => void
}

//this is the context itself
export const LocationContext = createContext<LocationContextType>({
    location: { page: "list", params: {} },
    changeLocation: () => {},
  });
//this is the provider component
export function LocationContextProvider({ children }: { children: ReactNode }) {
  
    const [location, setLocation] = useState<LocationState>({
      page: "list",
      params: {},
    });
    
    const changeLocation = useCallback((page: string, params: Record<string, number>) => {
      setLocation({ page, params: params || {} });
    }, [setLocation]);
  
    return (
      <LocationContext.Provider value={{ location, changeLocation }}>
        {children}
      </LocationContext.Provider>
    );
  }


//so now we create a custom hook to be the consumer
//When creating a custom hook for context, the hook itself should be the consumer of the context, and 
// any component that uses this custom hook becomes a consumer through it.

export function useLocationContext(){
  const context = useContext(LocationContext);

  if(context === undefined){
    throw new Error("useLocationContext must be used with LocationContext")
  }
  return context;

}


//or simply can define the hook as such, that it is a function that returns whatever the context provider returns
// export const useLocationContext = () => useContext(LocationContext);