<script>export let value;
const topSegment = '02356789';
const topLeftSegment = '045689';
const topRightSegment = '01234789';
const centerSegment = '-2345689';
const bottomLeftSegment = '0268';
const bottomRightSegment = '013456789';
const bottomSegment = '0235689';
$: last = typeof value === 'number' ? value % 10 : value.at(-1) ?? '0';
</script>

<div>
	<span
		style="grid-column: 2; grid-row: 1;"
		class:on="{topSegment.includes(last.toString())}"
		class="horizontal top"
	></span>
	<span
		style="grid-column: 1; grid-row: 2;"
		class:on="{topLeftSegment.includes(last.toString())}"
		class="vertical left"
	></span>
	<span
		style="grid-column: 3; grid-row: 2;"
		class:on="{topRightSegment.includes(last.toString())}"
		class="vertical right"
	></span>
	<span
		style="grid-column: 2; grid-row: 3;"
		class:on="{centerSegment.includes(last.toString())}"
		class="horizontal center"
	></span>
	<span
		style="grid-column: 1; grid-row: 4;"
		class:on="{bottomLeftSegment.includes(last.toString())}"
		class="vertical left"
	></span>
	<span
		style="grid-column: 3; grid-row: 4;"
		class:on="{bottomRightSegment.includes(last.toString())}"
		class="vertical right"
	></span>
	<span
		style="grid-column: 2; grid-row: 5;"
		class:on="{bottomSegment.includes(last.toString())}"
		class="horizontal bottom"
	></span>
</div>

<style>div {
  --unit-gap: 1px;
  --inner-gap: calc(var(--unit-gap) * 3);
  width: var(--seven-segment-display-digit-only-width);
  height: calc(var(--seven-segment-display-digit-only-height) - 1px);
  background-color: black;
  display: grid;
  grid-template-columns: var(--unit-gap) var(--seven-segment-display-horizontal-bar-width) var(--unit-gap);
  grid-template-rows: var(--unit-gap) var(--seven-segment-display-vertical-bar-height) 0 var(--seven-segment-display-vertical-bar-height) var(--unit-gap);
  padding: var(--unit-gap);
}
div span:not(.on) {
  --off-fg: rgb(255 0 0 / 35%);
  --off-bg: rgb(255 0 0 / 10%);
  background: repeating-conic-gradient(var(--off-fg) 0 90deg, var(--off-bg) 0 180deg) 0 0/25% 25%;
  background-size: 2px 2px;
}
div span.on {
  background-color: red;
}
div span.horizontal {
  justify-self: center;
}
div span.horizontal:not(.center) {
  width: calc(var(--seven-segment-display-digit-only-width) - 1px);
  height: var(--seven-segment-display-horizontal-bar-height);
}
div span.horizontal.center {
  width: calc(var(--seven-segment-display-horizontal-center-bar-width) + 0px);
  height: calc(var(--seven-segment-display-horizontal-center-bar-height));
  clip-path: polygon(var(--unit-gap) 0%, calc(100% - var(--unit-gap)) 0%, 100% var(--unit-gap), 100% calc(100% - var(--unit-gap)), calc(100% - var(--unit-gap)) 100%, calc(var(--unit-gap)) 100%, 0 calc(100% - var(--unit-gap)), 0 var(--unit-gap));
  align-self: center;
}
div span.horizontal.top, div span.horizontal.bottom {
  clip-path: polygon(var(--unit-gap) 0, var(--unit-gap) var(--unit-gap), var(--inner-gap) 100%, calc(100% - var(--inner-gap)) 100%, calc(100% - var(--unit-gap)) var(--unit-gap), calc(100% - var(--unit-gap)) 0);
}
div span.horizontal.top {
  align-self: start;
}
div span.horizontal.bottom {
  align-self: end;
  transform: rotate(180deg);
}
div span.vertical {
  align-self: center;
  width: var(--seven-segment-display-vertical-bar-width);
  height: calc(var(--seven-segment-display-vertical-bar-height) + 1px);
}
div span.vertical.left, div span.vertical.right {
  justify-self: start;
  clip-path: polygon(0% var(--unit-gap), var(--unit-gap) var(--unit-gap), 100% var(--inner-gap), 100% calc(100% - var(--inner-gap)), var(--unit-gap) calc(100% - var(--unit-gap)), 0% calc(100% - var(--unit-gap)));
}
div span.vertical.left {
  justify-self: start;
}
div span.vertical.right {
  justify-self: end;
  transform: rotate(180deg);
}</style>
