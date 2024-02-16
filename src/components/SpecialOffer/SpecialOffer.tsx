import { Button } from 'react-bootstrap';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const SpecialOffer = () => {
  return (
    <div className="d-flex align-items-center gap-1">
      <Button variant="" className="btn">
        <MdKeyboardArrowLeft size={24} />
      </Button>
      <p className="m-0 p-0">
        Valentine’s Day Offers! Buy Two Get One Free Shop Now{' '}
        <a className="text-dark fw-bolder" href="#">
          Shop Now
        </a>
      </p>

      <Button variant="" className="btn">
        <MdKeyboardArrowRight size={24} />
      </Button>
    </div>
  );
};

export default SpecialOffer;
