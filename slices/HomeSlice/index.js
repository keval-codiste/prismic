import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HomeSliceSlice} HomeSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeSliceSlice>} HomeSliceProps
 * @param {HomeSliceProps}
 */
const HomeSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Placeholder component for home_slice (variation: {slice.variation}) Slices */}
      <div className="m-5">
        <PrismicRichText field={slice.primary.hometext} />
      </div>
    </section>
  );
};

export default HomeSlice;
