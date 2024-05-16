import { image, image1, image2, image3, image4 } from "../constants/images";

export default function Metrics2() {
  return (
    <>
      <div className="">
        <div className="flex overflow-auto items-center xl:overflow-hidden gap-[32px] justify-center">
          <img src={image} alt="" />
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
      </div>
    </>
  );
}
