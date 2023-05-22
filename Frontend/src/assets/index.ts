import cat from "./cat.jpg";
import addiction from "./addiction.jpg";
import russian_icon from "./russian_icon.jpg";
import spirale from "./spirale.jpg";
import { useState } from "react";

function uImage() {
  const [aAddiction, sAddoction] = useState(false);
  const [aIcon, sIcon] = useState(false);
  const [aSpirale, sSpirale] = useState(false);

  const nftObject = [
    {
      name: "addiction",
      key: "0x02123dfgmdfjgjfpdreo3j98u9euwopjfwe9",
      image: addiction,
    },
    {
      name: "icon",
      key: "0x09ds0f9j8khj88ddh8d90fghdh9euwopjfwe9",
      image: russian_icon,      
    },
    {
      name: "spirale",
      key: "0x02123wewdkolkn45n6l54n3j98u9euwopjfwe9",
      image: spirale,
    },
  ];

  return nftObject;
}

export default uImage;
