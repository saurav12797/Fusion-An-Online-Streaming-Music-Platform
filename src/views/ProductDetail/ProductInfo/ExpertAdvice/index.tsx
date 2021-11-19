import React, { FC } from "react";
import Content from "../Content";
import "./expertAdvice.scss";

const data =
  "<p>Ad illum natoque volutpat leo curabitur est nisi reprehenderit quisque illo ullam scelerisque viverra taciti voluptatum adipiscing omnis vel augue convallis anim dis quis et molestiae, eos aenean corrupti neque? Interdum, quisque diam molestie porta iaculis earum? Non magni bibendum eum fugiat, fringilla donec! Facilis eligendi litora mattis similique laborum dictumst sapien cubilia aute.</p>";

interface ExpertAdviceProps {}

const ExpertAdvice: FC<ExpertAdviceProps> = (props) => {
  const {} = props;

  return (
    <div className="expert-advice">
      <Content title="" data={data} />
    </div>
  );
};

export default ExpertAdvice;
