import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'tag-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-tag" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7", y1: "7", x2: "7", y2: "7" }
        },
        []
      )]
    );
  }
};