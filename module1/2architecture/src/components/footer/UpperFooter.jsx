import React from "react";

function Item({ header, subitems }) {
  const subs = subitems.map((item) => {
    return (
      <li className="mb-4">
        <a href="#" className=" hover:underline">
          {item}
        </a>
      </li>
    );
  });

  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {header}
      </h3>

      <ul className="text-gray-500 dark:text-gray-400">{subs}</ul>
    </div>
  );
}

function UpperFooter() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        <Item
          header={"Company"}
          subitems={["About", "Careers", "Brand Center", "Blog"]}
        />
        <Item
          header={"Help Center"}
          subitems={["Discord Server", "Twitter", "Facebook", "Contact Us"]}
        />
        <Item
          header={"Legal"}
          subitems={["Privacy Policy", "Licensing", "Terms"]}
        />

        <Item
          header={"Company"}
          subitems={["About", "Careers", "Brand Center", "Blog"]}
        />

        <Item
          header={"Download"}
          subitems={["iOS", "Android", "Windows", "MacOS"]}
        />
      </div>
    </>
  );
}

export default UpperFooter;
