import { Checkbox, Collapse, Divider, Slider } from "antd";
import React, { FC } from "react";
import "./filter.scss";

const { Panel } = Collapse;

const categories = [
  {
    name: "Covid Essentials",
    subCategories: [
      {
        name: "Masks",
      },
      {
        name: "Vitamin tablets",
      },
    ],
  },
  {
    name: "Medicines",
    subCategories: [
      {
        name: "Masks",
      },
      {
        name: "Vitamin tablets",
      },
    ],
  },
];

const brands = [
  {
    label: "All",
    value: 0,
  },
  {
    label: "Avakia",
    value: 1,
  },
  {
    label: "Cipla",
    value: 2,
  },
  {
    label: "Aavin",
    value: 3,
  },
];

interface FilterProps {}

const Filter: FC<FilterProps> = (props) => {
  const {} = props;

  const handlePriceRange = (slider: number) => {
    console.log(slider);
  };

  return (
    <div className="filter">
      <h1>Filter</h1>
      <Collapse ghost defaultActiveKey={["1", "2", "3"]}>
        <Panel header="Category" key={1}>
          <Collapse ghost>
            {categories.map((category, index) => {
              const handleClick = (event: any, isCategory?: boolean) => {
                event.stopPropagation();
                console.log(event, isCategory);
              };
              return (
                <Panel
                  header={category.name}
                  key={index + 1}
                  extra={
                    <Checkbox
                      className="checkbox-round"
                      onClick={(e) => handleClick(e, true)}
                    />
                  }
                >
                  {category.subCategories.map(({ name }, index) => (
                    <p key={index} className="sub-category">
                      {name}{" "}
                      <Checkbox
                        className="checkbox-round"
                        onClick={handleClick}
                      />
                    </p>
                  ))}
                </Panel>
              );
            })}
          </Collapse>
          <Divider />

        </Panel>
        <Panel header="Brand" key={2}>
          <Checkbox.Group className="checkbox-brand" options={brands}  />
          <Divider />

        </Panel>
        <Panel header="Price" key={3}>
          <Slider min={100} max={5000} range={true as any} defaultValue={[500, 3000] as any} onChange={handlePriceRange} marks={{ 100: "₹100", 5000: "₹5000"}}/>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Filter;
