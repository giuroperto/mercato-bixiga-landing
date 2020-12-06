import './BottomFooter.css';
import { MdFavorite } from "react-icons/md";

const BottomFooter = () => {
  return (
    <div className="bottom-footer">
      <p>Criado com <MdFavorite className="heart-icon" /> por e-Roperto</p>
    </div>
  );
}

export default BottomFooter;