import React from "react";

type CategoryBarProps = {
  Imgsrc: string;
  CategoryName: string;
};

const CategoryBar: React.FC<CategoryBarProps> = ({ Imgsrc, CategoryName }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16">
        <img src={Imgsrc} alt="CategoryImg" className="w-full rounded-full" />
      </div>
      <p className="w-full text-sm font-medium py-1">{CategoryName}</p>
    </div>
  );
};

export default CategoryBar;
