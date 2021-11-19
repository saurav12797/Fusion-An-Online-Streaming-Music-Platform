import React, { FC } from "react";
import Content from "../Content";
import "./interaction.scss";

interface InteractionProps {}

const data =
  "<p>Ad illum natoque volutpat leo curabitur est nisi reprehenderit quisque illo ullam scelerisque viverra taciti voluptatum adipiscing omnis vel augue convallis anim dis quis et molestiae, eos aenean corrupti neque? Interdum, quisque diam molestie porta iaculis earum? Non magni bibendum eum fugiat, fringilla donec! Facilis eligendi litora mattis similique laborum dictumst sapien cubilia aute.</p>";

const Interaction: FC<InteractionProps> = (props) => {
  const {} = props;

  return (
    <div className="interaction">
      <Content title="Kidney interaction" data={data} />
      <Content title="Lactation interaction" data={data} />
      <Content title="Alcohol interaction" data={data} />
      <Content title="Pregnancy interaction" data={data} />
      <Content title="Medicine interaction" data={data} />
      <Content title="Liver interaction" data={data} />
    </div>
  );
};

export default Interaction;
