import { useParams } from "react-router-dom";
import designData from "../../data/designData.json";

export function Design() {
  const { category } = useParams();
  const fData = designData[category];






  
  // if link is wrong show error message
  if (!fData) {
    return <p>link bestaat niet</p>;
  }

  return (
    <div>
      Design
      <p>{fData.title}</p>
    </div>
  );
}
