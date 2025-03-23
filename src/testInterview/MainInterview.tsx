import { useCallback, useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { ListProducts } from "./ListProducts";

const ViewProduct = ({ id }: { id: number }) => {
  console.log("ViewProduct is rendering");

  const {
    data,
    error,
    loading,
  }: { data: Product | null; error: string; loading: boolean } =
    useFetch<Product>(
      `https://dummyjson.com/products/${id}?select=id,title,category,description,price,thumbnail`,
      "GET"
    );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error {error}</div>;

  return (
    <>
      {data && (
        <>
          <div>{data.title}</div>
          <div>{data.category}</div>
          <div>${data.price}</div>
          <div>{data.description}</div>
          <img src={data.thumbnail} alt={data.title} />
        </>
      )}
    </>
  );
};

type Product = {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  thumbnail: string;
};

export default function MainInterview() {
  const [location, setLocation] = useState<{
    page: string;
    params: Record<string, number>;
  }>({
    page: "list",
    params: {},
  });

  const changeLocation = useCallback((page: string, params: Record<string, number>) => {
    setLocation({ page, params: params || {} });
  }, [setLocation])

  return (
    <div>
      {location.page === "list" && (
        <ListProducts changeLocation={changeLocation} />
      )}
      {location.page === "view" && <ViewProduct id={location.params.id} />}
      {location.page !== "list" && (
        <div>
          <a className="link" onClick={() => changeLocation("list", {})}>
            Return to list
          </a>
        </div>
      )}
      {/* <div>
        <button onClick={()=>setLocation({page: 'list', params: {}})}>Click me</button>
      </div> */}
    </div>
  );
}

//architecture wise, this is the 'lifted state' pattern where the navigation state is at the top
//level and routing happens in one place (thus nav back and forth is easier to implement)
//also if ListProducts were to render ViewProduct, separation of concern is lost. And going to a ViewProduct
//from somewhere else like say Search component, now it has to either go through/from ListProducts to a view
//that is challenging as app grows and lot of props and callbacks passing would be required to indicate ListProducts from somwhere
//to go to a certain product view.
