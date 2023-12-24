<script>import { browser } from '$app/environment';
import { BehaviorSubject, combineLatest, interval, map, startWith } from 'rxjs';
import { onMount } from 'svelte';
const language$ = new BehaviorSubject('en');
const time$ = combineLatest([
    language$,
    interval(1000).pipe(startWith(undefined), map(() => new Date())),
]).pipe(map(([language, date]) => date.toLocaleTimeString(language, {
    hour: '2-digit',
    minute: '2-digit',
})));
onMount(() => {
    if (browser) {
        language$.next(navigator.language);
    }
});
</script>

<span class="clock">{$time$}</span>

<style>.clock {
  font-variant-numeric: tabular-nums;
  font-size: 16px;
  width: 48px;
  margin: 5px 8px 5px 9px;
  line-height: 8px;
  padding-top: 1.5px;
  padding-bottom: 0.5px;
}</style>
