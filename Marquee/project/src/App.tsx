import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import JoyLatamMarquee from "./interfaces/joy_latam_marquee";
import ProductsGallerySection from "./components/products_gallery";


//In local development apply you local path, for building purposes just leave /
const url = `http://localhost:8080/`;

function App() {
  const [marqueeData, setMarqueeData] = useState<JoyLatamMarquee | undefined>(
    undefined
  );

  const getMarkeeData = async () => {
    try {
/**
 * Query Builder 
 * 
 * jsonapi/node/joy_latam_markee?fields[node--joy_latam_markee]=title,body,field_background_image,field_marquee_brands,field_call_to_action&fields[media--image]=field_media_image&fields[file--file]=uri&include=field_background_image.uid,field_marquee_brands.uid
 * 
 * joy_latam_markee = Content Type System name 
 * 
 * Fields System Names
 * ?fields[node--joy_latam_markee]=title,body,field_background_image,field_marquee_brands,field_call_to_action
 * 
 * Relationships for images and links
 * &fields[media--image]=field_media_image&fields[file--file]=uri&include=field_background_image.uid,field_marquee_brands.uid
 * 
 */


      const response = await fetch(
        `${url}jsonapi/node/joy_latam_markee?fields[node--joy_latam_markee]=title,body,field_background_image,field_marquee_brands,field_call_to_action&fields[media--image]=field_media_image&fields[file--file]=uri&include=field_background_image.uid,field_marquee_brands.uid`,
        {
          headers: {
            Accept: "applicati=on/vnd.api+json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      console.log(result);
      let { title, uri } = result.data[0].attributes!.field_call_to_action;
      let brandImages = result.included.splice(2);
      let pathOnDrupal: String = "";
      let imageRoutes: String = "";
      let backgroundImage: String = "";
      let productList = brandImages.map((item: any) => {
        if (item.type == "file--file") {
          backgroundImage = item.attributes.uri.url;
          pathOnDrupal = item.attributes.uri.url;
          let x = pathOnDrupal.toString().split("").reverse().join("");
          let route = x.substring(x.indexOf("/"));
          let y = route.toString().split("").reverse().join("");
          imageRoutes = y;
        }
        return item.type == "file--file" ? item.attributes.uri.url : "";
      });
      const marqueeData: JoyLatamMarquee = {
        title: result.data[0].attributes!.title,
        subtitle: result.data[0].attributes!.body.value,
        backgroundImage,
        imageRoutes,
        buttonTitle: title,
        buttonURL: uri,
      };
      setMarqueeData(marqueeData);
    } catch (err: any) {
      console.log(err);
    } finally {
      console.log(false);
    }
  };

  useEffect(() => {
    getMarkeeData();
  }, []);

  return <ProductsGallerySection data={marqueeData} />;
}

export default App;
