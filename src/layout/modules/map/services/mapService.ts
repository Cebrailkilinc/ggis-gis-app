import { LatLngExpression } from "leaflet"

export class MapService{

    deneme = (setAllCoord: React.Dispatch<React.SetStateAction<LatLngExpression[] | LatLngExpression[][]>>)=>{
        setAllCoord([])
      }

    handleBasemap = (setBaseMap:React.Dispatch<React.SetStateAction<boolean>>, baseMap: boolean): void => {
        setBaseMap(!baseMap);        
    };

  

}