import { useParams } from "react-router-dom";

export default function App(props) {
  const { id } = useParams();

  return (
    <div>
      {id}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis
        ut massa eu faucibus.
      </p>
    </div>
  );
}
