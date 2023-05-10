import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.DemoSlice} DemoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DemoSlice>} DemoProps
 * @param {DemoProps}
 */
const Demo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Placeholder component for demo (variation: {slice.variation}) Slices */}
      <div className="m-5">
        <PrismicRichText field={slice.primary.info_text} />
      </div>
    </section>
  );
};

export default Demo;
