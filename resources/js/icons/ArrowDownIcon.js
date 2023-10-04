import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'arrow-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      _mergeJSXProps([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-down" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "5", x2: "12", y2: "19" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "19 12 12 19 5 12" }
        },
        []
      )]
    );
  }
};