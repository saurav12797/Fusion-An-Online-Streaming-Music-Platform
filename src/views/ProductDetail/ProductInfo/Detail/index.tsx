import React, { FC } from "react";
import Content from "../Content";
import "./detail.scss";

interface DetailProps {}

const data =
  "<p>Ad illum natoque volutpat leo curabitur est nisi reprehenderit quisque illo ullam scelerisque viverra taciti voluptatum adipiscing omnis vel augue convallis anim dis quis et molestiae, eos aenean corrupti neque? Interdum, quisque diam molestie porta iaculis earum? Non magni bibendum eum fugiat, fringilla donec! Facilis eligendi litora mattis similique laborum dictumst sapien cubilia aute.</p>";

const list = "<ul><li>Ingredient - Eget cursus officiis, consequuntur adipisci tincidunt</li><li>Ingredient - Eget cursus officiis, consequuntur adipisci tincidunt</li><li>Ingredient - Eget cursus officiis, consequuntur adipisci tincidunt</li><li>Ingredient - Eget cursus officiis, consequuntur adipisci tincidunt</li><li>Ingredient - Eget cursus officiis, consequuntur adipisci tincidunt</li></ul>";

const Detail: FC<DetailProps> = (props) => {
  const {} = props;

  return (
    <div className="detail">
      <Content title="Description" data={data} />
      <Content title="Key Benefits" data={list} />
      <Content title="Key Ingredients" data={list} />
      <Content title="How it works?" data={data} />
      <Content title="How to Use?" data={data} />
    </div>
  );
};

export default Detail;
