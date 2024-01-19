import { useParams } from "react-router-dom";

function Detail() {
  const x = useParams();
  console.log(x);
  return (
    <div>
      <h1>This is Detail Page (id = {x.id})</h1>
    </div>
  );
}

export default Detail;
